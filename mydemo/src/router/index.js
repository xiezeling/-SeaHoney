import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Search from '@/view/Search'
import Cart from '@/view/Cart'
import My from '@/view/My'
import Fen from '@/view/Fen'
import Login from '@/view/Login'

Vue.use(Router)
let router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 300}
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/search/:searchVal',
      name: 'Search',
      component: Search
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/fen',
      name: 'Fen',
      component: Fen
    },
    {
      path: '/login',
      name: 'Login',
      query: {
        loginDoCallback: ''
      },
      component: Login
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (window.localStorage.getItem('userInfo')) {
      console.log(to)
      next()
    } else {
      next({
        path: '/login',
        query: {
          loginDoCallback: to.path
        }
      })
    }
  } else {
    next()
  }
})
export default router
