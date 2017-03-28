<template>
    <div class="col-sm-6 col-sm-offset-3">
    <form>
        <div class="form-group">
            <label for="first_name" class="">First Name</label>
            <input type="text" class="form-control" placeholder="First Name" name="first_name" v-model="instructor.first_name" required>
        </div>
        <div class="form-group">
            <label for="last_name" class="">Last Name</label>
            <input type="text" class="form-control" placeholder="Last Name" name="last_name" v-model="instructor.last_name" required>
        </div>
        <div class="form-group">
            <label for="email" class="">Email</label>
            <input type="text" class="form-control" placeholder="Email Address" name="email" v-model="instructor.email" ngModel required>
        </div>
        <div class="form-group">
            <label for="company" class="">Company</label>
            <input type="text" class="form-control" placeholder="Company" name="company" v-model="instructor.company" required>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="onSubmit()">Submit</button>
        <router-link tag="button" class="btn btn-primary" to="/instructors">
            Cancel
        </router-link>
    </form>
    <div class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</div>
    </div>
</template>

<script>
    import { API_URL } from '../../constants/config.js';

    export default {
        data() {
            return {
                errorMessage: '',
                instructor: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    company: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$http.post(`${API_URL}/instructors`, {
                    headers: {
                        'Authorization': `Bearer ${this.$store.getters.user.token}`                
                    }
                }, this.instructor)
                .then( res => res.json(), error => error.json())
                .then(data => {                    
                    if(data.error) {
                        this.errorMessage = data.message;
                    }
                    else {
                        this.instructors = data;
                        this.$router.push('/instructors');
                    }
                });
            }
        }
    }
</script>