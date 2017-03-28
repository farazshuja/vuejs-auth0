<template>
    <section class="authapp__home">
        <div class="jumbotron">
            <h1>Welcome!</h1>
            <p>This app demonstrates how to add authentication to an Vue.js 2.x app. More specifically, it covers how to:</p>
            <ul>
                <li>Add a login/signup area which returns a <a href="https://jwt.io/introduction">JSON Web Token</a> that is saved in <code>localStorage</code></li>
                <li>Conditionally hide and show various parts of the application depending on the user's authentication state</li>
                <li>Create a profile area which displays user information from the payload of the JWT</li>
                <li>Protect client-side routes with a <code>requiresAuth</code> flag</li>
                <li>Make requests for server resources protected by JWT middleware on the server</li>
                <li>Make requests for server resources that require a specific <code>scope</code> to be present in the JWT payload</li>
            </ul>
            <p v-if="!isAuthenticated">
                <router-link class="btn btn-primary btn-lg" to="/login">Log In</router-link>                
            </p>
            <p v-else>
                <a class="btn btn-primary btn-lg" role="button" @click="onLogoutClicked()">Log Out</a>
            </p>
        </div>
    </section>
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