import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import BarChart from '../views/BarChart.vue'
=======
import HomeView from '../views/BarChart.vue'
>>>>>>> main

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BarChart
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PieChart.vue')
    }
  ]
})

export default router
