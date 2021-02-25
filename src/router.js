import { createWebHistory, createRouter } from "vue-router";
import mainPage from "@/components/mainPage.vue";

const routes = [

    {
        path: "/",
        name: "mainPage",
        component: mainPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;