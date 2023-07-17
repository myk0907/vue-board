<!-- PageHeader.vue -->
<template>
  <header>
    <div id="nav">
      <router-link to="/" @click="pageHeaderClick($event)" id="page_home" style="text-decoration-line: none;">Main</router-link>  |
      <router-link to="/portfolio" @click="pageHeaderClick($event)" id="portfolio" style="text-decoration-line: none;">Portfolio</router-link>  |
      <router-link to="/project" @click="pageHeaderClick($event)" id="page_project" style="text-decoration-line: none;">Project</router-link>  |
      <!-- <router-link to="/board/list" @click="pageHeaderClick($event)" id="page_board" style="text-decoration-line: none;">게시판</router-link> -->
    </div>
  </header>
  <hr/>
</template>

<script>
export default {
  methods: {
    pageHeaderClick(e) {
      const header_about_el = document.getElementById('page_project');
      var click_menu = e.target.id;
      
      if(click_menu == "page_home"){
        header_about_el.classList.remove('router-link-exact-active');
      } else if(click_menu == "page_board"){
        header_about_el.classList.remove('router-link-exact-active');
      }
    }
  }
}
</script>

<style scoped>
#nav {
  text-align: right;
  width: 1280px;
  margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
  z-index: 999;
}
</style>