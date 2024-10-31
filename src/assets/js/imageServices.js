import axios from 'axios'
import { apiGetListImage } from '@/assets/js/api'

// lấy danh sách biểu tượng mxh có type = 1
export const getGetListImage1 = () => {
  return axios.get(apiGetListImage).then((res) => {
    // console.log(res.data.data)
    if (res.data.data) {
      return res.data.data
    }
  })
}
