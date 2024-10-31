import axios from 'axios'
import {
  getMaBaoMat,
  postDangKy,
  apiDangNhap,
  apiOTP,
  apiForgetPass,
  apiUpdateProfile,
  apiThemLienKet,
  apiGetImgIcon,
  apiUpdateBieuTuongMXH,
  apiXoaBieuTuongMXG,
  apiUserLink,
  apiThayAvatar,
  apiDanhThiep,
  apiDownloadContact,
  apiBieuTuong
} from '@/assets/js/api'
import { getCKS } from '@/assets/js/listService'
import { apiSearchUser } from './api'
import axiosInstance from './baseAxios'

// const checkSumMd5 = import.meta.env.VITE_SECRET_KEY_APP
// lấy token
export const getToken = () => {
  return axios.get(getMaBaoMat).then((res) => {
    // console.log(res.data.data.url_profile)
    if (res.data.data.url_profile) {
      return res.data.data.url_profile
    }
  })
}
export const getImgIcon = () => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .get(apiGetImgIcon + '&cksRequest=' + cksRequest + '&timeRequest=' + timeRequest)
    .then((res) => {
      if (res.data.statusCode == 200) {
        return res.data
      } else {
        return 'Hệ thống đang bảo trì, vui lòng thử lại sau'
      }
    })
}
export const postChangeAvatar = (formData) => {
  const { cksRequest, timeRequest } = getCKS()
  formData.append('cksRequest', cksRequest)
  formData.append('timeRequest', timeRequest)
  return axiosInstance
    .post(apiThayAvatar, formData, { Headers: { 'Content-Type': 'multipart/form-data' } })
    .then((res) => {
      if (res.data.statusCode == 200) {
        return res.data
      } else {
        return 'Hệ thống đang bảo trì, vui lòng thử lại sau'
      }
    })
}
// lay otp
export const getOTP = async (email) => {
  const { cksRequest, timeRequest } = getCKS()
  return axios.post(apiOTP, { email, cksRequest, timeRequest }).then((res) => {
    if (res.data.statusCode == 199) {
      return res.data
    } else {
      return 'Hệ thống đang bảo trì, vui lòng thử lại sau'
    }
  })
}
// dang ky tai khoan
export const postRegister = async (email, password, url_profile) => {
  try {
    const { cksRequest, timeRequest } = getCKS()
    const res = await axios.post(postDangKy, {
      email,
      password,
      url_profile,
      cksRequest,
      timeRequest
    })

    return res.data
  } catch (error) {
    // console.log(error)
  }
}
// quên mật khâủ
export const postQuenMatKhau = async (email, otp, password) => {
  try {
    const { cksRequest, timeRequest } = getCKS()
    const res = await axios.post(apiForgetPass, {
      email,
      otp,
      password,
      cksRequest,
      timeRequest
    })
    return res.data
  } catch (error) {
    // console.log(error)
  }
}

// đang nhập
export const postLogin = (email, password) => {
  const { cksRequest, timeRequest } = getCKS()
  return axios
    .post(apiDangNhap, {
      email,
      password,
      cksRequest,
      timeRequest
    })
    .then((res) => {
      //// console.log(res.data)
      if (res.data.statusCode == 200) {
        localStorage.setItem('user_id', res.data.data.id)

        if (res.data.data.access_token) {
          localStorage.setItem('access_token', res.data.data.access_token)

          // localStorage.setItem('user', JSON.stringify(res.data))
        }

        return res.data
      } else {
        return res.data
      }
    })
}

