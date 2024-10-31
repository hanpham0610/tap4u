<template>
  <div class="container" style="padding: 25px; height: 100%">
    <div class="p-3 bradius20" style="background-color: #f4f4f4">
      <h2 class="text-center mb-4" style="font-size: 20px; font-weight: bold">Cập nhật hồ sơ</h2>

      <form>
        <div class="form-group">
          <label for="image" class="tieude-den">Chọn biểu tượng</label>
          <div class="">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <!-- <div v-if="!isValidPhone" class="text-danger">
            Vui lòng kiểm tra lại thông tin !
          </div> -->
        </div>

        <div class="form-group">
          <label for="url" class="tieude-den">Đường dẫn</label>
          <input
            type="text"
            class="form-control shadow-sm"
            id="url"
            v-model="user_link.url"
            placeholder="Nhập đường dẫn"
          />
        </div>

        <button
          type="button"
          class="mt-3 nBtnCam bradius20"
          @click="createUserLink"
          style="width: 100%"
        >
          Xác nhận
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { isValidName, isValidPhone } from '@/assets/js/listService'
export default {
  data() {
    return {
      image_key: '',
      last_name: '',
      phone: '',
      listIcon: null,
      user_link: {
        user_id: null,
        image_key: null,
        url: null,
        status: 1
      }
    }
  },
  methods: {
    checkForm() {
      if (!isValidName(this.first_name)) {
        return
      }
      if (!isValidName(this.last_name)) {
        return
      }
      if (!isValidPhone(this.phone)) {
        return
      }
    },
    // async getListIcons() {

    //   try {
    //       const res = await postUpdateProfie(this.email);
    //       this.statusCode = res.statusCode;
    //      // console.log("res.statusCode " + res.statusCode);
    //       // this.showModal = true
    //     } catch (error) {
    //      // console.log(error);
    //     }
    // },
    async createUserLink() {
      // console.log(this.user_link)
      // this.first_name = isValidName(this.first_name);
      // this.last_name = isValidName(this.last_name);
      // this.phone = isValidName(this.phone);
      if (this.first_name && this.last_name && this.phone) {
        // try {
        //   const res = await postUpdateProfie(this.email);
        //   this.statusCode = res.statusCode;
        //  // console.log("res.statusCode " + res.statusCode);
        //   // this.showModal = true
        // } catch (error) {
        //  // console.log(error);
        // }
      }
    }
  }
}
</script>
<style>
input[type='text'] {
  height: 44px;
  border: none;
  border-radius: 10px;
}

input[type='textarea'] {
  height: 100px;
}
input[type='password'] {
  height: 44px;
  border: none;
  border-radius: 10px;
}
input[type='email'] {
  height: 44px;
  border: none;
  border-radius: 10px;
}
</style>
