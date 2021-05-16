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
  },

  { // Register
    path: '/register',
    hidden: true,
    component: Layout,
    redirect: '/register',
    children: [
      {
        path: '',
        name: 'Register',
        meta: {
          title: 'Register'
        },
        component: () => import('@/views/register')
      }
    ]
  },

  { // User
    path: '/user',
    hidden: true,
    component: Layout,
    redirect: '/profile',
    children: [
      {
        path: 'profile',
        name: 'Profile',
        meta: {
          title: 'Profile'
        },
        component: () => import('@/views/user')
      }
    ]
  },

  { // Post
    path: '/post',
    component: Layout,
    redirect: '/post/list',
    children: [
      {
        path: 'list',
        name: 'PostList',
        meta: {
          title: 'PostList'
        },
        component: () => import('@/views/post')
      },

      {
        path: ':postId',
        hidden: true,
        name: 'PostDetail',
        meta: {
          title: 'PostDetail'
        },
        component: () => import('@/views/post/detail')
      }
    ]
  }

]

export { routes }
export default new Router({
  routes
})
