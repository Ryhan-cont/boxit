import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/pannel/pannel.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('../pages/dashboard/index.vue'),
        meta: {pageTitle: 'Dashboard',}
      },
    ],
  },
  {
    path: '/',
    component: () => import('../layouts/simple/Simple.vue'),
    children: [
      
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
