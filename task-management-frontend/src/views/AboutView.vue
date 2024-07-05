<script setup>
import router from '@/router'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const title = ref('')
const description = ref('')
const store = useStore()
const user = computed(() => store.state.auth.user)
const token = computed(() => store.state.auth.token)
const isLoggedIn = computed(() => store.getters['auth/isLoggedIn'])
const tasks = computed(() => store.state.task.tasks)
onMounted(() => {
  if (isLoggedIn.value) {
    const obj = {
      user: user.value,
      token: token.value
    }
    store
      .dispatch('task/getAllTasks', obj)
      .then(() => {})
      .catch((err) => console.log(err))
  }
})
console.log(tasks, tasks.value)
const handleSubmit = () => {
  if (!title.value) {
    return
  }
  const newTask = {
    title: title.value,
    description: description.value
  }
  const obj = {
    task: newTask,
    user: user.value,
    token: token.value
  }
  store
    .dispatch('task/createTask', obj)
    .then(() => {})
    .catch((err) => console.log(err))
  title.value = ''
  description.value = ''
}
</script>

<template>
  <!-- v-if="isLoggedIn" -->
  <div>
    <!-- <div class="grid grid-cols-3 gap-10 my-10" :v-for="task in tasks">
      <div class="rounded shadow-lg flex flex-col items-center" :key="task._id">
        <div class="px-6 py-4">
          <div class="font-bold text-center text-xl mb-2">{{ task.title }}</div>
          <p class="text-gray-700 text-base text-center">
            {{ task.description }}
          </p>
        </div>
        <div class="w-full flex items-center justify-between">
          <button
            class="p-2 m-2 bg-green-600 text-white font-bold w-[100px] self-end rounded-md active:bg-green-800"
          >
            Done
          </button>
          <button
            class="p-2 m-2 bg-red-600 text-white font-bold w-[100px] self-end rounded-md active:bg-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div> -->

    <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
      <h1 class="text-center w-full text-2xl text-blue-600 mb-10 font-semibold">Add a new Task</h1>
      <div class="mb-5">
        <label for="base-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >Task Title</label
        >
        <input
          type="text"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="title"
        />
      </div>

      <label for="message" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >Task Description</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
        v-model="description"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold text-lg p-1 my-5 rounded-md active:bg-blue-800"
      >
        Create Task
      </button>
    </form>
  </div>
  <!-- <div v-else class="w-full text-center font-bold text-3xl my-3">You Must Log In first. 😊</div> -->
</template>
