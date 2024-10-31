<template>
  <!-- Nav -->
  <div class="p-3 bg-white rounded-qrcode mt-3" style="height: 900px">
    <div class="d-flex justify-content-center"><h3 style="color: #f37d34">QUETNHANH.VN</h3></div>
    <hr style="background-color: #f37d34" />
    <div class="list-group">
      <router-link class="list-group-item list-group-item-action bd-none" :to="{ name: 'd-index' }"
        >Tổng quan</router-link
      >
      <router-link class="list-group-item list-group-item-action bd-none" :to="{ name: 'd-user' }"
        >Quản lý người dùng</router-link
      >
      <router-link class="list-group-item list-group-item-action bd-none" :to="{ name: 'd-image' }"
        >Hệ thống ảnh</router-link
      >
      <router-link class="list-group-item list-group-item-action bd-none" :to="{ name: 'd-sell' }"
        >Kênh bán</router-link
      >
    </div>
  </div>
</template>
