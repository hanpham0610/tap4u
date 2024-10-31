<template>
  <div class="fixed-top pd-header">
    <nav class="navbar navbar-expand-lg navbar-dark mx-background-top-linear" :class="{ scrolled: isScrolled }" id="navbar">
  <div class="d-flex w-100">
    <a class="navbar-brand" href="index.html" style="text-transform: uppercase">
      <img style="width: 100px" src="/img/icon/quetnhanh-trang.png" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#" @click="goToGioiThieu()">Giới thiệu<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" @click="goToSanPham()">
          <a class="nav-link" href="#">Sản Phẩm</a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#">Giao diện</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Hướng dẫn</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Liên hệ</a></li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Đăng nhập</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </div>
</template>


<script>
export default {
  setup() {
    
  },
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll); 
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50; 
    },
    goToGioiThieu() {
      this.$router.push({ hash: '#gioiThieu' });
    },
    goToSanPham() {
      this.$router.push({ hash: '#sanPham' });
    }
  }
}
</script>

<style scoped>

</style>