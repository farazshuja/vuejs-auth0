# vuejs-auth0
This app demonstrates how to add authentication to an Vue.js 2.x app. More specifically, it covers how to:

* Add a login/signup area which returns a JSON Web Token that is saved in localStorage
* Conditionally hide and show various parts of the application depending on the user's authentication state
* Create a profile area which displays user information from the payload of the JWT
* Protect client-side routes with a requiresAuth flag
* Make requests for server resources protected by JWT middleware on the server
* Make requests for server resources that require a specific scope to be present in the JWT payload

The app was created following the course **[Secure Authentication for Web Apps & APIs Using JWTs](https://frontendmasters.com/courses/secure-auth-jwt/?u=6da4e0778ee2cc3f1375d1213d3d2d68495a5ac3)** by **[FrontEnd Masters](https://frontendmasters.com/)**
