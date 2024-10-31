<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-3" v-if="user">
        <DNav />
      </div>
      <div class="col-12 col-md-9">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-12">
              <DHeader v-if="user" :pUser="user" />
            </div>
            <div class="col-12 col-md-12">
              <div class="mt-3 p-3 flex-column bg-light flex-grow-1 rounded-qrcode">
                <!-- Nội dung của trang -->
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header -->
  </div>
</template>
<style>
#app {
  max-width: 100% !important;
}
.footer-quetnhanh {
  position: relative !important;
  color: chocolate !important;
}
.footer-quetnhanh > p {
  color: chocolate !important;
}
</style>
<script>
import router from '@/router'
import DHeader from './dCompoment/DHeader.vue' // Import DHeader component
import DNav from './dCompoment/DNav.vue'

export default {
  components: {
    DHeader, // Register DHeader component
    DNav
  },
  data() {
    return {
      user: null
    }
  },
  async mounted() {
    this.checkUserAdmin()
  },
  methods: {
    async checkUserAdmin() {
      this.user = JSON.parse(localStorage.getItem('aduser'))
      //// console.log('hahah', this.user)
      if (this.user == null) {
        router.push({ name: 'd-login', params: this.user })
      }
    }
  }
}
</script>
