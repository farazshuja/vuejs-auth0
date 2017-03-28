<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Vue.js 2.x Authentication</router-link>        
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">  
          <router-link v-if="isAuthenticated" tag="li" to="/instructors" activeClass="active"><a>Instructors</a></router-link>
          <router-link v-if="isAuthenticated" tag="li" to="/profile" activeClass="active"><a>Profile</a></router-link>
        </ul>
        <ul class="nav navbar-nav pull-right">
          <router-link to="/login" tag="li" v-if="!isAuthenticated"><a>Log In</a></router-link>
          <li><a href="javascript:void(0);" v-if="isAuthenticated" @click="onLogoutClicked()">Log out</a></li>
        </ul>      
      </div>
    </div>
  </nav>    
</template>

<script>

  export default {
    computed: {
      isAuthenticated() {
        return this.$store.getters.user.isAuthenticated;
      }
    },
    methods: {
      onLogoutClicked() {
        this.$store.dispatch('logout');
        this.$router.push('/');
      }
    }
  }
</script>