<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <!-- 소개 -->
      <ProjectShop />
    </div>
  </div>
</template>

<script>
import ProjectShop from "../ProjectShop.vue"

export default {
  components:{
    ProjectShop,
  },
  mounted() {
    // document.querySelector('#git_button_shop').style.display = 'none'
  }
};
</script>
