<!-- MainPage.vue -->
<template>
  <div :style="imageStyle" class="image-container">
    <img :src="imageUrl" alt="Image" />
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const imageUrl = '../assets/img/test_img.jpg';
    const imageStyle = ref({
      position: 'absolute',
      top: '0px',
      left: '0px',
      transition: 'transform 0.3s ease-in-out', // transition 속성 추가
    });
    const distance = 300; // 300px로 변경

    const moveImage = () => {
      imageStyle.value.transform = `translateX(${distance}px)`; // transform 속성 사용
    };

    onMounted(() => {
      moveImage();
    });

    return {
      imageUrl,
      imageStyle,
    };
  },
};
</script>

<style>
.image-container {
  will-change: transform;
}
</style>