<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-row">
      <h2>Người dùng</h2>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        @click="showModal = !showModal"
      >
        Tạo người dùng mới
      </button>

      <div class="modal" id="myModal" tabindex="-1" v-if="showModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myModalLabel">Thêm mới tài khoản</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="closeModel()"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="" class="form-label">Chọn nơi bán</label>
                <select class="form-select" v-model="createUser.sell_name">
                  <option v-for="item in listSell" :key="item.id" :value="item.name">
                    {{ item.name }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Mã đơn hàng</label>
                <input
                  type="text"
                  class="form-control border border-secondary"
                  id=""
                  placeholder="Nhập mã đơn hàng"
                  v-model="createUser.sell_number"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Id thẻ</label>
                <input
                  type="text"
                  class="form-control border border-secondary"
                  placeholder="Nhập mã ID thẻ"
                  v-model="createUser.idc"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="closeModel()"
              >
                Đóng
              </button>
              <button type="button" class="btn btn-primary" @click="createNewAcc()">Lưu</button>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column"></div>
    </div>
    <div class="row g-3 align-items-center mt-5">
      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Mã bảo mật</label>
      </div>
      <div class="col-auto">
        <input
          type="text"
          id="url_profile"
          class="form-control"
          v-model="paramSearch.url_profile"
        />
      </div>

      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Email</label>
      </div>
      <div class="col-auto">
        <input type="email" id="email" class="form-control" v-model="paramSearch.email" />
      </div>
      <select class="form-select" aria-label="Default select example" v-model="paramSearch.status">
        <option selected value="null">Trạng thái</option>
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
      <button type="button" class="btn btn-primary ml-2" @click="findUser()">Tìm kiếm</button>
      <button type="button" class="btn btn-outline-danger ml-2" @click="clearForm()">Xóa</button>
    </div>

    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Họ tên</th>
          <th scope="col">Email</th>
          <th scope="col">Link</th>
          <th scope="col">Mask</th>
          <th scope="col">Sell</th>
          <th scope="col">Mã đơn hàng</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in list" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }} {{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.url_profile }}</td>
          <td>{{ user.url_profile_mask }}</td>
          <td>{{ user.sell_name }}</td>
          <td>{{ user.sell_number }}</td>
          <td>{{ user.status }}</td>
          <td>
            <a
              :href="domain + '/' + user.url_profile"
              class="btn btn-outline-success"
              target="_blank"
              >Xem</a
            >
            <button type="button" class="btn btn-danger" @click="deleteUser(user.id)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <dPaginationVue
      :current-page="meta.currentPage"
      :total-pages="meta.totalPages"
      @change-page="handlePageChange"
    /> -->
  </div>
</template>

<script>
import { getListUser, getTaoTaiKhoanMoi, deleteUser } from '@/assets/js/dashboard/dUserSevice'
import { getListSell } from '@/assets/js/dashboard/dSellSevice'
// import dPaginationVue from "./dCompoment/dPagination.vue";
import { domain } from '@/assets/js/common'

export default {
  data() {
    return {
      showModal: false,
      list: [],
      domain: domain,
      showLoading: false,
      statusCode: '',
      paramSearch: {
        url_profile: null,
        email: null,
        status: null
      },
      meta: {
        currentPage: 1,
        nextPageUrl: null,
        previousPageUrl: null
      },
      createUser: {
        sell_name: null,
        sell_number: null,
        idc: '0'
      },

      listSell: [],
      showModalCreateUser: true
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 1000)
    this.getListUser()
    this.getListSell()
  },
  methods: {
    async getListUser() {
      try {
       
        const res = await getListUser()

        this.list = res.data
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },

    async createNewAcc() {
      try {
        const res = await getTaoTaiKhoanMoi(this.createUser)
        if (res.statusCode == 200) {
          this.findUser()
          this.closeModel()
        }
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },

    async findUser() {
      try {
        //// console.log(this.paramSearch);
        const res = await getListUser(this.paramSearch)

        this.list = res.data
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },
    async deleteUser(id) {
      try {
        const res = await deleteUser(id)

        if (res.statusCode == 200) {
          this.findUser()
        }
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },
    async clearForm() {
      try {
        this.paramSearch.email = null
        this.paramSearch.url_profile = null
        this.paramSearch.status = null
      } catch (error) {
        // console.log()
      }
    },
    toggleModal() {
      this.showModal = !this.showModal // Toggle modal visibility
    },
    async getListSell() {
      try {
        this.user = JSON.parse(localStorage.getItem('aduser'))

        const res = await getListSell(this.paramSearch)
        if (res.statusCode == 200) {
          this.listSell = res.data
        }
      } catch (error) {
        // console.log('Chưa lấy được thong tin' + error)
      }
    },
    closeModel() {
      this.showModal = false
      this.createUser.sell_name = null
      this.createUser.sell_number = null
      this.createUser.idc = '0'
    }
  }
}
</script>
