<template>
    <div>
        <h1>Profile</h1>

        <div class="panel panel-default">
        <div class="panel-body">
            <div class="col-sm-3">
            <img :src="profile.gravatar" alt="Gravatar">
            </div>
            <div class="col-sm-9">
            <h2>{{ profile.username }}</h2>
            <hr>
            <p><i class="glyphicon glyphicon-envelope"></i> {{ profile.email }}</p>
            <h4>Payload</h4>
            <pre>{{ payload }}</pre>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import jwtDecode from 'jwt-decode';

    export default {
        data() {
            return {
                profile: {
                    username: '',
                    email: '',
                    gravatar: ''
                },
                payload: {}
            }
        },
        created() {
            var token = this.$store.getters.user.token;
            var payload = jwtDecode(token);
            this.profile = {
                username: payload.username,
                email: payload.email,
                gravatar: `${payload.gravatar}?s=200`
            };
            this.payload = payload;
        }
    }
</script>