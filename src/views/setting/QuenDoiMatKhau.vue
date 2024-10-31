<template>
  <div class="container" style="padding: 25px; height: 700px">
    <h2 class="text-center" style="color: white"></h2>
    <div class="w-100 p-2 d-flex">
      <router-link class="btn" :to="{ name: textUrl }" style="color: white">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </router-link>
      <div class="d-flex m-auto">
        <strong style="color: white; font-size: 24px"> {{ TextTitle }} </strong>
      </div>
    </div>

    <br />
    <div class="p-3 bradius20" style="background-color: #f4f4f4">
      <form>
        <div class="form-group">
          <label for="email" class="tieude-den">Email</label>
          <div class="d-flex flex-row justify-content-between">
            <div class="col p-0">
              <input
                type="email"
                class="form-control shadow-sm"
                id="email"
                v-model="email"
                placeholder="Nhập email"
              />
              <div v-if="!isEmailValid" class="text-danger">Email không hợp lệ !</div>
            </div>
            <div style="width: 25px"></div>
            <div class="p-0">
              <button class="nBtnIcon shadow-sm" type="button" @click="layMaOTP">
                <i
                  class="fa fa-paper-plane"
                  style="font-size: large; cursor: pointer; color: white"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="otp" class="tieude-den">OTP</label>
          <input
            type="text"
            class="form-control shadow-sm"
            id="otp"
            placeholder="Nhập 6 số OTP gửi đến email"
            v-model="otp"
          />
        </div>

        <div class="form-group">
          <label for="password" class="tieude-den">Mật khẩu mới</label>
          <input
            type="email"
            class="form-control shadow-sm"
            id="password"
            v-model="password"
            placeholder="Nhập mật khẩu mới"
          />
          <div v-if="!isPasswordValid" class="text-danger">Mật khẩu phải có ít nhất 6 ký tự</div>
        </div>

        <button
          type="button"
          class="mt-3 nBtnCam bradius20"
          @click="layLaiMatKhau"
          style="width: 100%"
        >
          Xác nhận
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
        <div class="modal-content-thongbao" v-if="statusCode == 199 || statusCode == 200">
          <div class="modal-header f-flex flex-column m-auto p-4" style="color: green">
            <h5 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img style="width: 25px" src="/img/icon/tickXanh.png" />
            </h5>
            <span class="mt-3" v-if="statusCode == 199"> Đã gửi OTP về mail bạn đăng ký !</span>
            <span class="mt-3" v-if="statusCode == 200"> Lấy lại mật khẩu thành công !</span>
          </div>
          <!-- <div class="modal-footer">
          <button type="button" @click="closeModal" class="btn btn-primary m-auto">Đồng ý !</button>
        </div> -->
        </div>
        <div class="modal-content-thongbao" v-else>
          <div class="modal-header f-flex flex-column m-auto p-4" style="color: red">
            <h1 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img style="width: 50px" :src="imgIconErro" />
            </h1>
            <span> Hệ thống đang bảo trì vui lòng thử lại sau !</span>
          </div>

          <!-- <div class="modal-footer">
          <button
            @click="closeModal"
            type="button"
            class="btn btn-primary m-auto"
            data-bs-dismiss="modal"
          >
            Thử lại !
          </button>
        </div> -->
        </div>
      </div>
    </div>
  </div>
  '
  <!-- <div class="modal-thongbao" id="dangKyThatBai" v-if="showModal">
    <div class="modal-dialog d-flex justify-content-center">
      <div class="modal-content-thongbao" v-if="statusCode == 199 || statusCode == 200">
        <div class="modal-header f-flex flex-column m-auto" style="color: green">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Thành Công !</h1>
          <span v-if="statusCode == 199"> Đã gửi OTP về mail bạn đăng ký !</span>
          <span v-if="statusCode == 200"> Lấy lại mật khẩu thành công !</span>
        </div>
        <div class="modal-footer">
          <button type="button" @click="closeModal" class="btn btn-primary m-auto">Đồng ý !</button>
        </div>
      </div>
      <div class="modal-content-thongbao" v-else>
        <div class="modal-header f-flex flex-column m-auto" style="color: red">
          <h1 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
            <img style="width: 50px" :src="imgIconErro" />
          </h1>
          <span> Hệ thống đang bảo trì vui lòng thử lại sau !</span>
        </div>

        <div class="modal-footer">
          <button
            @click="closeModal"
            type="button"
            class="btn btn-primary m-auto"
            data-bs-dismiss="modal"
          >
            Thử lại !
          </button>
        </div>
      </div>
    </div>
  </div> -->
  <chan-trang></chan-trang>
