import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NovaEntradaView from '../views/NovaEntradaView.vue'
import MarcasView from '../views/MarcasView.vue'
import ModelosView from '../views/ModelosView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nova-entrada',
    name: 'novaEntrada',
    component: NovaEntradaView
  },
  {
    path: '/marcas',
    name: 'marcas',
    component: MarcasView
  },
  {
    path: '/modelos',
    name: 'modelos',
    component: ModelosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
