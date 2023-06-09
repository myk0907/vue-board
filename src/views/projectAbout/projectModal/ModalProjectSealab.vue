<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <!-- 소개 -->
      <ProjectSealab />
    </div>
  </div>
</template>

<script>
import ProjectSealab from "../ProjectRShiny.vue"

export default {
  components:{
    ProjectSealab,
  },
  mounted() {
    document.querySelector('.git_button').style.display = 'none'
  }
};
</script>
