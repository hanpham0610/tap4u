<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-row">
      <h2>Ảnh hệ thống</h2>
      <!-- <button type="button" class="btn btn-outline-primary ml-3" @click="createNewAcc()">
        Tạo người dùng mới
      </button> -->
    </div>
    <div class="row g-3 align-items-center mt-5">
      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Tên ảnh</label>
      </div>
      <div class="col-auto">
        <input type="text" id="url_profile" class="form-control" v-model="paramSearch.name" />
      </div>

      <select class="form-select" aria-label="Default select example" v-model="paramSearch.type">
        <option selected value="null">Loại ảnh</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button type="button" class="btn btn-primary ml-2" @click="findImage()">Tìm kiếm</button>
      <button type="button" class="btn btn-outline-danger ml-2" @click="clearForm()">Xóa</button>
    </div>

    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Tài khoản</th>
          <th scope="col">Key</th>
          <th scope="col">Tên ảnh</th>
          <th scope="col">Loại</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="image in list" :key="image.id">
          <th scope="row">{{ image.id }}</th>
          <td>{{ image.user_id }}</td>
          <td>{{ image.image_key }}</td>
          <td>{{ image.name }}</td>
          <td>{{ image.type }}</td>
          <td>
            <a
              :href="'https://drive.google.com/thumbnail?id=' + image.image_key + '&sz=w100'"
              class="btn btn-outline-success"
              target="_blank"
              >Xem</a
            >
            <button type="button" class="btn btn-warning">Sửa</button>
            <button type="button" class="btn btn-danger" @click="deleteImage(image.id)">X</button>
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
import { getListImage, deleteImage } from '@/assets/js/dashboard/dImageSevice'
// import dPaginationVue from "./dCompoment/dPagination.vue";

export default {
  data() {
    return {
      list: [],
      showModal: false,
      showLoading: false,
      statusCode: '',
      paramSearch: {
        user_id: null,
        type: null,
        name: null,
        status: null
      },
      meta: {
        currentPage: 1,
        nextPageUrl: null,
        previousPageUrl: null
      },
      showModalCreateUser: true,
      user_id: null
    }
  },
  mounted() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 1000)
    this.getListImage()
    const adUser = JSON.parse(localStorage.getItem('aduser'))
    this.user_id = adUser.id
  },
  methods: {
    async getListImage() {
      try {
        const res = await getListImage()

        this.list = res.data
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },

    async findImage() {
      try {
        //// console.log(this.paramSearch);
        const res = await getListImage(this.paramSearch)

        this.list = res.data
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },
    async deleteImage(id) {
      try {
        const res = await deleteImage(id, this.user_id)

        if (res.statusCode == 200) {
          this.findImage()
        }
      } catch (error) {
        // console.log('Chưa lấy được thong tin')
      }
    },
    async clearForm() {
      try {
        this.paramSearch.name = null
        this.paramSearch.type = null
      } catch (error) {
        // console.log()
      }
    }
    // toggleModal() {
    //   this.showModal = !this.showModal // Toggle modal visibility
    // }
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
