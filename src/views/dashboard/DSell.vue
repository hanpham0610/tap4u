<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-column">
      <h2>Nhà bán hàng</h2>
      <br />
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Tên nhà bán hàng</label>
        <input
          type="text"
          class="form-control"
          placeholder="Nhập tên nhà bán hàng"
          v-model="item.name"
        />
        <button type="button" class="btn btn-primary mt-3" @click="createSell()">Tạo mới</button>
      </div>
    </div>
    <!-- <div class="row g-3 align-items-center mt-5">
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
    </div> -->

    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Tên</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.status == 1 ? 'Hoạt động' : 'Không hoạt động' }}</td>

          <td>
            <button type="button" class="btn btn-danger" @click="deleteSell(item.id)">X</button>
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
import { getListSell, deleteSell, createSell } from '@/assets/js/dashboard/dSellSevice'
// import dPaginationVue from "./dCompoment/dPagination.vue";

export default {
  data() {
    return {
      item: {
        name: '',
        user_id: null
      },
      list: [],
      showModal: false,
      showLoading: false,
      statusCode: '',

      meta: {
        currentPage: 1,
        nextPageUrl: null,
        previousPageUrl: null
      },
      showModalCreateUser: true,
      user: null,
      paramSearch: {
        user_id: null,
        name: null,
        status: null
      }
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 1000)
    this.getListSell()
    this.user = JSON.parse(localStorage.getItem('aduser'))
  },
  methods: {
    async getListSell() {
      try {
        this.user = JSON.parse(localStorage.getItem('aduser'))
        //// console.log(this.paramSearch)

        const res = await getListSell(this.paramSearch)

        this.list = res.data
      } catch (error) {
        // console.log('Chưa lấy được thong tin' + error)
      }
    },
    async createSell() {
      try {
        if (this.item.name == '') {
          return
        }
        this.item.user_id = this.user.id
        const res = await createSell(this.item)
        if (res.statusCode == 200) {
          this.findSell()
          this.resetForm()
        }
      } catch (error) {
        // console.log('Chưa lấy được thong tin' + error)
      }
    },
    async resetForm() {
      try {
        this.item.name = null
      } catch (error) {
        // console.log('Chưa lấy được thong tin' + error)
      }
    },

    async findSell() {
      try {
        const res = await getListSell(this.paramSearch)

        this.list = res.data
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },
    async deleteSell(id) {
      try {
        const res = await deleteSell(id)

        if (res.statusCode == 200) {
          this.findSell()
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
    }
  }
}
// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', (event) => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
//   })
// }
</script>
