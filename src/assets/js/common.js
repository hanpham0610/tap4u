const test = false

export const domainLive = 'https://quetnhanh.vn'
export const domainTest = 'http://localhost:4459'
export const appLocal = 'http://localhost:5173'

export const domain = test ? appLocal : domainLive
export const hostLive = (test ? domainTest : domainLive) + '/ln-quetnhanh-api/'
export const api = test ? domainTest : domainLive
