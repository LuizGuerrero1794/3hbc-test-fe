import Vue from 'vue'
import VueRouter from 'vue-router'
import Notas from '../views/Notas/Notas.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home'},
  { path: '/notas', name: 'Notas', component: Notas },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