</template>
<script>
document.title = 'Mật khẩu - quetnhanh.vn - danh thiếp online'

import { getOTP, postQuenMatKhau } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'
export default {
  components: { ChanTrang },
  data() {
    return {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
      otp: '',
      statusCode: '',
      imgIconErro: 'img/icon/icon-xoa.png',
      showModal: false,
      title: '',
      url: '',
      showLoading: false
    }
  },
  computed: {
    TextTitle() {
      if (this.isDoiMatKhau) {
        return 'Đổi Mật Khẩu'
      } else if (this.isQuenMatKhau) {
        return 'Quên Mật Khẩu'
      } else {
        return ''
      }
    },
    textUrl() {
      if (this.isDoiMatKhau) {
        return 'profile'
      } else if (this.isQuenMatKhau) {
        return 'dangnhap'
      } else {
        return 'dangnhap'
      }
    },

    isDoiMatKhau() {
      // Kiểm tra URL có chứa doimatkhau không
      return window.location.href.includes('doimatkhau')
    },
    isQuenMatKhau() {
      // Kiểm tra URL có chứa quenmatkhau không
      return window.location.href.includes('quenmatkhau')
    }
  },

  methods: {
    checkEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    checkPassword(password) {
      return password.length >= 6
    },
    async loadModal() {
      this.showLoading = true
      setTimeout(() => {
        this.showLoading = false
        setTimeout(() => {
          this.showModal = true
          setTimeout(() => {
            this.showModal = false
          }, 500)
        }, 400)
      }, 500)
    },
    async layMaOTP() {
      this.isEmailValid = this.checkEmail(this.email)
      if (this.isEmailValid) {
        try {
          const res = await getOTP(this.email)
          this.statusCode = res.statusCode
          this.loadModal()
        } catch (error) {
          // console.log('Chưa lấy được OTP ')
        }
      }
    },
    async layLaiMatKhau() {
      this.isEmailValid = this.checkEmail(this.email)
      this.isPasswordValid = this.checkPassword(this.password)
      if (this.isEmailValid && this.isPasswordValid) {
        try {
          const res = await postQuenMatKhau(this.email, this.otp, this.password)
          //// console.log(' res.statusCode ' + res.statusCode)

          this.statusCode = res.statusCode

          this.showLoading = true
          setTimeout(() => {
            this.showLoading = false
            setTimeout(() => {
              this.showModal = true
              setTimeout(() => {
                this.showModal = false
                if (res.statusCode == 200) {
                  this.$router.push('/dangnhap')
                }
              }, 500)
            }, 200)
          }, 500)
          //// console.log('Ádasd')
        } catch (error) {
          // console.log('Lỗi hệ thống vui lòng thử lại')
        }
      }
    },
    clickHome() {
      // const idProfile = localStorage.getItem('idProfile')
      // this.$router.push('/trangcanhan/' + idProfile)
      this.$router.push('/trangcanhan')
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>
<style>
input[type='text'] {
  height: 44px;
  border: none;
  border-radius: 10px;
}

input[type='textarea'] {
  height: 100px;
}

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
.modal-thongbao {
  /* display: none; */
  position: fixed;
  z-index: 1;
  padding-top: 600px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
