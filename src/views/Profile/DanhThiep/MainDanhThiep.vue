c
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
              <strong style="color: white; font-size: 24px"> Danh Thiếp Người Thân </strong>
            </div>
          </div>
          <div class="w-100 p-2 mt-2">
            <router-link style="color: white" :to="{ name: 'themdanhthiep' }">
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
              <div class="d-flex flex-column w-100 fs-13 m-auto">
                <strong class="ml-3"> {{ itemLienKet.business_card_name }}</strong>
                <span class="ml-3 mt-2" style="font-size: 13px"> {{ itemLienKet.phone }}</span>
              </div>
              <div class="d-flex m-auto ml-3">
                <div class="d-flex mr-3">
                  <span class="icon mr-2" @click="stateDanhThiep(itemLienKet)"
                    ><i class="fa fa-pencil p-2 font-icon" aria-hidden="true"></i
                  ></span>
                  <span class="icon" @click="xoaDanhThiep(itemLienKet.id)"
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
            <span> Đã xóa danh thiếp !</span>
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
  <chan-trang></chan-trang>
</template>
<style>
.item {
  color: white;
  background: #c4450070;
  height: 75px;
  border-radius: 10px;
}
.icon {
  background: white;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  color: #f37d34;
}
</style>
<script>
// import createStore from "@/assets/js/createStore";
import { getDanhThiepProfile, postDeleDanhThiep } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'

export default {
  components: { ChanTrang },
  data() {
    return {
      listLienKetCaNhan: [],
      showModal: false,
      showLoading: false,
      statusCode: '',
      idProfile: null,
      user_id: null
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 500)

    this.idProfile = localStorage.getItem('idProfile')
    this.user_id = localStorage.getItem('user_id')
    const access_token = localStorage.getItem('access_token')
    if (this.idProfile || this.user_id || access_token) {
      this.performPostRequest(this.user_id)
    } else {
      localStorage.clear()
      this.$router.push('/dangnhap')
    }
  },
  methods: {
    async performPostRequest(idProfile) {
      try {
        const res = await getDanhThiepProfile(idProfile)
        // console.log('ÁDAsd')
        if (res.statusCode == 200) {
          this.listLienKetCaNhan = res.data
        }
      } catch (error) {
        localStorage.clear()
        this.$router.push('/dangnhap')
        // console.log('Chưa lấy được thong tin')
      }
    },
    async xoaDanhThiep(idDanhThiep) {
      try {
        this.showLoading = true
        const res = await postDeleDanhThiep(idDanhThiep)
        this.statusCode = res.statusCode
        // this.showModal = true
        if (this.statusCode == 200) {
          setTimeout(() => {
            this.showLoading = false
            setTimeout(() => {
              this.showModal = true
              setTimeout(() => {
                this.showModal = false
                // window.location.reload()
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
    stateDanhThiep(idDanhThiep) {
      this.$store.dispatch('updateDanhThiepInfo', idDanhThiep)
      this.$router.push('/danhthiep/suadanhthiep')
    }
  }
}
</script>
