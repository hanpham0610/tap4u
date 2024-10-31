<template>
  <div class="container d-flex justify-content-center flex-column">
    <h2 class="text-center mb-4" style="color: white">Đăng nhập</h2>
    <div class="p-3 bradius20" style="background-color: #f4f4f4">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email" class="tieude-den">Email</label>
          <input
            type="email"
            class="form-control shadow-sm"
            id="email"
            v-model="email"
            placeholder="Nhập Email"
          />
          <div v-if="!isEmailValid" class="text-danger">Email không hợp lệ !</div>
        </div>
        <div class="form-group">
          <label for="password" class="tieude-den">Mật khẩu</label>
          <input
            type="password"
            class="form-control shadow-sm"
            id="password"
            v-model="password"
            placeholder="Nhập mật khẩu"
          />
          <div v-if="!isPasswordValid" class="text-danger">Mật khẩu phải có ít nhất 6 ký tự</div>
        </div>
        <div class="d-flex">
          <div class="mr-auto tieude-cam">
            <router-link class="tieude-cam" :to="{ name: 'quenmatkhau' }"
              >Quên mật khẩu ?
            </router-link>
          </div>
          <div class="tieude-cam">
            <router-link class="tieude-cam" :to="{ name: 'dangky' }">Đăng ký mới </router-link>
          </div>
        </div>
        <button type="submit" class="mt-3 nBtnCam bradius20" style="width: 100%">Đăng Nhập</button>
      </form>
    </div>
    <div class="modal" v-if="loadingStatus">
      <div class="box-loadding box m-auto"></div>
    </div>
    <div id="snackbar" v-if="showModal">
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-center">
          <div class="modal-content-thongbao" v-if="statusCode == 200 || statusCode == 0">
            <div class="f-flex flex-column m-auto p-4" style="color: green">
              <h5 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
                <img v-if="statusCode == 200" style="width: 25px" src="/img/icon/tickXanh.png" />
                <img v-if="statusCode == 0" style="width: 50px" src="/img/icon/icon-xoa.png" />
              </h5>
              <span v-if="statusCode == 200"> Đăng nhập thành công !</span>
              <span v-if="statusCode == 0" style="color: red">Sai tài khoản hoặc mật khẩu !</span>
            </div>
            <!-- <div class="modal-footer">
          <button type="button" @click="closeModal" class="btn btn-primary m-auto">Đồng ý !</button>
        </div> -->
          </div>
          <div class="modal-content-thongbao" v-else>
            <div class="f-flex flex-column m-auto p-4" style="color: red">
              <h1 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
                <img style="width: 50px" src="/img/icon/icon-xoa.png" />
              </h1>
              <span> Hệ thống đang bảo trì vui lòng thử lại sau !</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <chan-trang></chan-trang>
</template>

<style>
input[type='password'] {
  height: 44px;
  border: none;
  border-radius: 10px;
}
input[type='email'] {
  height: 44px;
  border: none;
  border-radius: 10px;
}
</style>
<script>
import { postLogin } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'

export default {
  components: { ChanTrang },
  data() {
    return {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
      statusCode: '',
      showModal: false,
      loadingStatus: false
    }
  },
  computed() {
    document.title = 'Đăng nhập - quetnhanh.vn'
  },

  methods: {
    showLoading() {
      this.loadingStatus = true
      setTimeout(() => {
        this.hideLoading()
      }, 500)
    },
    hideLoading() {
      this.loadingStatus = false
    },
    showModalAct(time = 2000) {
      this.showModal = true
      setTimeout(() => {
        this.showModal = false
      }, time)
    },
    loadModal() {
      localStorage.clear()
      this.loadingStatus = true
      setTimeout(() => {
        this.loadingStatus = false
        setTimeout(() => {
          this.showModal = true
          setTimeout(() => {
            this.showModal = false
          }, 500)
        }, 300)
      }, 200)
    },
    checkEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    checkPassword(password) {
      return password.length >= 6
    },

    async login() {
      localStorage.clear()

      this.isEmailValid = this.checkEmail(this.email)
      this.isPasswordValid = this.checkPassword(this.password)
      if (this.isEmailValid && this.isPasswordValid) {
        try {
          this.showLoading()
          const response = await postLogin(this.email, this.password)
          this.statusCode = response.statusCode
          //// console.log('aa', response.statusCode)
          this.hideLoading()
          if (this.statusCode == 200) {
            this.showModalAct(500)
            setTimeout(() => {
              localStorage.setItem('idProfile', response.data.url_profile)
              this.$router.push('/trangcanhan')
            }, 500)
            // this.loadingStatus = true
            // setTimeout(() => {
            //   this.loadingStatus = false
            //   setTimeout(() => {
            //     this.showModal = true
            //     setTimeout(() => {
            //       this.showModal = false
            //       localStorage.setItem('idProfile', response.data.url_profile)
            //       this.$router.push('/trangcanhan')
            //       // this.$router.push('/trangcanhan/' + response.data.url_profile)
            //     }, 500)
            //   }, 300)
            // }, 200)
          } else {
            this.showModalAct(1500)
          }
        } catch (error) {
          console.error('Lỗi khi đăng nhập:', error)
          this.hideLoading()
        }
      }
    }
  }
}
</script>
