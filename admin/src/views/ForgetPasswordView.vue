<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
      <h1>Forget page</h1>
      <router-link to="/">Login</router-link>
      <router-link to="/registration">Registration</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import {Vue } from 'vue-class-component';  

  export default class ForgetPasswordView extends Vue {}
  </script>