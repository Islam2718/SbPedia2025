<template>
  <div class="container-xxl" v-if="showLoginForm">
      <div class="authentication-wrapper authentication-basic container-p-y py-5">
        <div class="authentication-inner" style="max-width: 550px; margin: 0 auto;">
          <!-- login -->
          <div class="card mt-5">
            <div class="card-body py-5 my-4">
              <!-- Logo -->
              <div class="app-brand justify-content-center">
                <a href="/" class="app-brand-link gap-2">
                  <span class="app-brand-text demo text-body fw-bold text-uppercase mb-3">
                    AAA Trade International
                  </span>
                </a>
              </div>
              <!-- /Logo -->
              <h4 class="mb-5 text-center">Admin Panel Login 👋</h4>
              <form id="formAuthentication" class="mb-3" @submit.prevent="onLogin">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" name="email-username"  v-model="loginForm.email" placeholder="Enter Email !" >
                </div>
                <div class="mb-3 form-password-toggle">
                  <label for="email" class="form-label">Password</label>
                  <div class="input-group input-group-merge">
                    <input type="password" id="password" class="form-control" name="password"  v-model="loginForm.password" placeholder="Password !" aria-describedby="password">
                    <!-- <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span> -->
                  </div>
                </div>
                <div class="mb-3">
                  <button class="mt-3 btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>
            </div>
          </div>
          <!-- /Register -->
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import axios from '../../node_modules/axios/index';
  const store = useStore();
  const showLoginForm = ref(true);

  const loginForm = ref({
    email: '',
    password: ''
  });

  const onLogin = async () => {
    try {
      const response = await axios.post('https://pos-api.phicsart.com/api/login', loginForm.value);
      if(response.status === 200){
        // set token into localstorage and cookies
        localStorage.setItem('token', response.data.token); 
        store.commit('auth/SET_TOKEN', response.data.token);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
</script>