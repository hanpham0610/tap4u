<template>
  <div class="container" style="height: 550px">
    <router-link :to="{ name: 'lienket' }" class="w-100 d-flex h-55px">
      <button class="btn" style="color: white; font-size: 15px">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      <div class="d-flex justify-content-center">
        <span class="m-auto" style="color: white; font-size: 17px"> Quay lại </span>
      </div>
    </router-link>
    <br />
    <div class="p-3 bradius20 mt-5" style="background-color: #f4f4f4">
      <h2 class="text-center mb-4" style="font-size: 20px; font-weight: bold">Sửa liên kết</h2>
      <form @submit.prevent="updateLinkUrl">
        <div class="form-group">
          <label class="tieude-den">Tên hiển thị (bài báo, trang web, sản phẩm...) </label>
          <input class="form-control shadow-sm" v-model="name" placeholder="Tên hiển thị" />
        </div>
        <div class="form-group">
          <label class="tieude-den">Thêm liên kết </label>
          <input class="form-control shadow-sm" v-model="url" placeholder="Thêm liên kết" />
        </div>

        <button type="submit" class="mt-3 nBtnCam bradius20" style="width: 100%">
          Sửa liên kết
        </button>
      </form>
    </div>
  </div>
  <div class="modal" v-if="showLoading">
    <div class="box-loadding box m-auto"></div>
  </div>
  <div id="snackbar" v-if="showModal">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center">
        <div class="modal-content-thongbao" v-if="statusCode == 200">
          <div class="modal-header f-flex flex-column m-auto p-4" style="color: green">
            <h5 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img style="width: 25px" src="/img/icon/tickXanh.png" />
            </h5>
            <span> Sửa liên kết thành công !</span>
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
  <chan-trang class="mt-5"></chan-trang>
</template>

<script>
// import createStore from '@/assets/js/createStore'
import { postUpdateUrl } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'

export default {
  components: { ChanTrang },

  data() {
    return {
      idUrl: '',
      name: '',
      url: '',
      status: 1,
      listIcon: [],
      menuActive: false, // Thêm menuActive vào data
      selectedIcon: null, // Thêm selectedIcon vào data
      showModal: false,
      showLoading: false,
      idProfile: ''
    }
  },
  computed: {
    lienKetUrl() {
      return this.$store.state.lienKetUrl
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 500)
    this.idProfile = localStorage.getItem('idProfile')
    const user_id = localStorage.getItem('user_id')
    const access_token = localStorage.getItem('access_token')
    if (this.idProfile || user_id || access_token) {
      this.idUrl = this.$store.state.lienKetUrl.id
      this.name = this.lienKetUrl.name
      this.url = this.lienKetUrl.url
    } else {
      this.$router.push('/dangnhap')
    }
  },
  methods: {
    loadModal() {
      this.showLoading = true
      setTimeout(() => {
        this.showLoading = false
        setTimeout(() => {
          this.showModal = true
          setTimeout(() => {
            this.showModal = false
          }, 500)
        }, 200)
      }, 500)
    },
    async updateLinkUrl() {
      const user_id = parseInt(localStorage.getItem('user_id'), 10)
      if (this.url) {
        try {
          const res = await postUpdateUrl(this.idUrl, user_id, this.name, this.url, this.status)
          this.statusCode = res.statusCode

          this.loadModal()
          if (this.statusCode == 200) {
            this.showLoading = true
            setTimeout(() => {
              this.showLoading = false
              setTimeout(() => {
                this.showModal = true
                setTimeout(() => {
                  this.showModal = false
                  this.$router.push('/lienket')
                }, 500)
              }, 200)
            }, 500)
          }
        } catch (error) {
          // console.log(error);
        }
      }
    }
  }
}
</script>
