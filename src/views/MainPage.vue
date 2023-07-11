<!-- MainPage.vue -->
<template>
  <div class="contents" style="height: 500px;">
      <div class="group_row mychar-img" style="margin-right: 50px">
        <img src="../assets/img/my_pic.png" style="width: 250px">
      </div>
      <!-- <div class="image-container" @click="move()"></div> -->
    </div>
</template>


<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      move();
    });

    function move() {
      setTimeout(function () {
        document.querySelector(".mychar-img").classList.add("go");
      }, 50);

    }

    return {
      move
    }
  }

};
</script>

<style>
.image-container {
  width: 500px;
  height: 500px;
  background: #55efc4;
}
.mychar-img {
  position: absolute;
  left: -700px;
}

.go {
  transform: translate(1000px, 0px);
  transition-property: all;
  transition-duration: 2s;
  transition-delay: 1s;
}
</style>