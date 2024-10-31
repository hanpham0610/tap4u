<template>
  <div class="container">
    <router-link :to="{ name: 'profile' }" class="w-100 d-flex h-55px">
      <button class="btn" style="color: white; font-size: 15px">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      <div class="d-flex justify-content-center">
        <span class="m-auto" style="color: white; font-size: 17px"> Quay lại </span>
      </div>
    </router-link>
    <div class="p-3 bradius20 mt-5 shadow" style="background-color: #f4f4f4">
      <h2 class="text-center mb-4" style="font-size: 20px; font-weight: bold">Thông tin hồ sơ</h2>

      <form @submit.prevent="updateProfile">
        <div class="d-flex flex-row justify-content-between">
          <div class="form-group col p-0">
            <label for="hoDem" class="tieude-den">Họ đệm</label>
            <input
              type="text"
              class="form-control shadow-sm"
              id="first_name"
              v-model="first_name"
              placeholder="Nhập họ đệm"
            />
            <div v-if="!isValidFName" class="text-danger">
              Họ đệm không được có ký tự đặc biệt và không quá 50 ký tự !
            </div>
          </div>
          <div style="width: 25px"></div>
          <div class="form-group col p-0">
            <label for="ten" class="tieude-den">Tên</label>
            <input
              type="text"
              class="form-control shadow-sm"
              id="last_name"
              v-model="last_name"
              placeholder="Nhập tên"
            />
            <div v-if="!isValidLName" class="text-danger">
              Tên không được có ký tự đặc biệt và không quá 50 ký tự !
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="phone" class="tieude-den">Điện thoại</label>
          <input
            type="text"
            class="form-control shadow-sm"
            id="phone"
            v-model="phone"
            placeholder="Nhập điện thoại"
          />
          <div v-if="!isValidPhone" class="text-danger">Vui lòng kiểm tra lại thông tin !</div>
        </div>

        <!-- <div class="form-group">
          <label for="email" class="tieude-den">Email</label>
          <input
            type="email"
            class="form-control shadow-sm"
            id="password"
            placeholder="Nhập email"
          />
        </div> -->
        <div class="form-group">
          <label for="diaChi" class="tieude-den">Địa chỉ</label>
          <input
            type="text"
            class="form-control shadow-sm"
            id="address"
            v-model="address"
            placeholder="Nhập địa chỉ"
          />
          <div v-if="!isValidAddress" class="text-danger">Vui lòng kiểm tra lại thông tin !</div>
        </div>

        <div class="form-group">
          <label for="diaChi" class="tieude-den">Tổ chức</label>
          <input
            type="text"
            class="form-control shadow-sm"
            id="company"
            v-model="company"
            placeholder="Nhập tên tổ chức"
          />
        </div>

        <div class="form-group">
          <label for="diaChi" class="tieude-den">Vị trí/Chức danh</label>
          <input
            type="text"
            class="form-control shadow-sm"
            id="position"
            v-model="position"
            placeholder="Nhập vị trí làm việc"
          />
        </div>
        <div class="form-group">
          <label for="loiGioiThieu" class="tieude-den">Lời giới thiệu</label>
          <textarea
            type="text"
            class="form-control shadow-sm"
            id="describe"
            v-model="describe"
            style="border-radius: 10px"
            placeholder="Nhập lời giới thiệu"
            rows="4"
          />
          <div v-if="!isValidDes" class="text-danger">Vui lòng kiểm tra lại thông tin !</div>
        </div>

        <div class="form-group">
          <label for="loiGioiThieu" class="tieude-den"
            >Đường dẫn: {{ domain }}/{{ url_profile }}</label
          >
          <input
            type="text"
            class="form-control shadow-sm"
            id="url_profile"
            v-model="url_profile"
            placeholder="Nhập đường dẫn"
            size="100"
            @input="changeUrlProfile"
          />
          <div v-if="!isValidUrlProfile" class="text-warning p-1">
            Chú ý: đường dẫn có độ dài > 6 và chỉ ký tự thường
          </div>
        </div>

        <button type="submit" class="mt-3 nBtnCam bradius20" style="width: 100%">Xác nhận</button>
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
            <span> Sửa thông tin thành công !</span>
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
<script>
import { postUpdateProfie } from '@/assets/js/userSevice'
// import createStore from '@/assets/js/createStore'
import { domain } from '@/assets/js/common'
import ChanTrang from '@/components/ChanTrang.vue'
export default {
  components: { ChanTrang },
  data() {
    return {
      domain: domain,
      first_name: '',
      last_name: '',
      phone: '',
      address: '',
      describe: '',
      url_profile: null,
      idProfile: '',
      company: '',
      position: '',
      isValidFName: true,
      isValidLName: true,
      isValidPhone: true,
      isValidAddress: true,
      isValidUrlProfile: false,
      isValidDes: true,
      showModal: false,
      showLoading: false,
      info: null
    }
  },
  computed: {
    profile() {
      return this.$store.state.infoProfile
    }
  },

  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 500)
    this.idProfile = localStorage.getItem('idProfile')
    //// console.log(111)

    const user_id = localStorage.getItem('user_id')
    const access_token = localStorage.getItem('access_token')
    if (this.idProfile || user_id || access_token) {
      this.first_name = this.profile.first_name
      this.last_name = this.profile.last_name
      this.phone = this.profile.phone
      this.address = this.profile.address
      this.describe = this.profile.describe
      this.url_profile = this.profile.url_profile
      this.company = this.profile.company
      this.position = this.profile.position
    } else {
      this.$router.push('/dangnhap')
    }
  },
  methods: {
    changeUrlProfile() {
      this.url_profile = this.url_profile
        .replace(/[^\w\s]/g, '')
        .toLowerCase()
        .replace(' ', '')
        .substring(0, 100)

      //// console.log(this.url_profile)
    },
    checkFname(firstname) {
      // cho phép bỏ trống
      if (firstname != null && firstname.length > 0) {
        const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/
        return !specialCharactersRegex.test(firstname) && firstname.length <= 50
      } else {
        return true
      }
    },
    checkLname(lastname) {
      // cho phép bỏ trống
      if (lastname != null && lastname.length > 0) {
        const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/
        return !specialCharactersRegex.test(lastname) && lastname.length <= 50
      } else {
        return true
      }
    },
    checkPhone(phone) {
      // cho phép bỏ trống
      if (phone != null && phone.length > 0) {
        const phoneRegex = /^\d{6,11}$/
        return phoneRegex.test(phone)
      } else {
        return true
      }
    },
    checkAddress(adr) {
      return adr.length >= 225
    },
    checkDes(des) {
      return des.length >= 500
    },
    checkUrl(url) {
      return url.length > 6 && url.length <= 100
    },

    loadModal() {
      this.showLoading = true
      setTimeout(() => {
        this.showLoading = false
        setTimeout(() => {
          this.showModal = true
          setTimeout(() => {
            this.showModal = false
          }, 1000)
        }, 100)
      }, 1000)
    },
    clickHome() {
      // const idProfile = localStorage.getItem('idProfile')
      // this.$router.push('/trangcanhan/' + idProfile)
      this.$router.push('/trangcanhan')
    },
    async updateProfile() {
      this.isValidFName = this.checkFname(this.first_name)
      this.isValidLName = this.checkLname(this.last_name)
      this.isValidPhone = this.checkPhone(this.phone)
      this.isValidUrlProfile = this.checkUrl(this.url_profile)

      this.url_profile = this.url_profile
        .replace(/[^\w\s]/g, '')
        .toLowerCase()
        .replace(' ', '')
        .substring(0, 100)
      const user_id = parseInt(localStorage.getItem('user_id'), 10)

      if (this.isValidFName && this.isValidLName && this.isValidPhone && this.isValidUrlProfile) {
        //// console.log(this.describe)
        try {
          // this.loadModal()
          this.showLoading = true
          const res = await postUpdateProfie(
            user_id,
            this.first_name,
            this.last_name,
            this.phone,
            this.describe,
            this.address,
            this.url_profile,
            this.company,
            this.position
          )
          this.statusCode = res.statusCode
          //// console.log(res)
          // this.loadModal()
          if (this.statusCode == 200) {
            localStorage.setItem('idProfile', this.url_profile)
            setTimeout(() => {
              this.showLoading = false
              setTimeout(() => {
                this.showModal = true
                setTimeout(() => {
                  this.showModal = false
                  this.$router.push('/trangcanhan')
                }, 500)
              }, 200)
            }, 500)
          } else {
            this.showLoading = false
          }
        } catch (error) {
          // console.log(error);
        }
      }
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
</style>
