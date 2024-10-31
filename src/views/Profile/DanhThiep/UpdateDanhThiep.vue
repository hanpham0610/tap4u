<template>
  <div class="container">
    <router-link :to="{ name: 'danhthiep' }" class="w-100 d-flex h-55px">
      <button class="btn" style="color: white; font-size: 15px">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      <div class="d-flex justify-content-center">
        <span class="m-auto" style="color: white; font-size: 17px"> Quay lại </span>
      </div>
    </router-link>
    <div class="p-3 bradius20 mt-5" style="background-color: #f4f4f4">
      <h2 class="text-center mb-4" style="font-size: 20px; font-weight: bold">Sửa danh thiếp</h2>

      <form @submit.prevent="updateProfile">
        <div class="form-group">
          <label for="card" class="tieude-den">Tên danh thiếp (Biệt danh)</label>
          <input
            type="card"
            class="form-control shadow-sm"
            v-model="business_card_name"
            placeholder="Nhập tên thẻ (Biệt danh)"
          />
        </div>
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
            <div v-if="!isValidFName" class="text-danger">Vui lòng kiểm tra lại thông tin !</div>
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
            <div v-if="!isValidLName" class="text-danger">Vui lòng kiểm tra lại thông tin !</div>
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
          <label for="email" class="tieude-den">Email (Không bắt buộc )</label>
          <input
            type="text"
            class="form-control shadow-sm"
            id="email"
            v-model="email"
            placeholder="Nhập Email"
          />
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
            <span> Sửa danh thiếp thành công !</span>
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
import { putUpdateDanhThiep } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'
export default {
  components: { ChanTrang },
  data() {
    return {
      idDanhThiep: '',
      business_card_name: '',
      first_name: '',
      last_name: '',
      phone: '',
      email: '',

      isValidFName: true,
      isValidLName: true,
      isValidPhone: true,
      showModal: false,
      showLoading: false
    }
  },
  computed: {
    danhThiepState() {
      return this.$store.state.listDanhThiep
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 500)

    const idProfile = localStorage.getItem('idProfile')
    const user_id = localStorage.getItem('user_id')
    const access_token = localStorage.getItem('access_token')
    if (idProfile || user_id || access_token) {
      this.idDanhThiep = this.$store.state.listDanhThiep.id
      this.business_card_name = this.danhThiepState.business_card_name
      this.first_name = this.danhThiepState.first_name
      this.last_name = this.danhThiepState.last_name
      this.phone = this.danhThiepState.phone
      this.email = this.danhThiepState.email
    } else {
      this.$router.push('/dangnhap')
    }
  },
  methods: {
    checkFname(firstname) {
      // const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/;
      // return specialCharactersRegex.test(firstname)
      return firstname.length <= 50
    },
    checkLname(lastname) {
      // const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/;
      // return specialCharactersRegex.test(lastname)
      return lastname.length <= 50
    },
    checkPhone(phone) {
      const phoneRegex = /^\d{6,11}$/
      return phoneRegex.test(phone)
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
    async updateProfile() {
      this.isValidFName = this.checkFname(this.first_name)
      this.isValidLName = this.checkLname(this.last_name)
      this.isValidPhone = this.checkPhone(this.phone)
      const user_id = parseInt(localStorage.getItem('user_id'), 10)
      // console.log('User ID: ', user_id)
      if (this.isValidFName && this.isValidLName && this.isValidPhone) {
        try {
          this.showLoading = true
          const res = await putUpdateDanhThiep(
            this.idDanhThiep,
            user_id,
            this.business_card_name,
            this.first_name,
            this.last_name,
            this.phone,
            this.email
          )
          this.statusCode = res.statusCode

          this.loadModal()
          if (this.statusCode == 200) {
            setTimeout(() => {
              this.showLoading = false
              setTimeout(() => {
                this.showModal = true
                setTimeout(() => {
                  this.showModal = false
                  this.$router.push('/danhthiep')
                }, 500)
              }, 200)
            }, 500)
          }
        } catch (error) {
          this.showLoading = false
          // console.log(error)
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
