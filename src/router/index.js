import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

const routes = [
  { // Home
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/home')
      }
    ]
  },

  { // Login
    path: '/login',
    hidden: true,
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '',
        name: 'Login',
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
