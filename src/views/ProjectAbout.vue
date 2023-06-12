<!-- PageAbout.vue -->
<template>
  <div class="about">
    <!-- 메뉴 -->
    <div class="menu">
      <div class="menu_item menu_item_clicked" id="btn_4" @click="openProject('4')">메뉴 1</div>
      <div class="menu_item_bar">|</div>
      <div class="menu_item" id="btn_3" @click="openProject('3')">메뉴 2</div>
      <div class="menu_item_bar">|</div>
      <div class="menu_item" id="btn_2" @click="openProject('2')">메뉴 3</div>
      <div class="menu_item_bar">|</div>
      <div class="menu_item" id="btn_1" @click="openProject('1')">메뉴 4</div>
    </div>

    <!-- 설명페이지 컴포넌트 -->
    <component :is="ProjectComponent"></component>
  </div>
</template>

<script>
import ProjectAutoML from "./projectAbout/ProjectAutoML.vue"
import ProjectJejuMap from "./projectAbout/ProjectJejuMap.vue"
import ProjectShop from "./projectAbout/ProjectShop.vue"
import ProjectRShiny from "./projectAbout/ProjectRShiny.vue"

// 전역변수
let selected_menu;

export default {
  components:{
    ProjectAutoML,
    ProjectJejuMap,
    ProjectShop,
    ProjectRShiny
  },
  data() {
    return {
      selectedProject: null,
    };
  },
  mounted() { // vue 컴포넌트가 DOM에 마운트된 후 실행되는 훅
    selected_menu = 4 // 변수 초기화
  },
  methods: {
    openProject(menu_num) {
      // 기존 클릭된 메뉴 about_menu_clicked클래스 제거
      console.log(selected_menu);
      document.querySelector('#btn_'+selected_menu).classList.remove('menu_item_clicked');
      
      // 새로 클릭된 메뉴에 about_menu_clicked클래스 추가
      selected_menu = menu_num;
      document.querySelector('#btn_'+selected_menu).classList.add('menu_item_clicked');
      
      // 컴포넌트 변경
      this.selectedProject = menu_num;
    }
  },
  computed: {
    ProjectComponent() {
      switch (this.selectedProject) {
        case '4':
          return "ProjectAutoML";
        case '3':
          return "ProjectJejuMap";
        case '2':
          return "ProjectShop";
        case '1':
          return "ProjectRShiny";
        default:
          return "ProjectAutoML";
          // return null;
      }
    },
  }
}
</script>