import CryptoJS from 'crypto-js'

export function isValidName(name) {
  const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/
  return !specialCharactersRegex.test(name) && name.length < 50
}

export function isValidPhone(phone) {
  const phoneRegex = /^\d{6,11}$/
  return phoneRegex.test(phone)
}

export function isValidDescription(description) {
  return description.length < 255
}

export function isValidAddress(address) {
  return address.length < 100
}

// Hàm lấy thời gian hiện tại dưới dạng milliseconds
export const getCurrentTimeInMilliseconds = () => {
  return new Date().getTime()
}

// Hàm tính MD5 của một chuỗi
export const getMD5 = (input) => {
  return CryptoJS.MD5(input).toString()
}

export function getCKS() {
  const time = Date.now()
  const cks = getMD5(import.meta.env.VITE_SECRET_KEY_APP + time)
  return { cksRequest: cks, timeRequest: time }
}
