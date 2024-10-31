<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-12">
        <div class="d-flex justify-content-center flex-column" style="position: relative">
          <div class="block1 m-auto" style="padding-top: 20px">
            <div style="position: absolute; right: 25px">
              <div class="dropdown" style="float: right">
                <button class="dropbtn">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div class="dropdown-content">
                  <router-link :to="{ name: 'dangnhap' }"><strong>Đăng nhập</strong></router-link>
                </div>
              </div>
            </div>
            <img
              class="img-profile rounded-circle profile-user-img"
              :src="`https://drive.google.com/thumbnail?id=${anhDaiDien}&sz=w500`"
              v-if="anhDaiDien"
              alt="Page Image"
              loading="lazy"
            />
            <img class="img-profile rounded-circle" :src="avatar" v-else alt="Page Image" />
          </div>
          <div class="block2 m-auto d-flex flex-column" style="color: white">
            <div class="p-3 m-auto">
              <strong style="font-size: 28px"> {{ HovaTen }} </strong>
            </div>
            <div class="p-2 m-auto" style="text-align: center">
              <span> {{ describe }}</span>
              <!-- <input hidden placeholder="nhập thông tin giới thiệu" /> -->
            </div>
          </div>

          <!-- <div class="d-flex w-100 justify-content-center mt-2 pb-4">
            <div class="p-2" v-for="itemBieuTuong in listBieuTuongLienKet" :key="itemBieuTuong.id">
              <a class="bg-icon" :href="itemBieuTuong.url" target="_blank">
                <img
                  class="m-auto"
                  style="width: 40px"
                  :src="`https://drive.google.com/thumbnail?id=${itemBieuTuong.image_key}&sz=w500`"
                />
              </a>
            </div>
          </div> -->
          <div class="d-flex flex-wrap justify-content-center mt-2 pb-4">
            <template
              v-for="(itemBieuTuong, index) in listBieuTuongLienKet"
              :key="itemBieuTuong.id"
            >
              <div class="p-2">
                <a class="bg-icon" :href="itemBieuTuong.url" target="_blank">
                  <img
                    class="m-auto"
                    style="width: 40px"
                    :src="`https://drive.google.com/thumbnail?id=${itemBieuTuong.image_key}&sz=w100`"
                    loading="lazy"
                  />
                </a>
              </div>
              <template v-if="(index + 1) % 5 === 0 && index !== listBieuTuongLienKet.length - 1">
                <div class="w-100"></div>
              </template>
            </template>
          </div>
          <!-- <div class="container"> 
            <div class="row row-cols-3" >
              <div class="col"  v-for="itemBieuTuong in listBieuTuongLienKet" :key="itemBieuTuong.id">
                <a class="bg-icon" :href="itemBieuTuong.url" target="_blank">
                <img
                  class="m-auto"
                  style="width: 40px"
                  :src="`https://drive.google.com/thumbnail?id=${itemBieuTuong.image_key}&sz=w500`"
                />
              </a>
                 </div>
               </div>
          </div> -->

          <div class="container bg-white p-3 border-frame shadow-sm">
            <div class="row justify-content-center">
              <div class="d-flex flex-column w-100">
                <div class="w-100 d-flex justify-content-center">
                  <span style="color: #f37d34"><strong>Thông tin liên hệ</strong></span>
                </div>
                <hr />
                <div class="d-flex justify-content-around mt-1">
                  <a :href="phoneNumberLink" v-if="phone">
                    <img :src="imgIconPhone" width="30px" />
                  </a>
                  <a @click="transferCode()" style="cursor: pointer">
                    <img :src="imgIconQR" width="30px" />
                  </a>
                  <a :href="downloadContact">
                    <i
                      class="fa fa-address-book-o"
                      style="font-size: 30px; cursor: pointer; color: #f37d34"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a>
                    <i
                      class="fa fa-angle-down"
                      style="font-size: 30px; cursor: pointer; color: #007bff"
                      v-if="tickShow"
                      @click="clickShow()"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-angle-up"
                      style="font-size: 30px; cursor: pointer; color: #007bff"
                      @click="clickHide()"
                      v-else
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                <div class="w-100" v-if="showList">
                  <div
                    class="d-flex flex-column w-100 mt-3"
                    v-for="itemDanhThiep in listDanhThiep"
                    :key="itemDanhThiep.id"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <strong class="ml-3" style="color: #f37d34">
                        {{ itemDanhThiep.business_card_name }}</strong
                      >
                      <a class="mr-3" :href="'tel:' + itemDanhThiep.phone">
                        <img :src="imgIconPhone" width="25px" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center icon-s-large">
            <!-- <span> &#8226;</span>
            <span class="pr-3 pl-3"> &#8226;</span>
            <span> &#8226;</span> -->
            <span class="">~~~~~~</span>
          </div>
          <div class="container">
            <div class="row">
              <div
                class="d-flex flex-column w-100"
                v-for="itemDuongDan in listLienKet"
                :key="itemDuongDan.id"
              >
                <a :href="itemDuongDan.url" class="" target="_blank">
                  <button type="button" class="btn btn-oran mt-4 w-100">
                    <span class="text-over m-auto" style="display: block">
                      {{ itemDuongDan.name }}</span
                    >
                  </button>
                </a>
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
  <chan-trang></chan-trang>
