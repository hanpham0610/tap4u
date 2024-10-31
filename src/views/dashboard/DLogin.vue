<template>
  <div
    class="container d-flex justify-content-center flex-column"
    style="padding: 25px; height: 100%"
  >
    <h2 class="text-center mb-4" style="color: orange">Đăng nhập hệ thống</h2>
    <div class="p-3 bradius20">
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

        <button type="submit" class="mt-3 nBtnCam bradius20" style="width: 100%">Đăng Nhập</button>
      </form>
    </div>
    <div class="modal" v-if="showLoading">
      <div class="box-loadding box m-auto"></div>
    </div>
    <div id="snackbar" v-if="showModal">
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-center">
          <div class="modal-content-thongbao" v-if="statusCode == 200 || statusCode == 0">
            <div class="modal-header f-flex flex-column m-auto p-4" style="color: green">
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
  </div>
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
import router from '@/router'

export default {
  data() {
    return {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
      statusCode: '',
      showModal: false,
      showLoading: false,
      user: null
    }
  },
  mounted() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      const adUser = JSON.parse(localStorage.getItem('aduser'))
      //// console.log(adUser)
      if (adUser) {
        router.push({ name: 'd-index' })
      } else {
        localStorage.clear()
      }
    },
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
    checkEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    checkPassword(password) {
      return password.length >= 6
    },

    async login() {
      this.isEmailValid = this.checkEmail(this.email)
      this.isPasswordValid = this.checkPassword(this.password)
      if (this.isEmailValid && this.isPasswordValid) {
        try {
          const response = await postLogin(this.email, this.password)
          // console.log(response)
          if (response.statusCode != 200) {
            console.error('Lỗi khi đăng nhập')
            return
          }

          this.user = JSON.stringify(response.data)
          localStorage.setItem('aduser', this.user)
          // if (response.data.email == "nguyennam.kkb@gmail.com") {
          //  // console.log("admin")
          //   router.go({ name: "d-index" });
          // }
          const email = response.data.email
          if (email.indexOf('nam') != 0 || email.indexOf('vien') != 0) {
            // console.log('admin')
            router.go({ name: 'd-index' })
          }
        } catch (error) {
          console.error('Lỗi khi đăng nhập:', error)
        }
      }
    }
  }
}
</script>
