import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

const routes = [
  { // Home
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/home')
      }
    ]
  },

  { // Login
    path: '/login',
    name: 'Login',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '',
        meta: {
          title: 'Login'
        },
        component: () => import('@/views/login')
      }
    ]
  }

]

export { routes }
export default new Router({
  routes
})
