import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth.module.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authModule
    }
});