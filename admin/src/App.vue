<template>
  <div>
    <AuthPage v-if="!isAuthenticated"/>
    <HomePage v-else/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import AuthPage from './views/AuthPage/AuthPageView.vue';
import HomePage from './views/HomePage/HomePageView.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomePage,
    AuthPage,
  },
  setup() {
    const store = useStore(); // Use the Vuex store

    // Use computed properties for reactivity
    const isAuthenticated = computed(() => {
      return store.state.auth.token || localStorage.getItem('token');
    });
    console.log('_isAuthenticated', isAuthenticated.value);

    const userInfo = computed(() => {
      return store.state.auth.user || JSON.parse(localStorage.getItem('user') || '{}');
    });
    
    console.log('_userInfo', userInfo.value);
    
    return {
      isAuthenticated,
      userInfo,
    };
  },
});
</script>
