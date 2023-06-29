import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NovaEntradaView from '../views/NovaEntradaView.vue'
import MarcasView from '../views/MarcasView.vue'
import FormMarcaView from '../views/FormMarcaView.vue'
import ModelosView from '../views/ModelosView.vue'
import CondutoresView from '../views/CondutoresView.vue'
import VeiculosView from '../views/VeiculosView.vue'

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
    path: '/marcas/nova',
    name: 'novaMarca',
    component: FormMarcaView
  },
  {
    path: '/marcas/edit/:id',
    name: 'editMarca',
    component: FormMarcaView
  },
  {
    path: '/modelos',
    name: 'modelos',
    component: ModelosView
  },
  {
    path: '/condutores',
    name: 'condutores',
    component: CondutoresView
  },
  {
    path: '/veiculos',
    name: 'veiculos',
    component: VeiculosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
