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

    SET_USERNAME: (state, username) => {
      state.username = username
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        loginByUsername({ username, password }).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.access_token)
          setToken(response.data.access_token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          if (response.code !== 0) {
            return reject('error')
          }

          const data = response.data
          commit('SET_USERNAME', data.username)
          resolve(response)
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
        commit('SET_USERNAME', '')
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
