<template>
    <div>
        <h1>Front End Masters Instructors</h1>

        <router-link tag="button" class="btn btn-primary" to="/instructors/new" v-if="isAuthenticated && isAdmin">
            <i class="glyphicon glyphicon-plus"></i> Add Instructor
        </router-link>

        <ul class="list-group">
            <li class="list-group-item" v-for="instructor in instructors">
                <div class="container">
                <div class="col-sm-1">
                    <img :src="getGravatar(instructor.email)" alt="Gravatar">
                </div>
                <div class="col-sm-11">
                    <h3>{{ instructor.first_name + ' ' + instructor.last_name }}</h3>
                    <p><i class="glyphicon glyphicon-envelope"></i> {{ instructor.email }}</p>
                    <p><i class="glyphicon glyphicon-briefcase"></i> {{ instructor.company }}</p>
                </div>
                </div>
            </li>
        </ul>

        <div class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</div>
    </div>
</template>

<script>
  import { API_URL } from '../../constants/config.js';
  import md5 from 'md5';

  export default {
    data() {
        return {
            instructors: [],
            errorMessage: ''
        }
    },
    methods: {
        getGravatar(email) {
            return `https://www.gravatar.com/avatar/${md5(email).toLowerCase().trim()}`;
        }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.user.isAuthenticated;
      },
      isAdmin() {
          return this.$store.getters.user.isAdmin;
      }
    },
    created() {
        this.$http.get(`${API_URL}/instructors`, {
            headers: {
                'Authorization': `Bearer ${this.$store.getters.user.token}`                
            }
        })
        .then( res => res.json(), error => error.json())
        .then(data => {            
            if(data.error) {
                this.errorMessage = data.message;
            }
            else {
                this.instructors = data;
            }
        });
    } 
  }

</script>

<style>
    ul {
        margin: 10px 0;
    }
</style>