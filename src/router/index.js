import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomePage.vue'
import ThemLienKetVue from '@/views/Profile/UpdateThongTin/ThemLienKet.vue'
import UpdateLienKietVue from '@/views/Profile/UpdateThongTin/UpdateLienKiet.vue'
import ThemUrlVue from '@/views/Profile/LinkUrlProfile/ThemUrl.vue'
import MainChIaSeLienKetVue from '@/views/Profile/LinkUrlProfile/MainChIaSeLienKet.vue'
import MainBieuTuongMXHVue from '@/views/Profile/UpdateThongTin/MainBieuTuongMXH.vue'
import UpdateUrlVue from '@/views/Profile/LinkUrlProfile/UpdateUrl.vue'
import MainDanhThiep from '@/views/Profile/DanhThiep/MainDanhThiep.vue'
import ThemDanhThiep from '@/views/Profile/DanhThiep/ThemDanhThiep.vue'
import UpdateDanhThiep from '@/views/Profile/DanhThiep/UpdateDanhThiep.vue'
import QRViewProfile from '@/views/home/QRViewProfile.vue'
import MainProfile from '../views/Profile/MainProfile.vue'
import QRView from '@/views/Profile/QRView.vue'
import MainGioiThieu from '@/views/GioiThieu/MainGioiThieu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gioithieu',
      component: MainGioiThieu
    },
    {
      path: '/:id',
      name: 'home',
      component: HomeView
    },
    {
      path: '/qr',
      name: 'qrview',
      component: QRViewProfile
    },
    {
      path: '/trangcanhan/chiase',
      name: 'qrviewsetup',
      component: QRView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dangky',
      name: 'dangky',
      component: () => import('../views/setting/DangKy.vue')
    },
    {
      path: '/dangnhap',
      name: 'dangnhap',
      component: () => import('../views/setting/DangNhap.vue')
    },
    {
      path: '/trangcanhan',
      name: 'profile',
      component: MainProfile
    },
    // {
    //   path: '/trangcanhan/:id',
    //   name: 'profile',
    //   component: () => import('../views/Profile/MainProfile.vue')
    // },
    {
      path: '/doimatkhau',
      name: 'doimatkhau',
      component: () => import('../views/setting/QuenDoiMatKhau.vue')
    },
    {
      path: '/quenmatkhau',
      name: 'quenmatkhau',
      component: () => import('../views/setting/QuenDoiMatKhau.vue')
    },
    {
      path: '/catdat/capnhathoso',
      name: 'capnhathoso',
      component: () => import('../views/Profile/UpdateThongTin/ThongTinHoSo.vue')
    },
    {
      path: '/bieutuong',
      name: 'bieutuong',
      component: MainBieuTuongMXHVue
    },
    {
      path: '/bieutuong/thembieutuong',
      name: 'thembieutuong',
      component: ThemLienKetVue
    },
    {
      path: '/bieutuong/suabieutuong',
      name: 'suabieutuong',
      component: UpdateLienKietVue
    },
    {
      path: '/lienket',
      name: 'lienket',
      component: MainChIaSeLienKetVue
    },
    {
      path: '/lienket/themlienket',
      name: 'themlienket',
      component: ThemUrlVue
    },

    {
      path: '/lienket/sualienket',
      name: 'updateurl',
      component: UpdateUrlVue
    },
    {
      path: '/danhthiep',
      name: 'danhthiep',
      component: MainDanhThiep
    },
    {
      path: '/danhthiep/themdanhthiep',
      name: 'themdanhthiep',
      component: ThemDanhThiep
    },
    {
      path: '/danhthiep/suadanhthiep',
      name: 'suadanhthiep',
      component: UpdateDanhThiep
    },
    {
      path: '/catdat/hosocuatoi',
      name: 'hosocuatoi',
      component: () => import('../views/setting/HoSoCuaToi.vue')
    },

    {
      path: '/catdat/chiaselienket',
      name: 'chiaselienket',
      component: () => import('../views/setting/userLink/create_user_link.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test/TestAlert.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/DMain.vue'),
      children: [
        {
          path: 'index',
          name: 'd-index',
          component: () => import('../views/dashboard/DIndex.vue')
        },
        {
          path: 'user',
          name: 'd-user',
          component: () => import('../views/dashboard/DUser.vue')
        },
        {
          path: 'login',
          name: 'd-login',
          component: () => import('../views/dashboard/DLogin.vue')
        },
        {
          path: 'image',
          name: 'd-image',
          component: () => import('../views/dashboard/DImage.vue')
        },
        {
          path: 'sell',
          name: 'd-sell',
          component: () => import('../views/dashboard/DSell.vue')
        }

        // other nested routes
      ]
    }
  ]
})

export default router
