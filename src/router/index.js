import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import Search from '../components/Search.vue'
import Pagination from '../components/Pagination.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Search',
        component: Search,
        children: [
          {
            path: '/',
            name: 'Pagination',
            component: Pagination,
          },
        ]
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
