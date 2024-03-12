import type {RouteRecordRaw} from "vue-router";
import Loginview from "@/views/login/IndexPage.vue";
import Dashboardview from "@/views/dashboard/DashboardPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";


const routes: Array<RouteRecordRaw>=[
    {path:'/login',name:'login',component:Loginview},
    {path:'/', name:'Dashboard',component:Dashboardview}

]

const router=createRouter({
    history:createWebHashHistory(),
    strict:true,
    routes,
    scrollBehavior:()=>({left:0,top:0})
})

export default router