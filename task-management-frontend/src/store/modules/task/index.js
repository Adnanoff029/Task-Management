import actions from './actions'
import getters from './getters'
import mutations from './mutations'
const task = {
  namespaced: true,
  state() {
    return { tasks: [] }
  },
  getters,
  actions,
  mutations
}

export default task
