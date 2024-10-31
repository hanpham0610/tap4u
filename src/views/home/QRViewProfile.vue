<template>
  <div class="container">
    <div class="row">
      <div class="w-100 p-2 d-flex mt-3">
        <button class="btn" @click="clickHome()" style="color: white">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div class="d-flex m-auto">
          <strong class="mr-4" style="color: white; font-size: 25px"> Quét để xem</strong>
        </div>
      </div>
      <div class="w-100 d-flex justify-content-center mt-5">
        <div id="qrCodeBox ">
          <div class="bg-gray-100 d-flex justify-content-center items-center h-screen">
            <div
              class="shadow-md rounded-qrcode bg-white p-4 mt-4"
              style="padding-bottom: 0.5rem !important"
            >
              <div class="d-flex justify-content-center items-center mt-2">
                <canvas id="qr-canvas" width="200" height="200" ref="qrcode"></canvas>
              </div>

              <div class="text-center mt-2">
                <a :href="textUrl" style="color: black"
                  ><span class="text-sm"> {{ textUrl }}</span></a
                >
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around">
            <div class="d-flex">
              <button type="button" @click="copyURL" class="btn btn-oran mt-4">
                <i class="fa fa-clone mr-2" aria-hidden="true"></i>Sao Chép
              </button>
            </div>
            <div class="d-flex">
              <!-- <button type="button" @click="downloadQR" class="btn btn-oran mt-4">
                <i class="fa fa-link mr-2" aria-hidden="true"></i>Xem trang
              </button> -->

              <a :href="textUrl" style="color: white"
                ><span class="text-sm"
                  ><button type="button" class="btn btn-oran mt-4">
                    <i class="fa fa-link mr-2" aria-hidden="true"></i>Xem trang
                  </button>
                </span></a
              >
            </div>
          </div>
          <div id="snackbar" v-if="showModal">
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-center">
                <div class="modal-content-thongbao">
                  <div class="modal-header f-flex flex-column m-auto p-4" style="color: green">
                    <h5 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
                      <img style="width: 25px" src="/img/icon/tickXanh.png" />
                    </h5>
                    <span class="mt-2"> Sao chép thành công !</span>
                  </div>
                  <!-- <div class="modal-footer">
          <button type="button" @click="closeModal" class="btn btn-primary m-auto">Đồng ý !</button>
        </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <chan-trang></chan-trang>
</template>
<style scoped>
.btn-oran {
  width: 135px;
}
</style>
<script>
import html2canvas from 'html2canvas'
import { domain } from '@/assets/js/common'
import ChanTrang from '@/components/ChanTrang.vue'

export default {
  components: { ChanTrang },
  async mounted() {
    const QRCode = await import('qrcode')
    this.generateQRCode(QRCode)
  },
  data() {
    return {
      idProfile: '',
      message: '',
      showModal: false,

      textUrl: ''
    }
  },
  methods: {
    generateQRCode(QRCode) {
      const anhDaiDien = localStorage.getItem('anhDaiDien')
      const canvas = this.$refs.qrcode
      const options = {
        width: 250,
        height: 250,
        colorDark: '#FFFFFF',
        colorLight: '#000000',
        correctLevel: QRCode.QRCode?.CorrectLevel?.H || QRCode.CorrectLevel?.H,
        margin: 0
      }

      this.idProfile = localStorage.getItem('idCheckQR')
      this.textUrl = domain + '/' + this.idProfile
      QRCode.toCanvas(canvas, this.textUrl, options, (error) => {
        if (error) {
          console.error(error)
        } else {
          // Khi QR code đã được vẽ, thêm logo vào giữa.
          const ctx = canvas.getContext('2d')
          const img = new Image()
          img.src = 'https://drive.google.com/thumbnail?id=' + anhDaiDien + '&sz=w500'
          img.onload = () => {
            const imageSize = 50 // Kích thước của logo
            const padding = 5 // Độ dày của viền trắng
            const totalSize = imageSize + padding * 2 // Tổng kích thước bao gồm logo và viền
            const dx = (canvas.width - totalSize) / 2
            const dy = (canvas.height - totalSize) / 2

            // Vẽ hình tròn màu trắng làm viền
            ctx.fillStyle = '#FFFFFF'
            ctx.beginPath()
            ctx.arc(dx + totalSize / 2, dy + totalSize / 2, totalSize / 2, 0, 2 * Math.PI)
            ctx.fill()

            // Vẽ logo lên trên, giữa hình tròn màu trắng
            ctx.beginPath()
            ctx.arc(dx + totalSize / 2, dy + totalSize / 2, imageSize / 2, 0, 2 * Math.PI)
            ctx.clip() // Cắt theo hình tròn đã vẽ
            ctx.drawImage(img, dx + padding, dy + padding, imageSize, imageSize)
          }
        }
      })
    },
    copyURL() {
      const urlToCopy = domain + '/' + this.idProfile
      navigator.clipboard
        .writeText(urlToCopy)
        .then(() => {
          //// console.log('this.message  ' + this.message)
          this.showModal = true
          setTimeout(() => {
            this.showModal = false
          }, 2000)
        })
        .catch(() => {
          this.message = 'Sao chép thất bại'
          // console.log('this.message  ' + this.message)

          setTimeout(() => {
            this.message = 'Sao chép thất bại'
          }, 2000)
        })
    },
    clickHome() {
      // const idProfile = localStorage.getItem('idProfile')
      // localStorage.removeItem('idCheckQR')
      // this.$router.push('/' + idProfile)
      this.$router.go(-1)
    },
    downloadQR() {
      html2canvas(document.body)
        .then((canvas) => {
          const link = document.createElement('a')
          link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
          link.download = 'QRCode.png'
          link.click()
          this.message = 'Tải QR thành công'
        })
        .catch(() => {
          this.message = 'Tải QR thất bại'
        })
    }
  }
}
</script>
