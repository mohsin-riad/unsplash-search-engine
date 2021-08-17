import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import Search from '../components/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Search',
        component: Search
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
