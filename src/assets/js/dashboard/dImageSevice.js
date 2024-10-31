import { hostLive } from '@/assets/js/common'
import axiosInstance from '../baseAxios'

const src = 'images'
export const getListImage = (param) => {
  return axiosInstance.get(hostLive + src, { params: param }).then((res) => {
    //// console.log(res.data.data)
    if (res.data.data) {
      return res.data
    }
  })
}
export const deleteImage = async (id, user_id) => {
  const user = JSON.parse(localStorage.getItem('aduser'))
  //// console.log(JSON.stringify(user['id']))
  if (user.email != 'nguyennam.kkb@gmail.com') {
    return null
  }
  return axiosInstance.delete(hostLive + src + '/' + id + '?user_id=' + user_id).then((res) => {
    return res.data
  })
}
