import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'

const routes = [
  {
    path: '/',  //  по этому пути отрисуется HomeView на /Films/
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('../components/ItemDetails.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory('/Films/'), //  Учитываем base path
  routes
})

export default router
