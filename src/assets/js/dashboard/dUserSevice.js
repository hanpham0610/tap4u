import { hostLive } from '@/assets/js/common'
import axiosInstance from '../baseAxios'
import { getCKS } from './../listService'

const src = 'user'
export const getListUser = (param) => {
  try {
    const { cksRequest, timeRequest } = getCKS()

    param['cksRequest'] = cksRequest
    param['timeRequest'] = timeRequest

    return axiosInstance.get(hostLive + src, { params: param }).then((res) => {
      //// console.log(res.data.data)
      if (res.data.data) {
        return res.data
      }
    })
  } catch (error) {
    // console.log(error)
  }
}

export const getTaoTaiKhoanMoi = (param) => {
  param.password = import.meta.env.VITE_PASS_CREATE_USER
  const { cksRequest, timeRequest } = getCKS()
  param['cksRequest'] = cksRequest
  param['timeRequest'] = timeRequest
  return axiosInstance.get(hostLive + src + '/autoCreateUser', { params: param }).then((res) => {
    //// console.log(res.data)
    if (res.data.data.url_profile) {
      return res.data
    }
  })
}

export const deleteUser = async (id) => {
  const user = JSON.parse(localStorage.getItem('aduser'))
  //// console.log(JSON.stringify(user['id']))
  const { cksRequest, timeRequest } = getCKS()

  if (user.email != 'nguyennam.kkb@gmail.com') {
    return null
  }
  return axiosInstance
    .delete(hostLive + src + '/' + id + '?cksRequest=' + cksRequest + '&timeRequest=' + timeRequest)
    .then((res) => {
      return res.data
    })
}
