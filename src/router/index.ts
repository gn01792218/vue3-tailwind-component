import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('@/views/Home.vue')
  },
  {
    path: '/CheckBoxDemo',
    name: 'CheckBoxDemo',
    component:()=>import('@/views/CheckBoxDemo.vue')
  },
  {
    path: '/KnobDemo',
    name: 'KnobDemo',
    component:()=>import('@/views/KnobDemo.vue')
  },
  {
    path: '/BtnDemo',
    name: 'BtnDemo',
    component:()=>import('@/views/BtnDemo.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  // history:createWebHashHistory(import.meta.env.VITE_APP_BASE_URL as string),
  routes
})
export default router
