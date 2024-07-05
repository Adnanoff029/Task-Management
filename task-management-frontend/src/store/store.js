import { createStore } from 'vuex'
import auth from './modules/auth'
import task from './modules/task'
const store = createStore({
  modules: {
    auth,
    task
  }
})

export default store
