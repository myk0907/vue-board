<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <!-- 소개 -->
      <ProjectJejuMap />
    </div>
  </div>
</template>

<script>
import ProjectJejuMap from "../ProjectJejuMap.vue"

export default {
  components:{
    ProjectJejuMap,
  },
  mounted() {
    document.querySelector('.git_button').style.display = 'none'
  }
};
</script>
