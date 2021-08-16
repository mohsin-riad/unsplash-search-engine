import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import Title from '../components/Title.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Title',
        component: Title,
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
