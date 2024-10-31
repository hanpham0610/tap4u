<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-12">
        <div class="d-flex justify-content-center flex-column" style="position: relative">
          <div class="block1 m-auto" style="padding-top: 20px">
            <div style="position: absolute; right: 25px">
              <div class="dropdown" style="float: right">
                <button class="dropbtn"><i class="fa fa-bars" aria-hidden="true"></i></button>
                <div class="dropdown-content">
                  <a @click="copyURL()"><strong>Chia sẻ</strong></a>
                  <router-link :to="{ name: 'doimatkhau' }"
                    ><strong>Đổi mật khẩu</strong></router-link
                  >
                  <a @click="dangXuat()"><strong>Đăng xuất</strong></a>
                </div>
              </div>
            </div>
            <!-- <img class="img-profile rounded-circle" :src="avatar" alt="Page Image" /> -->
            <div class="avatar-upload">
              <div class="avatar-edit">
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  @change="handleImageChange"
                />
                <label for="imageUpload" class="avatar-label"></label>
              </div>
              <div class="avatar-preview" v-if="anhDaiDien">
                <img
                  class="profile-user-img img-responsive img-circle"
                  :src="`https://drive.google.com/thumbnail?id=${anhDaiDien}&sz=w500`"
                  alt="User profile picture"
                />
              </div>
              <div class="avatar-preview" v-else>
                <img
                  class="profile-user-img img-responsive img-circle"
                  :src="imageUrl"
                  alt="User profile picture"
                />
              </div>
            </div>
          </div>
          <div class="block2 m-auto d-flex flex-column" style="color: white"></div>
          <strong class="m-auto" style="color: white; font-size: 19px"> {{ HovaTen }}</strong>
          <div class="container mt-4">
            <div class="row">
              <div class="d-flex flex-column w-100">
                <button type="button" class="btn btn-oran mt-4 m-auto" @click="updateInfo()">
                  <strong style="color: white">
                    <i class="fa fa-pencil" aria-hidden="true"></i> Sửa thông tin</strong
                  >
                </button>
                <router-link
                  :to="{ name: 'danhthiep' }"
                  class="d-flex w-100 mt-4 bg-danhmuc shadow-sm"
                  style="color: white"
                >
                  <div class="d-flex flex-column w-100 m-auto pl-4 px-1">
                    <strong> Danh thiếp người thân</strong>
                    <span class="mt-2 fs-13"> Thêm danh thiếp người thân, cộng sự,... </span>
                  </div>
                  <div class="d-flex m-auto pr-4">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </router-link>

                <router-link
                  :to="{ name: 'bieutuong' }"
                  class="d-flex w-100 mt-4 bg-danhmuc shadow-sm"
                  style="color: white"
                >
                  <div class="d-flex flex-column w-100 m-auto pl-4 px-1">
                    <strong>Biểu tượng mạng xã hội</strong>
                    <span class="mt-2 fs-13">
                      Thêm các biểu tượng liên kết đến mạng xã hội của bạn</span
                    >
                  </div>
                  <div class="d-flex m-auto pr-4">
                    <span> <i class="fa fa-angle-right" aria-hidden="true"></i></span>
                  </div>
                </router-link>

                <router-link
                  :to="{ name: 'lienket' }"
                  class="d-flex w-100 mt-4 bg-danhmuc shadow-sm"
                  style="color: white"
                >
                  <div class="d-flex flex-column w-100 m-auto pl-4 px-1">
                    <strong>Chia sẻ liên kết</strong>
                    <span class="mt-2 fs-13">
                      Thêm các đường liên kết đến trang web, bài báo, sản phẩm,...</span
                    >
                  </div>
                  <div class="d-flex m-auto pr-4">
                    <span> <i class="fa fa-angle-right" aria-hidden="true"></i></span>
                  </div>
                </router-link>
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
      <div class="d-flex justify-content-center flex-column">
        <div class="modal-header f-flex flex-column m-auto p-4" style="color: green">
          <div class="avatar-preview">
            <img
              v-if="imageUrl"
              class="profile-user-img img-responsive img-circle"
              :src="imageUrl"
              alt="User profile picture"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="closeModal"
            class="btn btn-primary m-auto"
            style="background-color: red; border: none; width: 90px"
          >
            Hủy
          </button>
          <button
            type="button"
            @click="uploadAvatar"
            class="btn btn-primary m-auto"
            style="background-color: #f37d34; border: none; width: 90px"
          >
            xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="snackbar" v-if="showModalCopy">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center">
        <div class="modal-content-thongbao">
          <div class="modal-header f-flex flex-column m-auto p-4" style="color: green">
            <h5 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img style="width: 25px" src="/img/icon/tickXanh.png" />
            </h5>
            <span class="mt-2"> {{ message }}</span>
          </div>
          <!-- <div class="modal-footer">
          <button type="button" @click="closeModal" class="btn btn-primary m-auto">Đồng ý !</button>
        </div> -->
        </div>
      </div>
    </div>
  </div>
  <chan-trang> </chan-trang>
