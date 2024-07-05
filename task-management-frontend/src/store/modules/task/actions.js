import axios from 'axios'
export default {
  getAllTasks({ commit }, obj) {
    return new Promise((resolve, reject) => {
      axios
        .get('http://localhost:5000/task', {
          headers: {
            Authorization: 'Bearer ' + obj.token
          },
          user: obj.user
        })
        .then((res) => {
          const tasks = res.data
          commit('initializeTasks', tasks)
          resolve(res)
        })
        .catch((err) => {
          console.log(err + 'Adnan')
          reject(err)
        })
    })
  },
  createTask({ commit }, obj) {
    return new Promise((resolve, reject) => {
      axios({
        url: 'http://localhost:5000/task',
        data: obj.task,
        headers: {
          Authorization: 'Bearer ' + obj.token
        },
        method: 'POST'
      })
        .then((res) => {
          const task = res.data
          commit('addTask', task)
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  deleteTask({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete('http://localhost:5000/task/' + id)
        .then((res) => {
          commit('deleteTasks', res.data._id)
          resolve(res)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  }
}
