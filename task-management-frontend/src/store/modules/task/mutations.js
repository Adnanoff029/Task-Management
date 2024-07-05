export default {
  addTask(state, task) {
    state.tasks = [...state.tasks, task]
  },
  intializeTasks(state, tasks) {
    state.tasks = tasks
  }
}
