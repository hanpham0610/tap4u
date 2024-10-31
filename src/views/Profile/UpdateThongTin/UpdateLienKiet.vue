<template>
  <div class="container" style="height: 550px">
    <router-link :to="{ name: 'bieutuong' }" class="w-100 d-flex h-55px">
      <button class="btn" style="color: white; font-size: 15px">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      <div class="d-flex justify-content-center">
        <span class="m-auto" style="color: white; font-size: 17px"> Quay lại </span>
      </div>
    </router-link>
    <br />
    <div class="p-3 bradius20 mt-5" style="background-color: #f4f4f4">
      <h2 class="text-center mb-4" style="font-size: 20px; font-weight: bold">
        Sửa biểu tượng MXH
      </h2>
      <form @submit.prevent="updateURL">
        <div class="form-group">
          <div class="select-menu active">
            <div class="select-btn" @click="toggleMenu">
              <img
                :src="
                  selectedIcon
                    ? `https://drive.google.com/thumbnail?id=${selectedIcon.image_key}&sz=w100`
                    : `https://drive.google.com/thumbnail?id=${lienKetInfo.image_key}&sz=w100`
                "
                style="width: 25px"
              />

              <span class="sBtn-text">{{
                selectedIcon ? selectedIcon.name : `${lienKetInfo.name}`
              }}</span>
              <i class="bx bx-chevron-down"></i>
            </div>

            <ul class="options" v-show="menuActive">
              <li
                class="option"
                v-for="itemIcon in listIcon"
                :key="itemIcon.id"
                @click="selectIcon(itemIcon)"
              >
                <img
                  :src="`https://drive.google.com/thumbnail?id=${itemIcon.image_key}&sz=w50`"
                  style="width: 25px"
                  loading="lazy"
                />
                <span class="option-text ml-4" style="color: black">{{ itemIcon.name }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label class="tieude-den">Đường dẫn</label>
          <input class="form-control shadow-sm" v-model="url" placeholder="Thêm liên kết" />
        </div>

        <button type="submit" class="mt-3 nBtnCam bradius20" style="width: 100%">
          Sửa biểu tượng
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
            <span> Sửa biểu tượng thành công !</span>
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
import createStore from '@/assets/js/createStore'
import { getImgIcon, postUpdateBieuTuongMXH } from '@/assets/js/userSevice'
import ChanTrang from '@/components/ChanTrang.vue'

export default {
  components: { ChanTrang },
  data() {
    return {
      idBieuTuong: '',
      image_key: '',
      imgKey: '',
      idProfile: '',
      url: '',
      name: '',
      status: 1,
      listIcon: [],
      menuActive: false, // Thêm menuActive vào data
      selectedIcon: null, // Thêm selectedIcon vào data
      showModal: false,
      showLoading: false
    }
  },
  computed: {
    lienKetInfo() {
      // return this.$store.state.LienKetInfo;
      return this.$store.state.lienKetInfo
    }
  },
  created() {},
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 500)
    this.idProfile = localStorage.getItem('idProfile')
    const user_id = localStorage.getItem('user_id')
    const access_token = localStorage.getItem('access_token')
    if (this.idProfile || user_id || access_token) {
      this.getIcon()
      this.idBieuTuong = createStore.state.lienKetInfo.id
      this.url = this.lienKetInfo.url
      // =======
      //       this.getIcon();
      //       this.idBieuTuong = this.$store.state.lienKetInfo.id;
      //       this.url = this.lienKetInfo.url;
      //      // console.log(this.idBieuTuong);
      // >>>>>>> beb86544eba123b91f47fea651b00c70aa2cafcb
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
    async getIcon() {
      try {
        const res = await getImgIcon()
        //// console.log(res.data)
        this.listIcon = res.data
      } catch (error) {
        // console.log(error);
      }
    },

    toggleMenu() {
      this.menuActive = !this.menuActive
    },
    selectIcon(itemIcon) {
      this.selectedIcon = itemIcon
      this.imgKey = itemIcon.image_key
      this.name = itemIcon.name
      this.menuActive = false
    },
    async updateURL() {
      const user_id = parseInt(localStorage.getItem('user_id'), 10)

      if (this.url) {
        if (!this.imgKey || !this.url || !this.name) {
          this.imgKey = this.lienKetInfo.image_key
          this.url = this.lienKetInfo.url
          this.name = this.lienKetInfo.name
        }

        try {
          const res = await postUpdateBieuTuongMXH(
            this.idBieuTuong,
            user_id,
            this.imgKey,
            this.url,
            this.status,
            this.name
          )
          this.statusCode = res.statusCode

          // this.loadModal();
          if (this.statusCode == 200) {
            this.showLoading = true
            setTimeout(() => {
              this.showLoading = false
              setTimeout(() => {
                this.showModal = true
                setTimeout(() => {
                  this.showModal = false
                  this.$router.push('/bieutuong')
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
