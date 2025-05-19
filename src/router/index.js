import { createRouter, createWebHistory } from 'vue-router'
import CalculoDeCalificacionesView from '../views/CalculoDeCalificacionesView.vue'
import FormularioDeRegistroView from '../views/FormularioDeRegistroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Redirigir a página calculo-de-calificaciones
    {
       path: '/',
       redirect: '/calculo-de-calificaciones'
    },
    {
      path: '/calculo-de-calificaciones',
      name: 'calculo-de-calificaciones',
      component: CalculoDeCalificacionesView,
    },
    {
      path: '/formulario-de-registro',
      name: 'formulario-de-registro',
      component: FormularioDeRegistroView,
    },
  ],
})

export default router
