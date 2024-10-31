<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-12">
        <div class="d-flex flex-column">
          <div class="w-100 p-2 d-flex mt-3">
            <router-link class="btn" style="color: white" :to="{ name: 'profile' }">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </router-link>
            <div class="d-flex m-auto">
              <strong class="mr-4" style="color: white; font-size: 24px"> Biểu Tượng MXH </strong>
            </div>
          </div>
          <div class="w-100 p-2 mt-2">
            <!-- <a href="/bieutuong/thembieutuong">
              <button class="btn btn-add">Thêm mới</button></a
            > -->
            <router-link style="color: white" :to="{ name: 'thembieutuong' }">
              <button class="btn btn-add" style="font-weight: 600">
                <strong>Thêm mới</strong>
              </button>
            </router-link>
          </div>
          <div
            class="w-100 p-2 mt-3"
            v-for="itemLienKet in listLienKetCaNhan"
            :key="itemLienKet.id"
          >
            <div class="d-flex w-100 item shadow-sm" style="color: white">
              <div class="d-flex w-100 fs-13 m-auto">
                <div class="bg-icon ml-3">
                  <img
                    class="m-auto"
                    :src="`https://drive.google.com/thumbnail?id=${itemLienKet.image_key}&sz=w100`"
                    style="width: 50px"
                  />
                </div>
                <span class="align-center ml-3"> {{ itemLienKet.name }}</span>
              </div>
              <div class="d-flex m-auto ml-3">
                <div class="d-flex mr-3">
                  <span class="icon mr-2" @click="updateInfo(itemLienKet)"
                    ><i class="fa fa-pencil p-2 font-icon" aria-hidden="true"></i
                  ></span>
                  <span class="icon" @click="xoaBieuTuong(itemLienKet.id)"
                    ><i class="fa fa-trash-o p-2 font-icon" aria-hidden="true"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" v-if="showLoading">
    <div class="box-loadding box m-auto"></div>
  </div>
  <div id="snackbar" v-if="showModal">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center">
        <div class="modal-content-thongbao" v-if="statusCode == 200">
          <div class="modal-header f-flex flex-column m-auto p-4" style="color: red">
            <h5 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img style="width: 50px" src="/img/icon/icon-xoa.png" />
            </h5>
            <span> Đã xóa biểu tượng liên kết !</span>
          </div>
          <!-- <div class="modal-footer">
          <button type="button" @click="closeModal" class="btn btn-primary m-auto">Đồng ý !</button>
        </div> -->
        </div>
        <div class="modal-content-thongbao" v-else>
          <div class="modal-header f-flex flex-column m-auto p-4" style="color: red">
            <h1 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img style="width: 50px" src="/img/icon/icon-xoa.png" />
            </h1>
            <span> Hệ thống đang bảo trì vui lòng thử lại sau !</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div id="snackbar" v-if="showModalXoa">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center flex-column">
        <div class="modal-header f-flex flex-column m-auto p-4" style="color: green">
          <h5 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img style="width: 50px" src="/img/icon/icon-xoa.png" />
            </h5>
            <span>Xóa biểu tượng liên kết !</span>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="closeModal"
            class="btn btn-primary m-auto"
            style="background-color: red; border: none"
          >
            Hủy
          </button>
          <button
            type="button"
            @click="deleBieuTuong"
            class="btn btn-primary m-auto"
            style="background-color: #f37d34; border: none"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div> -->
  <chan-trang></chan-trang>
</template>
<style>
.btn-add {
  width: 100%;
  background: wheat;
  color: #b73600;
  border-radius: 25px;
}
.item {
  color: white;
  background: #c4450070;
  height: 50px;
  border-radius: 10px;
}
.icon {
  background: white;
  width: 25px;
  border-radius: 5px;
  color: orange;
}
</style>
<script>
// import createStore from "@/assets/js/createStore";
import { deleteBieuTuongMXH, getBieuTuongProfile } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'

export default {
  components: { ChanTrang },

  data() {
    return {
      listLienKetCaNhan: [],
      showModal: false,
      showLoading: false,
      showModalXoa: false,
      idProfile: '',
      user_id: ''
    }
  },
  created() {
    this.idProfile = localStorage.getItem('idProfile')
    this.user_id = localStorage.getItem('user_id')
    const access_token = localStorage.getItem('access_token')
    if (this.idProfile || this.user_id || access_token) {
      this.performPostRequest(this.user_id)
    } else {
      this.$router.push('/dangnhap')
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 500)

    this.performPostRequest(this.user_id)
  },
  methods: {
    async performPostRequest(user_id) {
      try {
        const res = await getBieuTuongProfile(user_id)
        // this.showModal = true
        this.listLienKetCaNhan = res.data
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },
    showXoa() {
      this.showModalXoa = true
    },
    async xoaBieuTuong(idBieuTuong) {
      try {
        const res = await deleteBieuTuongMXH(idBieuTuong)
        //// console.log(res.data);
        this.statusCode = res.statusCode
        // this.showModal = true
        if (this.statusCode == 200) {
          this.showLoading = true
          setTimeout(() => {
            this.showLoading = false
            setTimeout(() => {
              this.showModal = true
              setTimeout(() => {
                this.showModal = false
                // window.location.reload();
                this.performPostRequest(this.user_id)
              }, 500)
            }, 200)
          }, 500)
        }
      } catch (error) {
        // console.log('loi')
      }
    },
    clickHome() {
      // const idProfile = localStorage.getItem('idProfile')
      // this.$router.push('/trangcanhan/' + idProfile)
      this.$router.push('/trangcanhan')
    },
    updateInfo(lienKet) {
      this.$store.dispatch('updateLienKetInfo', lienKet)
      this.$router.push('/bieutuong/suabieutuong')
    }
  }
}
</script>
