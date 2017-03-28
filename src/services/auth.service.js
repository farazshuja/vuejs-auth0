import jwtDecode from 'jwt-decode';

class AuthService {

    logout() {
        localStorage.removeItem('token');
    }

    finishAuthentication(token) {
        localStorage.setItem('token', token);
    }

    getToken() {        
        return localStorage.getItem('token');
    }

    isAdmin() {
        return jwtDecode(this.getToken()).scope === 'admin';
    }

    isAuthenticated() {  
        var token = this.getToken();
        if(!token)
            return false;

        var decoded = jwtDecode(token);
        var exp = decoded.exp * 1000;
        return exp > new Date().getTime();        
    }

    getUser() {        
        var isAuthenticated = this.isAuthenticated();
        var user = {
            token: isAuthenticated ? this.getToken() : null,
            isAdmin: isAuthenticated ? this.isAdmin() : false,
            isAuthenticated: isAuthenticated
        }
        return user;
    }
}

export default AuthService;