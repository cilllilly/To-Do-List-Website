import {createRouter,createWebHistory} from 'vue-router'
import About from "../views/About.vue"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import SignUp from "../views/SignUp.vue"

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path:'/login',
        name:'Login',
        component: Login
    },
    {
        path:'/signup',
        name:'SignUp',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router