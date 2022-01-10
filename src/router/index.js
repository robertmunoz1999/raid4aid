import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import("@/views/Category.vue"),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import("@/views/Detail.vue"),
  },
  {
    path: '/authors',
    name: 'Authors',
    component: () => import("@/views/Authors.vue"),
  },
  {
    path: '/Entrada1',
    name: 'Entrada1',
    component: () => import("@/views/Entrada1.vue"),
  }
  ,
  {
    path: '/Entrada2',
    name: 'Entrada2',
    component: () => import("@/views/Entrada2.vue"),
  }
  ,
  {
    path: '/Entrada3',
    name: 'Entrada3',
    component: () => import("@/views/Entrada3.vue"),
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
