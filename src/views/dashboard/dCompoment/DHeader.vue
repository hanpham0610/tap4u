<template>
  <div>
    <!-- Header -->
    <div class="p-3 mb-3 flex-column bg-white rounded-qrcode mt-3" style="height: 75px">
      <div class="d-flex align-items-center">
        <div class="mr-2">
          <!-- Hình ảnh hình tròn -->
          <!-- <img
            class="rounded-circle profile-user-img"
            style="width: 50px; height: 50px"
            :src="image_key"
            alt="Page Image"
          /> -->
        </div>
        <div class="mr-auto h2 text-emphasis">
          <!-- Tên đăng nhập -->

          {{ pUser.first_name }} {{ pUser.last_name }}
        </div>
        <!-- Nút đăng xuất -->
        <button class="btn btn-danger" @click="logout()">Đăng xuất</button>
      </div>
    </div>
  </div>
</template>
<script>
import router from '@/router'
export default {
  props: {
    pUser: Object
  },
  data() {
    return {
      image_key: null
    }
  },
  mounted() {
    //// console.log(this.pUser)
  },

  methods: {
    async logout() {
      localStorage.clear()
      router.go({ name: 'd-login' })
      // router.reload()
    }
  }
}
</script>
