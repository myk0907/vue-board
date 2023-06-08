<!-- PageAbout.vue -->
<template>
  <div class="about">
    <!-- 메뉴 -->
    <div>
      <div class="group_row about_menu about_menu_clicked" id="btn_1" @click="openProject('1')">메뉴 1</div>
      <div class="group_row about_menu_bar">|</div>
      <div class="group_row about_menu" id="btn_2" @click="openProject('2')">메뉴 2</div>
      <div class="group_row about_menu_bar">|</div>
      <div class="group_row about_menu" id="btn_3" @click="openProject('3')">메뉴 3</div>
      <div class="group_row about_menu_bar">|</div>
      <div class="group_row about_menu" id="btn_4" @click="openProject('4')">메뉴 4</div>
    </div>

    <!-- 설명페이지 컴포넌트 -->
    <component :is="ProjectComponent" ></component>
  </div>
</template>

<script>
import ProjectAutoML from "./projectAbout/ProjectAutoML.vue"
import ProjectJejuMap from "./projectAbout/ProjectJejuMap.vue"
import ProjectShop from "./projectAbout/ProjectShop.vue"
import ProjectRShiny from "./projectAbout/ProjectRShiny.vue"

// 전역변수
let selected_menu = "1";

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
  methods: {
    openProject(menu_num) {
      // 기존 클릭된 메뉴 about_menu_clicked클래스 제거
      document.querySelector('#btn_'+selected_menu).classList.remove('about_menu_clicked');
      // 새로 클릭된 메뉴에 about_menu_clicked클래스 추가
      selected_menu= menu_num;
      document.querySelector('#btn_'+selected_menu).classList.add('about_menu_clicked');
      // 컴포넌트 변경
      this.selectedProject = menu_num;
    }
  },
  computed: {
    ProjectComponent() {
      switch (this.selectedProject) {
        case '1':
          return "ProjectAutoML";
        case '2':
          return "ProjectJejuMap";
        case '3':
          return "ProjectShop";
        case '4':
          return "ProjectRShiny";
        default:
          // return "ProjectAutoML";
          return null;
      }
    },
  },
}
</script>