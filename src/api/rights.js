import request from '@/utils/request'

export  function loginByUsername({ username, password }) {
    return request({
        url: '/rights/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}
export  function getUserInfo() {
    return request({
        url: '/rights/authUser',
        method: 'get'
    })
}
