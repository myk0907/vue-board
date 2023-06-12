<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <!-- 소개 -->
      <ProjectAutoML />
    </div>
  </div>
</template>

<script>
import ProjectAutoML from "../ProjectAutoML.vue"

export default {
  components:{
    ProjectAutoML,
  }
};
</script>