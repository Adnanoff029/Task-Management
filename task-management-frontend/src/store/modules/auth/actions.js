import axios from 'axios'

export default {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: 'http://localhost:5000/auth/signin', data: user, method: 'POST' })
        .then((resp) => {
          const token = resp.data.token
          const user = resp.data.user
          // Add the following line:
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch((err) => {
          commit('auth_error')
          commit('userToken', '')
          reject(err)
        })
    })
  },
  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: 'http://localhost:5000/auth/signup', data: user, method: 'POST' })
        .then((resp) => {
          const token = resp.data.userToken
          const user = resp.data.user
          // Add the following line:
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch((err) => {
          commit('auth_error', err)
          reject(err)
        })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}
