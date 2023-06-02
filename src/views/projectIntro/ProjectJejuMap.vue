<!-- PageAbout.vue -->
<template>
  <ProjectIntroHeader/>
  <div class="project_shop">
    <h1 style="margin: 50px">This is an about page [2] </h1>
    
    <!-- 소개 -->
    <div class="contents">
      <div class="group_row box1" style="margin-right: 50px">
        <img src="../../assets/img/test_img.jpg">
      </div>
      <div class="group_row contents box1">
        가나다라마바사아자차카타파하가갸거겨고교구규그기카캬커켜코쿄쿠큐크키
      </div>
    </div>
    <!-- https://www.svgrepo.com/collection/twemoji-emojis/1  svg 이모지 사이트-->
  </div>
</template>

<script>
import ProjectIntroHeader from '@/components/Project-Header'

export default {
  name: 'ProjectShop',
  components: {
    ProjectIntroHeader
  },
  mounted() {
    const header_about_el = document.getElementById('page_about');
    header_about_el.classList.add('router-link-exact-active');
  }
}
</script>