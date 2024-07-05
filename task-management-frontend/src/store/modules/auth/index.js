import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const auth = {
  namespaced: true,
  state() {
    return { user: {}, token: '', status: '' }
  },
  actions,
  mutations,
  getters
}

export default auth
