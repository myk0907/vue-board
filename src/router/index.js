import { createRouter, createWebHistory } from 'vue-router'
import MainPageSimple from '@/views/MainPageSimple.vue'
import MainPageWave from '@/views/MainPageWave.vue'
import ProjectAbout from '@/views/ProjectAbout.vue'

const routes = [
  // 메인페이지
  {
    path: '/',
    name: 'MainPageSimple',
    component: MainPageSimple
  },
  {
    path: '/wave',
    name: 'MainPage',
    component: MainPageWave
  },
  // 프로젝트 목록
  {
    path: '/project',
    name: 'ProjectAbout',
    component: ProjectAbout
  },
  // 세번째 메뉴?
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router