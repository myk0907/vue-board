<!-- MainPage.vue -->
<template>
  <div>
    <!-- 메인 바디 -->
    <div class="waves-container">
      <BubbleComponent/>
      <WaveComponent />
    </div>
    <!-- 메인 바디 끝 -->

    <!--메인 콘텐츠-->
    <div class="contents main-container">
      <div class="group_row char-img" style="margin-right: 50px">
        <img src="../assets/img/my_pic_hand.png" style="width: 250px">
      </div>
      <div class="group_row main-contents">
        안녕안녕녕녕녕하세요오오오오<br>
      
      </div>
    </div>
    <!--메인 콘텐츠 끝-->
  </div>
</template>


<script>
// import { ref, onMounted, onBeforeUnmount } from 'vue';
import { onMounted } from 'vue';
import WaveComponent from "./componentsItems/WavesComponent.vue"
import BubbleComponent from "./componentsItems/BubbleComponent.vue"

export default {
  setup() {
    onMounted(() => {
      move();
    }); 

    // 이미지 이동 함수
    function move() {
      setTimeout(function () {
        document.querySelector(".char-img").classList.add("left-to-rignt");
        // document.querySelector(".waves-container").classList.add("bottom-to-top");
      }, 50);
    }
    
    return {
      move,
    }
  },
  components: {
    WaveComponent,
    BubbleComponent
  }

};
</script>

<style>
.image-container {
  width: 500px;
  height: 500px;
  background: #55efc4;
}

.main-container {
  position: absolute; 
  height: 500px; 
  width: 1280px; 
  background-color: transparent;
  top: 300px;
}

.main-contents {
  position: absolute;
  left: 700px;
  z-index: 2;
}

.char-img {
  position: absolute;
  left: -500px;
}

.waves-container {
  
}

.left-to-rignt {
  transform: translate(800px, 0px);
  transition-property: all;
  transition-duration: 2s;
  /* transition-delay: 1s; */
}

.bottom-to-top {
  transform: translate(0px, -700px);
  transition-property: all;
  transition-duration: 2s;
}

</style>