<template>
  <div
    class="d-flex flex-column"
    style="background-image: url('/img/bg/bg.jpg'); background-size: cover"
  >
    <div class="fixed-top">
      <!-- <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="d-flex w-100">
          <a
            class="navbar-brand"
            href="#"
            style="text-transform: uppercase; align-items: center; display: flex"
          >
            <img style="width: 100px" src="/img/icon/quetnhanh-trang.png" />
          </a>
          <button class="navbar-toggler" type="button" @click="toggleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            :class="{ show: isNavbarOpen }"
            id="navbarResponsive"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#" @click="goToGioiThieu()"
                  >Giới thiệu <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="goToSanPham()">Sản Phẩm</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="goToGiaoDien()">Giao diện</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="goToHuongDan()">Hướng dẫn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="lienHe()">Liên hệ</a>
              </li>
              <li class="nav-item ml-4">
                <a class="nav-link" href="/dangnhap"
                  ><i class="fa fa-user-circle-o" aria-hidden="true"></i> Đăng nhập</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav> -->
      <nav
        id="navbarExample"
        class="navbar navbar-expand-lg fixed-top navbar-light navbar navbar-expand-lg navbar-dark"
        aria-label="Main navigation"
      >
        <div class="d-flex w-100">
          <a
            class="navbar-brand"
            href="#"
            style="text-transform: uppercase; align-items: center; display: flex"
          >
            <img style="width: 100px" src="/img/icon/quetnhanh-trang.png" />
          </a>
          <button class="navbar-toggler" type="button" @click="toggleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            :class="{ show: isNavbarOpen }"
            id="navbarResponsive"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#" @click="goToGioiThieu()"
                  >Giới thiệu <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="goToSanPham()">Sản Phẩm</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="goToGiaoDien()">Giao diện</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="goToHuongDan()">Hướng dẫn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="lienHe()">Liên hệ</a>
              </li>
              <li class="nav-item ml-4">
                <a class="nav-link" href="/dangnhap"
                  ><i class="fa fa-user-circle-o" aria-hidden="true"></i> Đăng nhập</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="d-flex flex-column p-0 mt-5">
      <div class="star"></div>
      <div class="meteor-1"></div>
      <div class="meteor-2"></div>
      <div class="meteor-3"></div>
      <div class="meteor-4"></div>
      <div class="meteor-5"></div>
      <div class="meteor-6"></div>
      <div class="meteor-7"></div>
      <div class="meteor-8"></div>
      <div class="meteor-9"></div>
      <div class="meteor-10"></div>
      <div class="meteor-11"></div>
      <div class="meteor-12"></div>
      <div class="meteor-13"></div>
      <div class="meteor-14"></div>
      <div class="meteor-15"></div>
      <div style="opacity: 0.7; position: absolute;" class="mt-5">
        <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <!-- Sun -->
          <circle cx="250" cy="250" r="50" fill="yellow">
            <animate attributeName="r" values="45;55;45" dur="3s" repeatCount="indefinite" />
          </circle>

          <!-- Mercury Orbit -->
          <circle
            cx="250"
            cy="250"
            r="70"
            fill="none"
            stroke="#888"
            stroke-width="1"
            stroke-dasharray="2,4"
          />
          <!-- Mercury -->
          <circle cx="250" cy="180" r="5" fill="gray">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>

          <!-- Venus Orbit -->
          <circle
            cx="250"
            cy="250"
            r="100"
            fill="none"
            stroke="#888"
            stroke-width="1"
            stroke-dasharray="2,4"
          />
          <!-- Venus -->
          <circle cx="250" cy="150" r="8" fill="#e0a849">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          <!-- Earth Orbit -->
          <circle
            cx="250"
            cy="250"
            r="140"
            fill="none"
            stroke="#888"
            stroke-width="1"
            stroke-dasharray="2,4"
          />
          <!-- Earth -->
          <circle cx="250" cy="110" r="10" fill="blue">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>

          <!-- Moon Orbit around Earth -->
          <circle cx="250" cy="110" r="20" fill="none" stroke="#888" stroke-width="0.5" />
          <!-- Moon -->
          <circle cx="230" cy="110" r="3" fill="lightgray">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 110"
              to="360 250 110"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          <!-- Mars Orbit -->
          <circle
            cx="250"
            cy="250"
            r="180"
            fill="none"
            stroke="#888"
            stroke-width="1"
            stroke-dasharray="2,4"
          />
          <!-- Mars -->
          <circle cx="250" cy="70" r="7" fill="red">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>

          <!-- Jupiter Orbit -->
          <circle
            cx="250"
            cy="250"
            r="230"
            fill="none"
            stroke="#888"
            stroke-width="1"
            stroke-dasharray="2,4"
          />
          <!-- Jupiter -->
          <circle cx="250" cy="20" r="20" fill="#f6a922">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>

          <!-- Saturn Orbit -->
          <circle
            cx="250"
            cy="250"
            r="280"
            fill="none"
            stroke="#888"
            stroke-width="1"
            stroke-dasharray="2,4"
          />
          <!-- Saturn -->
          <g transform="translate(250, -30)">
            <ellipse cx="0" cy="0" rx="25" ry="10" fill="none" stroke="orange" />
            <circle cx="0" cy="0" r="18" fill="#f2d16b">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 0 280"
                to="360 0 280"
                dur="30s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>
      <div class="row p-5 align-items-center banner-bg mt-5">
        <div class="col-md-5" style="color: white; font-family: math; font-weight: 600">
          <div class="d-flex flex-column">
            <h1 class="d-flex justify-content-end slide-in" style="color: white">
              DANH THIẾP ĐIỆN TỬ
            </h1>
            <div class="d-flex justify-content-end slide-in-right">
              <span class="mt-1 d-flex justify-content-end p-1 bgred">MỘT CHẠM THÔNG MINH</span>
            </div>
          </div>
        </div>
        <div class="col-md-7 text-center slide-up">
          <img src="/img/icon/icon_banner.png" class="img-fluid w-50" alt="" />
        </div>
      </div>
    </div>
  </div>

  <main style="background-color: #ffffff !important">
    <img src="/img/icon/banner-sanpham.png" class="img-fluid py-4" alt="" />
    <!-- giới thiệu -->
    <div class="container p-0" id="gioiThieu">
      <div class="row">
        <div class="d-flex flex-column w-100 bg-white p-3">
          <h3
            class="mt-3 bg-title-trai"
            style="color: #ffffff; padding-left: 20px; border-bottom: 1px #f37d34 solid"
          >
            Giới Thiệu
          </h3>
          <span style="text-align: center; padding: 20px">
            <!-- <a href="#"
              ><img
                src="/img/icon/quetnhanh-cam.png"
                width="100px"
                style="margin-bottom: 5px"
                alt="logo"
            /></a> -->
            <strong>Quetnhanh</strong> là ứng dụng giúp bạn tạo và lưu trữ
            <strong>danh thiếp kỹ thuật số</strong> của bạn với đầy đủ thông tin liên lạc, mạng xã
            hội, website,... <strong>Chia sẻ</strong> danh thiếp của bạn một cách nhanh chóng và dễ
            dàng qua việc <strong>chạm NFC</strong>, <strong>quét QR</strong>, hay với một
            <strong>đường dẫn nickname</strong> yêu thích của bạn. Mở rộng mạng lưới quan hệ, lưu và
            chia sẻ liên hệ của người thân, trợ lý, người bảo hộ,... trên hồ sơ của bạn. Nhận lại
            tài sản bị thất lạc bằng gắn vào đồ đạc, vật dụng, phương tiện,...</span
          >
        </div>
      </div>
    </div>

    <div class="container p-0">
      <div class="row bg-white">
        <!-- <h3 class="m-auto mt-4">Sản Phẩm</h3> -->
        <div class="col-12 mt-5" id="sanPham">
          <h3
            class="d-flex justify-content-end bg-title-phai"
            style="color: #ffffff; padding-right: 20px; border-bottom: 1px #f37d34 solid"
          >
            Sản Phẩm
          </h3>
        </div>
        <div class="col-12 col-md-6 p-4 mt-3">
          <span style="text-align: center; padding: 20px">
            Lựa chọn <strong>chất liệu cao cấp</strong>, <strong>hình ảnh sắc nét</strong>, sản phẩm
            của <strong>Quetnhanh</strong> mang đến sự bền bỉ vượt trội, đồng hành cùng bạn trong
            thời gian dài. Chúng tôi tự hào cung cấp <strong>đa dạng mẫu mã</strong>, đáp ứng mọi
            nhu cầu về <strong>phong cách</strong>, <strong>tính cách</strong> và
            <strong>sở thích</strong> của bạn. Dù bạn là cá nhân, tổ chức, nhãn hàng hay hội nhóm,
            <strong>Quetnhanh</strong> luôn sẵn sàng đáp ứng mọi yêu cầu về sản phẩm một cách chuyên
            nghiệp và tận tâm.</span
          >
        </div>
        <div class="col-12 col-md-6 mt-3">
          <img
            src="/img/icon/mokup-phone.png"
            style="width: 250px"
            class="d-flex justify-content-center d-md-block m-auto"
            alt=""
          />
        </div>

        <div class="col-12 mt-5" id="giaoDien">
          <h3
            class="bg-title-trai"
            style="
              color: #ffffff;
              padding-left: 20px;

              border-bottom: 1px #f37d34 solid;
            "
          >
            Giao Diện
          </h3>
        </div>

        <div class="col-12 col-md-6 mt-3">
          <img
            src="/img/icon/tay-cam-DT.jpg"
            style="width: 250px; /* border: 2px #f37d34 solid;  */ border-radius: 10px"
            class="d-flex justify-content-center d-md-block m-auto"
            alt=""
          />
        </div>
        <div class="col-12 col-md-6 p-4 mt-3">
          <span style="text-align: center; padding: 20px">
            Hơn cả một danh thiếp điện tử, <strong>Quetnhanh</strong> biến hồ sơ của bạn thành
            <strong>giao diện nổi bật</strong>, <strong>bắt mắt</strong> giúp tập trung vào
            <strong>giá trị chia sẻ</strong>. Với thao tác chỉnh sửa
            <strong>đơn giản</strong>,<strong> dễ dàng</strong>, bạn có thể nhanh chóng cập nhật
            thông tin và tạo ấn tượng mạnh mẽ với người xem.</span
          >
          <br />
          Giao diện hoàn toàn <strong>tương thích với đa số thiết</strong> bị điện thoại thông minh,
          máy tính bảng đến máy tính.
        </div>
      </div>
    </div>

    <div class="container p-0" id="huongDan">
      <h3
        class="d-flex justify-content-end bg-title-huongdan"
        style="
          color: #ffffff;
          padding-right: 20px;

          border-bottom: 1px #f37d34 solid;
        "
      >
        Hướng Dẫn Sử Dụng
      </h3>
      <div class="row bg-white p-4">
        <div class="back-br">
          <div class="d-flex justify-content-center flex-column">
            <!-- <h3 class="m-auto">Hướng Dẫn Sử Dụng</h3> -->
            <span class="m-auto p-3 mt-4" style="font-weight: 600">
              Nhận sản phẩm của <strong>Quetnhanh</strong> và làm theo các bước
              <strong>thật đơn giản</strong> với các bước bên dưới đây.</span
            >
          </div>
          <div class="container mt-3">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="d-flex flex-column p-3">
                  <span class="p-1">
                    <strong>1</strong>. Quét mã QR hoặc chạm vào vùng NFC trên điện thoại để dẫn đến
                    trang đăng ký; nhập email, mật khẩu và kiểm tra kỹ sau đó nhấn tạo tài
                    khoản</span
                  >
                </div>
                <div class="d-flex flex-column p-3">
                  <span class="p-1">
                    <strong>2</strong>. Để thiết lập thông tin, hãy truy cập:<br /><a
                      href="https://quetnhanh.vn/dangnhap"
                      >https://quetnhanh.vn/dangnhap
                    </a>
                    <br />
                    Nhập email và nhập mật khẩu sau đó nhấn đăng nhập</span
                  >
                </div>
                <div class="d-flex flex-column p-3">
                  <span class="p-1">
                    <strong>3</strong>. Lựa chọn mục <strong>"Sửa thông tin"</strong>,
                    <strong>"Danh thiếp người thân"</strong>,
                    <strong>"Biểu tượng mạng xã hội"</strong>,
                    <strong>"Chia sẻ liên kết"</strong> tương ứng để thêm hoặc thay đổi với mục đích
                    của bạn.
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6 m-auto">
                <div class="d-flex justify-content-between">
                  <img
                    src="/img/icon/hdsd-1.png"
                    style="width: 100px"
                    class="d-md-block m-auto"
                    alt=""
                  />
                  <img
                    src="/img/icon/hdsd-2.png"
                    style="width: 100px"
                    class="d-md-block m-auto"
                    alt=""
                  />
                  <img
                    src="/img/icon/hdsd-3.png"
                    style="width: 100px"
                    class="d-md-block m-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <hr class="m-auto mt-4" style="border-bottom: 1px #f37d34 solid; width: 300px; padding: 20px" /> -->
    <div class="col-12 p-4" id="lienHe">
      <a
        href="https://docs.google.com/forms/d/1BZ98DRi5Swkhz_-j9s06H1mOsTxfoYBmgw_RY7qnayU/viewform?edit_requested=true"
        target="_blank"
      >
        <button class="btn-lienhe d-flex m-auto w-50 justify-content-center p-4">
          <strong style="font-size: 26px">Nhận tư vấn</strong>
        </button>
      </a>
    </div>
  </main>
  <footer-quet-nhanh></footer-quet-nhanh>
  <div class="modal" v-if="showLoading">
    <div class="box-loadding box m-auto"></div>
  </div>
