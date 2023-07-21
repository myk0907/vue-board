import { createRouter, createWebHistory } from 'vue-router'
import PortfolioMain from '@/views/PortfolioMain.vue'
import MainPage from '@/views/MainPage.vue'
import MainPage2 from '@/views/MainPage2.vue'
import BoardList from '@/views/board/BoardList.vue'
import ProjectAbout from '@/views/ProjectAbout.vue'

const routes = [
  // 메인페이지
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/2',
    name: 'MainPage2',
    component: MainPage2
  },
  // 포트폴리오 메인페이지
  {
    path: '/portfolio',
    name: 'PortfolioMain',
    component: PortfolioMain
  },
  // 프로젝트 목록
  {
    path: '/project',
    name: 'ProjectAbout',
    component: ProjectAbout
  },
  // 세번째 메뉴?
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router