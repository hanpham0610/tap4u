import axios from 'axios'
import { apiUserLink } from '@/assets/js/api'

// lấy danh sách biểu tượng mxh có type = 1
export const createUserLink = async () => {
  try {
    const res = await axios.post(apiUserLink)
    // console.log(res.data.data);
    if (res.data.data) {
      return res.data.data
    } else {
      throw new Error('Không có dữ liệu trả về từ máy chủ')
    }
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error)
    throw error // Re-throw lỗi để cho caller biết có lỗi xảy ra
  }
}
