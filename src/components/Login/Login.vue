<template>
<div class="col-sm-6 col-sm-offset-3">
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" :class="{active: activeTab === 'login'}" @click="switchTab('login')"><a href="javascript:void(0);">Login</a></li>
    <li role="presentation" :class="{active: activeTab === 'signup'}" @click="switchTab('signup')"><a href="javascript:void(0);">Signup</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane" id="login" :class="{active: activeTab === 'login'}">
      <form>
        <div class="form-group">
          <label for="user">Username/Email</label>
          <input type="text" class="form-control" placeholder="Enter your email" name="user" v-model="login.user" required>
        </div>
        <div class="form-group">
          <label for="username" class="">Password</label>
          <input type="password" class="form-control" placeholder="Enter your password" name="password" v-model="login.password" required>
        </div>
        <button type="submit" @click.prevent="onLoginClicked()" class="btn btn-primary">Submit</button>
      </form>
      <div class="alert alert-danger" v-if="login.errorMessage">{{login.errorMessage}}</div>
    </div>
    <div role="tabpanel" class="tab-pane" id="signup" :class="{active: activeTab === 'signup'}">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" placeholder="Enter your username" name="username" v-model="signup.username" required>
        </div>
        <div class="form-group">
          <label for="username">Email</label>
          <input type="text" class="form-control" placeholder="Enter your email" name="email" v-model="signup.email" required>
        </div>
        <div class="form-group">
          <label for="username" class="">Password</label>
          <input type="password" class="form-control" placeholder="Enter your password" name="password" v-model="signup.password" required>
        </div>
        <button type="submit" @click.prevent="onSignUpClicked()" class="btn btn-primary">Submit</button>
      </form>
      <div class="alert alert-danger" v-if="signup.errorMessage">{{ signup.errorMessage }}</div>    
    </div>
  </div>
</div>

</template>

<script>
  import { API_URL } from '../../constants/config.js';

  export default {
    data() {
      return {        
        activeTab: 'login',
        login: {
          user: '',
          password: '',
          errorMessage: ''
        },
        signup: {
          username: '',
          email: '',
          password: '',
          errorMessage: ''
        }
      }
    },
    methods: {
      switchTab(tab) {
        this.activeTab = tab;        
      },
      onLoginClicked() {        
        this.$http.post(`${API_URL}/users/authenticate`, {
          user: this.login.user,
          password: this.login.password
        })
        .then( res => res.json(), error => error.json())
        .then( data => {            
            if(data.error) {
              this.login.errorMessage = data.message;
            }
            else {
              this.$store.dispatch('finishAuthentication', data.token);
              //redirect user to home/profile page
              this.$router.push('/');
            }
        })
      },
      onSignUpClicked() {                
        this.$http.post(`${API_URL}/users`, {              
          username: this.signup.username,
          email: this.signup.email,
          password: this.signup.password
        })
        .then( res => res.json(), error => error.json() )
        .then( data => {            
            if(data.error) {
              this.signup.errorMessage = data.message;
            }
            else {
              this.$store.dispatch('finishAuthentication', data.token);
              //redirect user to home/profile page
              this.$router.push('/');
            }
        });
        
      }
    }
  }
</script>

<style>
  .tab-content {
    margin: 20px 0;
  }
</style>