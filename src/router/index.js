import { createRouter, createWebHistory } from 'vue-router'
import PortfolioMain from '@/views/PortfolioMain.vue'
import BoardList from '@/views/board/BoardList.vue'
import ProjectAutoML from '@/views/projectIntro/ProjectAutoML.vue'
import ProjectJejuMap from '@/views/projectIntro/ProjectJejuMap.vue'
import ProjectShop from '@/views/projectIntro/ProjectShop.vue'
import ProjectRShiny from '@/views/projectIntro/ProjectRShiny.vue'

const routes = [
  // 메인페이지
  {
    path: '/',
    name: 'PortfolioMain',
    component: PortfolioMain
  },
  // 프로젝트 목록
  {
    path: '/project/automl',
    name: 'ProjectAutoML',
    component: ProjectAutoML
  },
  {
    path: '/project/jeju_map',
    name: 'ProjectJejuMap',
    component: ProjectJejuMap
  },
  {
    path: '/project/shop',
    name: 'ProjectShop',
    component: ProjectShop
  },
  {
    path: '/project/sealab',
    name: 'ProjectRShiny',
    component: ProjectRShiny
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