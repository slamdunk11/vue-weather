import Vue from "vue";
import VueRouter from "vue-router";
import { Login, Signup, Detail, Home } from "../views/index";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/signup",
            component: Signup,
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/detail",
            component: Detail,
        },
    ],
});