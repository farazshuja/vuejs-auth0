import AuthService from '../../services/auth.service.js';

const authService = new AuthService();
const user = authService.getUser();

//check the localStorage, if it has a token which is not expired
//initiate state with it

const state = {
    user
};

const mutations = {
    'SET_USER'(state, user) {
        state.user = user;
    }
}

const actions = {
    logout: ({commit}) => {
        commit('SET_USER', {
            token: null,
            isAdmin: false,
            isAuthenticated: false
        });
        authService.logout();
    },

    finishAuthentication: ({commit}, token) => {
        authService.finishAuthentication(token);
        commit('SET_USER', authService.getUser());
        
    }    
}

const getters = {
    user: state => {
        return state.user;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
