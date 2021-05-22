import request from '@/utils/request'

/* 获取 Post 列表 */
export  function getPosts() {
    return request({
        url: '/post',
        method: 'get'
    })
}

/* 获取 Post */
export  function getPost({ id }) {
    return request({
        url: `/post/${id}`,
        method: 'get'
    })
}

