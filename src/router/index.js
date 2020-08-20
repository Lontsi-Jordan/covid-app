import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Global from '../views/Global.vue'
import Country from '../views/Countries.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/global',
    name: 'Global',
    component: Global
  },
  {
    path: '/countries',
    name: 'Country',
    component: Country
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/country/detail/:code',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
