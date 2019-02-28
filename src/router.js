import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top";
import Result from "./views/Result";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "top",
        component: Top
    },
    {
        path: "/result",
        name: "result",
        component: Result
    }
];

export default new VueRouter({
    routes: routes
});