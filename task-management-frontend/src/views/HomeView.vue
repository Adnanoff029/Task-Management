<script setup>
import router from '@/router'
import {  ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const email = ref(null)
const password = ref(null)
// const user = computed(() => store.state.auth.user)
// const token = computed(() => store.state.auth.token)

const loginUser = async () => {
  if (!email.value || !password.value) {
    console.log('Enter email and password')
    return
  }
  const newLogin = {
    email: email.value,
    password: password.value
  }

  store
    .dispatch('auth/login', newLogin)
    .then(() => router.push('/task'))
    .catch((err) => console.log(err))
  email.value = ''
  password.value = ''
}
</script>

<template>
  <form class="mt-20" @submit.prevent="loginUser">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Login
          </p>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900"> Your email </label>
            <input
              placeholder="akad101@gmail.com"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              id="username"
              type="text"
              v-model="email"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900"> Password </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="••••••••"
              id="password"
              type="password"
              v-model="password"
            />
          </div>

          <div class="flex items-start">
            <div class="ml-3 text-sm">
              <label class="text-gray-500">
                Not a user?
                <RouterLink to="/signup" class="font-medium text-blue-600">
                  Register Here
                </RouterLink>
              </label>
            </div>
          </div>

          <button
            class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
            type="submit"
          >
            Login User
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
