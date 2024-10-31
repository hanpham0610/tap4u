<template>
  <div class="container d-flex justify-content-center flex-column">
    <router-link
      :to="{ name: 'dangnhap' }"
      class="w-100 d-flex h-55px"
      style="position: fixed; top: 0"
    >
      <button class="btn" style="color: white; font-size: 15px">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      <div class="d-flex justify-content-center">
        <span class="m-auto" style="color: white; font-size: 17px"> Quay lại </span>
      </div>
    </router-link>
    <h2 class="text-center mb-4" style="color: white">Đăng ký</h2>

    <div class="p-3 bradius20" style="background-color: #f4f4f4">
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email" class="tieude-den">Email</label>
          <input
            type="email"
            v-model="email"
            class="form-control shadow-sm"
            id="email"
            placeholder="Nhập Email"
          />
          <div v-if="!isEmailValid" class="text-danger">Email không hợp lệ</div>
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
        <div class="form-group">
          <label for="secretCode" class="tieude-den">Mã bí mật</label>
          <input
            type="text"
            class="form-control shadow-sm"
            id="secretCode"
            placeholder="Nhập mã bí mật"
            v-model="urlProfile"
            disabled
          />
        </div>
        <!-- <div class="form-check">
          <input type="checkbox" class="form-check-input colorCam" id="terms" />
          <label class="form-check-label" for="terms">Tôi đồng ý với điều khoản sử dụng</label>
        </div> -->
        <button
          type="submit"
          class="mt-3 nBtnCam bradius20"
          style="width: 100%"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Tạo tài khoản
        </button>
      </form>
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
              <span> Đăng ký thành công !</span>
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
    <!-- <div class="modal" id="dangKyThatBai" v-if="showModal">
      <div class="modal-dialog">
        <div class="modal-content" v-if="statusCode == 200">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel" style="color: green">
              Thành Công !
            </h1>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary m-auto">
              <a style="color: white" href="/dangnhap">Đồng ý !</a>
            </button>
          </div>
        </div>
        <div class="modal-content" v-else>
          <div class="modal-header">
            <h1
              class="modal-title fs-5 m-auto"
              style="color: red"
              id="staticBackdropLabel"
            >
              Thất Bại !
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body m-auto">
            <input style="border: none" v-model="message" disabled />
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
  </div>
  <chan-trang> </chan-trang>
</template>

<script>
document.title = 'Đăng ký - quetnhanh.vn - danh thiếp online'

import { postRegister } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'

export default {
  components: { ChanTrang },
  data() {
    return {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
      urlProfile: '',
      statusCode: '',
      message: '',
      showModal: false,
      showLoading: false,
      keyDangKy: ''
    }
  },
  mounted() {
    this.keyDangKy = localStorage.getItem('keyDangKy')
    this.urlProfile = this.keyDangKy
    // this.fetchToken()
  },
  methods: {
    checkEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    checkPassword(password) {
      return password.length >= 6
    },
    checkSecretCode(secretCode) {
      const secretCodeRegex = /^[a-zA-Z0-9]{10}$/
      return secretCodeRegex.test(secretCode)
    },
    // fetchToken() {
    //   getToken()
    //     .then((urlProfile) => {
    //       if (urlProfile) {
    //         this.urlProfile = urlProfile
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Lỗi khi lấy token:', error)
    //     })
    // },
    loadModal() {
      this.showLoading = true
      setTimeout(() => {
        this.showLoading = false
        setTimeout(() => {
          this.showModal = true
          setTimeout(() => {
            this.showModal = false
          }, 2000)
        }, 100)
      }, 2000)
    },
    async register() {
      this.isEmailValid = this.checkEmail(this.email)
      this.isPasswordValid = this.checkPassword(this.password)
      if (this.isEmailValid && this.isPasswordValid) {
        try {
          const response = await postRegister(this.email, this.password, this.urlProfile)
          this.statusCode = response.statusCode
          this.message = response.message
          this.loadModal()
          // setTimeout(() => {
          //   this.showModal = false
          //   this.$router.push('/dangnhap')
          // }, 2000)
          if (this.statusCode == 200) {
            this.showLoading = true
            setTimeout(() => {
              this.showLoading = false
              setTimeout(() => {
                this.showModal = true
                setTimeout(() => {
                  this.showModal = false
                  localStorage.clear()
                  this.$router.push('/dangnhap')
                }, 1000)
              }, 100)
            }, 2000)
          }
          // console.log(response)
        } catch (error) {
          console.error('Lỗi khi đăng ký:', error)
        }
      }
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>
<style>
.box-dangky {
  width: 394px;
  height: 394px;
  background-color: #f4f4f4;
}
input[type='text'] {
  height: 44px;
  border: none;
  border-radius: 10px;
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
</style>
