import Home from './components/Home/Home.vue';
import Login from './components/Login/Login.vue';
import Profile from './components/Profile/Profile.vue';
import Instructors from './components/Instructors/Instructors.vue';
import NewInstructor from './components/Instructors/NewInstructor.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/login', component: Login},
    { path: '/profile', component: Profile, meta: { requiresAuth: true }},
    { path: '/instructors', component: Instructors, meta: { requiresAuth: true }},
    { path: '/instructors/new', component: NewInstructor, meta: { requiresAuth: true, scope: 'admin' }}
];