</template>
<style>
.bg-title-trai {
  background: linear-gradient(28deg, #f37d34 25%, #fff 25%);
}
.bg-title-phai {
  background: linear-gradient(333deg, #f37d34 25%, #fff 25%);
}

.bg-title-huongdan {
  background: linear-gradient(333deg, #f37d34 35%, #fff 35%);
}
.btn-lienhe {
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  position: relative;
  background: linear-gradient(-45deg, #f37d34, #ffb0ee, #c0ffb6, #d0ddff, #e1bfff);
  background-size: 400% 400%;
  animation: gradientBG 4.5s ease infinite;
  color: #dc3545;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 17px;
  /* font-size: 1.3rem; */
  transition: 0.3s;
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.back-br {
  width: 100%;
  background-color: #cfcfcf59;
  height: auto;
  border-radius: 40px;
}
.navbar-brand {
  margin-left: 1rem;
}
.pd-header {
  padding-left: 77px;
  padding-right: 77px;
}
.bgred {
  text-align: center;
  background-color: rgba(0, 18, 255, 0.7);
  color: #fff;
  width: 200px !important;
}

@media (max-width: 576px) {
  .navbar-brand {
    margin-left: 1rem;
  }
  .pd-header {
    padding-left: 0px;
    padding-right: 0px;
  }
  .bg-title-trai {
    background: linear-gradient(28deg, #f37d34 50%, #fff 50%);
  }
  .bg-title-phai {
    background: linear-gradient(333deg, #f37d34 50%, #fff 50%);
  }

  .bg-title-huongdan {
    background: linear-gradient(333deg, #f37d34 75%, #fff 75%);
  }
}
@media (max-width: 768px) {
  .navbar-brand {
    margin-left: 1rem;
  }
  .pd-header {
    padding-left: 0px;
    padding-right: 0px;
  }
  .bg-title-trai {
    background: linear-gradient(28deg, #f37d34 50%, #fff 50%);
  }
  .bg-title-phai {
    background: linear-gradient(333deg, #f37d34 50%, #fff 50%);
  }

  .bg-title-huongdan {
    background: linear-gradient(333deg, #f37d34 75%, #fff 75%);
  }
}
@media (max-width: 991px) {
  .fixed-top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
  }
  .navbar-collapse {
    position: absolute;
    margin-top: 47px;
    margin-left: -16px;
    width: 100%;
  }

  .navbar-toggler {
    border-color: #fff;
  }

  .navbar-nav {
    flex-direction: column;
    text-align: center;
  }

  .nav-item {
    margin-bottom: 10px;
  }
  .bg-title-trai {
    background: linear-gradient(28deg, #f37d34 50%, #fff 50%);
  }
  .bg-title-phai {
    background: linear-gradient(333deg, #f37d34 50%, #fff 50%);
  }

  .bg-title-huongdan {
    background: linear-gradient(333deg, #f37d34 75%, #fff 75%);
  }
}
</style>
<script>
import FooterQuetNhanh from './FooterQuetNhanh.vue'
export default {
  components: { FooterQuetNhanh },
  setup() {
    document.title = 'Quét nhanh - danh thiếp điện tử - nhanh gọn dễ dàng - quetnhanh.vn'
  },
  data() {
    return {
      isNavbarOpen: false,
      showLoading: false
    }
  },
  mounted() {},
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
    goToGioiThieu() {
      this.scrollToSection('gioiThieu')
    },
    goToSanPham() {
      this.scrollToSection('sanPham')
    },
    goToGiaoDien() {
      this.scrollToSection('giaoDien')
    },
    goToLienHe() {
      this.scrollToSection('lienHe')
    },
    goToHuongDan() {
      this.scrollToSection('huongDan')
    }
  }
}
</script>
