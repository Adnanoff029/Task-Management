export default {
  addTask(state, task) {
    state.tasks = [...state.tasks, task]
  },
  initializeTasks(state, tasks) {
    state.tasks = tasks
  },
  deleteTasks(state, id) {
    state.tasks = state.tasks.filter((task) => task._id !== id)
  }
}