</template>
<style>
.bg-danhmuc {
  color: white;
  background: #c4450070;
  border-radius: 10px;
  height: 75px;
}
.img-profile {
  width: 150px;
  height: 150px;
  border: 3px #fff solid;
}
hr {
  border: none;
  height: 2px;
  background-color: #f37d34;
}
.border-frame {
  border-radius: 10px;
  /* border: 2px #1c9cac solid; */
}
.btn-oran {
  border-radius: 1rem;
  color: white !important;
  background: #f37d3200;
  border: 1px #ffffffad solid;
  width: 90%;
}
.icon-s-large {
  color: white;
  font-size: xx-large;
}
.fs-13 {
  font-size: 13px;
}
hr {
  border: none;
  height: 1px;
  /* background-color: #ffffff; */
  background-color: #fd7e141f;
}
.dropbtn {
  background: white;
  color: #f37d34;
  border-radius: 10px;
  padding: 12px;
  width: 50px;
  height: 50px;
}
</style>
<script>
import { domain } from '@/assets/js/common'
// import createStore from '@/assets/js/createStore'
import { deleteBieuTuongMXH, postChangeAvatar, postSearchProfile } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'

export default {
  components: { ChanTrang },
  data() {
    return {
      imageUrl: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
      avatar: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
      imgIconFb: '/img/icon/fb.png',
      imgIconIg: '/img/icon/ig.png',
      imgIconGit: '/img/icon/git.png',
      imgIconIn: '/img/icon/in.png',
      imgIconPhone: '/img/icon/phone.png',
      imgIconQR: '/img/icon/qr-code.png',
      imgIconDow: '/img/icon/download.png',
      imgIconTick: '/img/icon/tick.png',
      imgIconShare: '/img/icon/share.png',
      listLienKetCaNhan: [],
      file: '',
      HovaTen: '',
      anhDaiDien: '',
      imageFile: null,
      Profile: '',
      showModal: false,
      message: '',
      showLoading: false,
      showModalCopy: false,
      idProfile: ''
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 500)
  },
  created() {
    // if (this.$route.params && this.$route.params.id) {
    //   const idProfile = this.$route.params.id
    //   localStorage.setItem('idProfile', idProfile)
    //   this.performPostRequest(idProfile)
    // } else {
    //   console.error('Missing ID in router params')
    // }
    this.idProfile = localStorage.getItem('idProfile')
    const user_id = localStorage.getItem('user_id')
    const access_token = localStorage.getItem('access_token')
    if (this.idProfile || user_id || access_token) {
      this.performPostRequest(this.idProfile)
    } else {
      this.$router.push('/dangnhap')
    }
  },

  methods: {
    async performPostRequest(idProfile) {
      try {
        const res = await postSearchProfile(idProfile)
        //// console.log(res.data)
        // this.showModal = true
        this.Profile = res.data.data
        if (
          res.data.data.first_name == null ||
          (res.data.data.first_name == '' && res.data.data.last_name == null) ||
          res.data.data.last_name == ''
        ) {
          this.HovaTen = 'Tên hiển thị'
        } else {
          this.HovaTen = res.data.data.first_name + ' ' + res.data.data.last_name
        }

        this.anhDaiDien = res.data.data.anhdaidien
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
        this.dangXuat()
      }
    },
    async xoaBieuTuong(idBieuTuong) {
      try {
        await deleteBieuTuongMXH(idBieuTuong)
        // window.location.reload()
        this.performPostRequest(this.idProfile)
        //
      } catch (error) {
        // console.log('loi')
      }
    },

    handleImageChange(event) {
      this.showModal = true
      this.imageFile = event.target.files[0]
      if (!this.imageFile) {
        console.error('Không có file nào được chọn.')
        return
      }

      const reader = new FileReader()
      reader.onload = (evt) => {
        this.imageUrl = evt.target.result
      }
      reader.readAsDataURL(this.imageFile)
    },
    uploadAvatar() {
      this.showLoading = true
      this.showModal = false
      const user_id = localStorage.getItem('user_id')
      const formData = new FormData()
      formData.append('user_id', user_id)
      formData.append('file', this.imageFile)
      postChangeAvatar(formData)
        .then((res) => {
          this.anhDaiDien = res.data.data
          // window.location.reload()
          this.showLoading = false
        })
        .catch((error) => {
          console.error('Lỗi khi thay đổi ảnh:', error)
        })
    },
    dangXuat() {
      this.showLoading = true
      setTimeout(() => {
        this.showLoading = false
        localStorage.clear()
        this.$router.push('/dangnhap')
      }, 1000)
    },
    updateInfo() {
      const profile = this.Profile
      this.$store.dispatch('updateInfo', profile)
      this.$router.push('/catdat/capnhathoso')
    },
    closeModal() {
      this.showModal = false
    },
    copyURL() {
      const urlToCopy = domain + '/' + this.idProfile
      navigator.clipboard
        .writeText(urlToCopy)
        .then(() => {
          this.message = 'Đã sao chép ' + urlToCopy + ' vào bộ nhớ đệm !'
          this.showModalCopy = true
          setTimeout(() => {
            this.showModalCopy = false
            this.$router.push('/trangcanhan/chiase')
          }, 1000)
        })
        .catch(() => {
          this.message = 'Sao chép thất bại'
          //// console.log('this.message  ' + this.message)

          setTimeout(() => {
            this.message = 'Sao chép thất bại'
          }, 1000)
        })
    }
  }
}
</script>
