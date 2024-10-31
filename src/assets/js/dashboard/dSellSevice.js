import { hostLive } from '@/assets/js/common'
import axiosInstance from '../baseAxios'
import { getCKS } from './../listService'

const src = 'sells'
export const getListSell = (param) => {
  const { cksRequest, timeRequest } = getCKS()
  param['cksRequest'] = cksRequest
  param['timeRequest'] = timeRequest
  return axiosInstance.get(hostLive + src, { params: param }).then((res) => {
    //// console.log(res.data.data)
    if (res.data.data) {
      return res.data
    }
  })
}

export const deleteSell = async (id) => {
  const { cksRequest, timeRequest } = getCKS()
  const user = JSON.parse(localStorage.getItem('aduser'))
  //// console.log(JSON.stringify(user['id']))
  if (user.email != 'nguyennam.kkb@gmail.com') {
    return null
  }
  return axiosInstance
    .delete(hostLive + src + '/' + id + '?cksRequest=' + cksRequest + '&timeRequest=' + timeRequest)
    .then((res) => {
      return res.data
    })
}

export const createSell = async (payload) => {
  const { cksRequest, timeRequest } = getCKS()
  payload['cksRequest'] = cksRequest
  payload['timeRequest'] = timeRequest
  const res = await axiosInstance.post(hostLive + src, payload)
  return res.data
}
