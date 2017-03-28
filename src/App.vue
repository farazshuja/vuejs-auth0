<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="container">
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>
import AppNav from './components/Nav/Nav.vue';
import Home from './components/Home/Home.vue';

export default {
  name: 'app',
  components: {
    appNav: AppNav,
    appHome: Home
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