//dang xuat
const logout = () => {
  localStorage.clear()
}
export const downloadContact = async (id) => {
  return axiosInstance.get(apiDownloadContact + id + '.vcf').then((res) => {
    return res.data
  })
}
export const getLinkProfile = async (id) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .get(
      apiUserLink + '/?user_id=' + id + '&cksRequest=' + cksRequest + '&timeRequest=' + timeRequest
    )
    .then((res) => {
      return res.data
    })
}
export const getBieuTuongProfile = async (id) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .get(
      apiBieuTuong + '?user_id=' + id + '&cksRequest=' + cksRequest + '&timeRequest=' + timeRequest
    )
    .then((res) => {
      return res.data
    })
}
export const getDanhThiepProfile = async (id) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .get(
      apiDanhThiep + '?user_id=' + id + '&cksRequest=' + cksRequest + '&timeRequest=' + timeRequest
    )
    .then((res) => {
      return res.data
    })
}
export const postSearchProfile = async (id) => {
  const { cksRequest, timeRequest } = getCKS()
  return axios
    .get(apiSearchUser + id + '?cksRequest=' + cksRequest + '&timeRequest=' + timeRequest)
    .then((res) => {
      return res
      // if (res.data.statusCode == 200) {
      //   localStorage.setItem('url_profile', res.data.data.url_profile)
      //   return res
      // } else if (res.data.statusCode ==0) {
      //   localStorage.setItem('keyDangKy', id)
      //   this.$router.push('/dangky')
      //   return res
      // }else{
      //   retu rn 'Hệ thống đang bảo trì, vui lòng thử lại sau'
      // }
    })
}

// update profile
export const postUpdateProfie = (
  id,
  first_name,
  last_name,
  phone,
  describe,
  address,
  url_profile,
  company,
  position
) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .put(apiUpdateProfile, {
      id,
      first_name,
      last_name,
      phone,
      describe,
      address,
      url_profile,
      position,
      company,
      cksRequest,
      timeRequest
    })

    .then((res) => {
      return res.data
    })
}
//them BIEU TUONG
export const postThemLienKet = (user_id, image_key, url, status, name) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .post(apiThemLienKet, { user_id, image_key, url, status, name, cksRequest, timeRequest })
    .then((res) => {
      return res.data
    })
}
//sua BIEU TUONG
export const postUpdateBieuTuongMXH = (id, user_id, image_key, url, status, name) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .put(apiUpdateBieuTuongMXH, {
      id,
      user_id,
      image_key,
      url,
      status,
      name,
      cksRequest,
      timeRequest
    })
    .then((res) => {
      return res.data
    })
}
//xoa bieu tuong
export const deleteBieuTuongMXH = async (id) => {
  const user_id = localStorage.getItem('user_id')
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .delete(
      apiXoaBieuTuongMXG +
        id +
        '?/user_id=' +
        user_id +
        '&cksRequest=' +
        cksRequest +
        '&timeRequest=' +
        timeRequest
    )
    .then((res) => {
      return res.data
    })
}
// LIÊN KẾT
export const postAddLienKet = (user_id, name, url, status) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .post(apiUserLink, { user_id, name, url, status, cksRequest, timeRequest })
    .then((res) => {
      return res.data
    })
}
export const postUpdateUrl = (id, user_id, name, url, status) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .put(apiUserLink, { id, user_id, name, url, status, cksRequest, timeRequest })
    .then((res) => {
      return res.data
    })
}
export const postDeleUrl = async (id) => {
  const { cksRequest, timeRequest } = getCKS()
  const user_id = localStorage.getItem('user_id')
  return axiosInstance
    .delete(
      apiUserLink +
        '/' +
        id +
        '?/user_id=' +
        user_id +
        '&cksRequest=' +
        cksRequest +
        '&timeRequest=' +
        timeRequest
    )
    .then((res) => {
      return res.data
    })
}
export const postAddDanhThiep = (
  user_id,
  business_card_name,
  first_name,
  last_name,
  phone,
  email
) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .post(apiDanhThiep, {
      user_id,
      business_card_name,
      first_name,
      last_name,
      phone,
      email,
      cksRequest,
      timeRequest
    })
    .then((res) => {
      return res.data
    })
}
export const putUpdateDanhThiep = (
  id,
  user_id,
  business_card_name,
  first_name,
  last_name,
  phone,
  email
) => {
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .put(apiDanhThiep, {
      id,
      user_id,
      business_card_name,
      first_name,
      last_name,
      phone,
      email,
      cksRequest,
      timeRequest
    })
    .then((res) => {
      return res.data
    })
}
export const postDeleDanhThiep = async (id) => {
  const user_id = localStorage.getItem('user_id')
  const { cksRequest, timeRequest } = getCKS()
  return axiosInstance
    .delete(
      apiDanhThiep +
        '/' +
        id +
        '?/user_id=' +
        user_id +
        '&cksRequest=' +
        cksRequest +
        '&timeRequest=' +
        timeRequest
    )
    .then((res) => {
      return res.data
    })
}

export default {
  logout
}
