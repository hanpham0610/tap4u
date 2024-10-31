import Vuex from 'vuex'

// Tạo một plugin Vuex để lưu trữ trạng thái vào sessionStorage
const sessionStoragePlugin = (store) => {
  // Thực hiện lưu trữ vào sessionStorage sau mỗi lần mutation
  store.subscribe((mutation, state) => {
    sessionStorage.setItem('vuex-state', JSON.stringify(state))
  })

  // Khôi phục trạng thái từ sessionStorage khi khởi động ứng dụng
  const storedState = sessionStorage.getItem('vuex-state')
  if (storedState) {
    store.replaceState(JSON.parse(storedState))
  }
}

// Tạo store Vuex mới với plugin sessionStorage
const store = new Vuex.Store({
  state: {
    infoProfile: null,
    lienKetInfo: null,
    lienKetUrl: null,
    listDanhThiep: null
  },
  mutations: {
    setInfo(state, info) {
      state.infoProfile = info
    },
    setLienKetInfo(state, info) {
      state.lienKetInfo = info
    },
    setUrlInfo(state, info) {
      state.lienKetUrl = info
    },
    setInfoDanhThiep(state, info) {
      state.listDanhThiep = info
    }
  },
  actions: {
    updateInfo({ commit }, info) {
      commit('setInfo', info)
    },
    updateLienKetInfo({ commit }, info) {
      commit('setLienKetInfo', info)
    },
    updateUrlInfo({ commit }, info) {
      commit('setUrlInfo', info)
    },
    updateDanhThiepInfo({ commit }, info) {
      commit('setInfoDanhThiep', info)
    }
  },
  // Sử dụng plugin sessionStorage
  plugins: [sessionStoragePlugin]
})

// Export store
export default store
