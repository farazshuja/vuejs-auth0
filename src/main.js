import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes.js';
import store from './store/store.js';
import AuthService from './services/auth.service.js';
const authService = new AuthService();


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {

  if(to.meta.requiresAuth) {
    if(!authService.isAuthenticated()) {
      next('/login');
    }
    else if(to.meta.scope == 'admin' && !authService.isAdmin()) {
      next('/');
    }
    else {
      next();
    }
  }
  else {
    next();
  }

});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
