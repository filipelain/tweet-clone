import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      iconClass: 'fas fa-home',
      mainMenu: true
    }
  },
  {
    path: '/explore',
    name: 'Explore',
    component: HomeView,
    meta: {
      iconClass: 'fas fa-search',
      mainMenu: true
    }
  },
  {
    path: '/notification',
    name: 'Notification',
    component: HomeView,
    meta: {
      iconClass: 'fas fa-bell',
      mainMenu: true
    }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: HomeView,
    meta: {
      iconClass: 'fas fa-envelope',
      mainMenu: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: HomeView,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