</template>

<style>
.bg-icon {
  background: white;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  /* margin: auto; */
  display: flex;
}
.img-profile {
  width: 150px;
  height: 150px;
  border: 3px #fff solid;
}
hr {
  border: none;
  height: 2px;
  background-color: #f37d34; /* Màu cam */
}
.border-frame {
  border-radius: 10px;
  /* border: 2px #1c9cac solid; */
}
.btn-oran {
  border-radius: 1rem;
  color: #f37d34 !important;
  background: #fff;
  height: 50px;
}
.btn-oran a {
  color: #f37d34 !important;
}
.icon-s-large {
  color: white;
  font-size: xx-large;
}
</style>
<script>
import { postSearchProfile } from '@/assets/js/userSevice'
import { api } from '@/assets/js/common'
import ChanTrang from '@/components/ChanTrang.vue'
export default {
  components: { ChanTrang },
  data() {
    return {
      avatar: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
      imgIconFb: 'img/icon/fb.png',
      imgIconIg: 'img/icon/ig.png',
      imgIconGit: 'img/icon/git.png',
      imgIconIn: 'img/icon/in.png',
      imgIconPhone: 'img/icon/phone.png',
      imgIconQR: 'img/icon/qr-code.png',
      imgIconDow: 'img/icon/download.png',
      imgIconTick: 'img/icon/tick.png',
      imgIconShare: 'img/icon/share.png',
      HovaTen: '',
      phone: '',
      describe: '',
      tickShow: false,
      tickHide: false,
      showList: false,
      hideList: false,
      listBieuTuongLienKet: [],
      listLienKet: [],
      listDanhThiep: [],
      anhDaiDien: '',
      downloadContact: '',
      idProfile: '',
      showLoading: false
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 500)
    ;(this.tickShow = true), (this.tickHide = false)
  },

  async created() {
    if (this.$route.params && this.$route.params.id) {
      this.idProfile = this.$route.params.id
      await this.performPostRequest(this.idProfile)

      this.downloadContact = api + '/ln-quetnhanh-api/vcard/' + this.idProfile + '.vcf'
    } else {
      // console.error('Missing ID in router params')
    }
  },
  computed: {
    phoneNumberLink() {
      return 'tel:' + this.phone
    }
  },
  methods: {
    clickShow() {
      this.tickHide = true
      this.tickShow = false
      this.showList = true
    },
    clickHide() {
      this.tickHide = false
      this.tickShow = true
      this.showList = false
    },

    async performPostRequest(idProfile) {
      try {
        //// console.log('idProfile ' + idProfile)
        const res = await postSearchProfile(idProfile)
        //// console.log(res.data.data.first_name)
        //// console.log(res.data.data.last_name)
        // this.showModal = true
        if (res.data.statusCode == 200) {
          if (res.data.data.status == 1) {
            this.listBieuTuongLienKet = res.data.data.bieutuonglienket
            this.listLienKet = res.data.data.duongdanlienket
            this.listDanhThiep = res.data.data.danhthiepmorong
            this.Profile = res.data.data
            this.HovaTen = res.data.data.first_name + ' ' + res.data.data.last_name

            //// console.log(this.HovaTen)
            this.phone = res.data.data.phone
            this.describe = res.data.data.describe
            this.anhDaiDien = res.data.data.anhdaidien
            this.idProfile = this.Profile.url_profile
            document.title = this.HovaTen
            this.$router.push({ path: '/' + this.idProfile, replace: true })
            localStorage.setItem('anhDaiDien', this.anhDaiDien)
          } else if (res.data.data.status == 0) {
            //// console.log(res.data.data.status)

            this.$router.push('/dangky')
            localStorage.setItem('keyDangKy', idProfile)
          }
        } else if (res.data.statusCode == 0) {
          localStorage.clear()
          this.$router.push('/dangky')
          //// console.log('Dang ky')
          // localStorage.setItem('keyDangKy', idProfile)
        }
      } catch (error) {
        //// console.log('Chưa lấy được thong tin')
      }
    },
    transferCode() {
      localStorage.setItem('idCheckQR', this.idProfile)
      this.$router.push('/qr')
    }
  }
}
</script>
