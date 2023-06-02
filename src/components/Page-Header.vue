<!-- PageHeader.vue -->
<template>
  <header>
    <div id="nav">
      <router-link to="/" @click="pageHeaderClick($event)" id="page_home">Home</router-link> |
      <router-link to="/project/automl" @click="pageHeaderClick($event)" id="page_about">About</router-link> |
      <router-link to="/board/list" @click="pageHeaderClick($event)" id="page_board">게시판</router-link>
    </div>
  </header>
  <hr/>
</template>

<script>
export default {
  methods: {
    pageHeaderClick(e) {
      const header_about_el = document.getElementById('page_about');
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

</style>