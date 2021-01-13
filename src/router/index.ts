import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/home.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "about" */ '../dom/button.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "about" */ '../dom/message.vue')
  },
  {
    path: '/alert',
    name: 'alert',
    component: () => import(/* webpackChunkName: "about" */ '../dom/alert.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
