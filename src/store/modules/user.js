import { loginByUsername, logout, getUserInfo } from '@/api/rights'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    username: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },

    SET_USER_INFO: (state, data) => {
      state.userid = data._id
      state.username = data.username
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        loginByUsername({ username, password }).then(res => {
          if (res.code !== 0 || !res.data) return reject(res)

          commit('SET_TOKEN', res.data.access_token)
          setToken(res.data.access_token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          if (res.code !== 0) return reject('error')

          const data = res.data
          commit('SET_USER_INFO', data)
          resolve(res)
        }).catch(error => {
          console.error('GetUserInfo>error:', error)
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_USER_INFO', {})
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
