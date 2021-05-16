import router from './router'
import store from "@/store";
import { getToken } from "@/utils/auth";

router.beforeEach((to, from, next) => {
    console.log('to.name:', to.name)
    const token = getToken()
    console.warn('router.beforeEach>token:', token)
    if (token) {
        if (store.getters.username) return next()

        store.dispatch('GetUserInfo').then(() => {
            next({...to, replace: true })
        })
    } else {
        // Todo: 当前页面是否需要登录
        if (to.meta && to.meta.required) return next({ name: 'Login', replace: true, query: { redirect: from.fullPath }})

        next()
    }
})