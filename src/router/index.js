import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueRouter)
Vue.use(VueYoutube)

Vue.config.productionTip = false


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
  ,
  {
    path: '/Entrada4',
    name: 'Entrada4',
    component: () => import("@/views/Entrada4.vue"),
  }
  ,
  {
    path: '/Entrada5',
    name: 'Entrada5',
    component: () => import("@/views/Entrada5.vue"),
  }
  ,
  {
    path: '/Entrada6',
    name: 'Entrada6',
    component: () => import("@/views/Entrada6.vue"),
  }
  ,
  {
    path: '/Videos',
    name: 'Videos',
    component: () => import("@/views/Videos.vue"),
  }
  ,
  {
    path: '/Fotosraid',
    name: 'Fotosraid',
    component: () => import("@/views/Fotosraid.vue"),
  }
  ,
  {
    path: '/Uniraid',
    name: 'Uniraid',
    component: () => import("@/views/Uniraid.vue"),
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
