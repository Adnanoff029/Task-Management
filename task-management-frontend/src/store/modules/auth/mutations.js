const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, token, user) {
    state.status = 'success'
    state.token = token
    state.user = user
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout(state) {
    state.token = ''
    state.user = {}
    state.status = ''
  }
}

export default mutations