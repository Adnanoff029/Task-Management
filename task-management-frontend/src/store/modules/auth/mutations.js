export default {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, changes) {
    // console.log(changes)
    state.status = 'success'
    state.user = changes.user
    state.token = changes.token
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
