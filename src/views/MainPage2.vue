<!-- MainPage.vue -->
<template>
    <div class="page-section1" >
      <div class="wave-main-container">
        
        <div class="wave-component">
          <WaveComponent />
        </div>
        <div class="contents wave-contents">
          
          <!--메인 콘텐츠-->
          <div class="group_row char-img" style="margin-right: 50px">
            <img src="../assets/img/my_pic_hand.png" style="width: 250px;">
          </div>
          <div class="group_row main-contents">
            <p style="display:none;">안녕안녕녕녕녕하세요오오오오</p>
            <p class="header_1">
              안녕하세요. <img class="reverse" src="../assets/svg/waving-hand.svg"><br>
              주니어 Frontend개발자 김민영입니다.
            </p>
            <p style="display:none;">
              저는 
            </p>
          </div>
        </div>
        <!--메인 콘텐츠 끝-->
      </div>
      <BubbleComponent/>
    </div>
    
    <!-- 포트폴리오 -->
    <div class="page-section2" >
      <Portfolio/>
    </div>

  </template>
  
  
  <script>
  // import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { onMounted } from 'vue';
  import WaveComponent from "./componentsItems/WavesComponent.vue"
  import BubbleComponent from "./componentsItems/BubbleComponent.vue"
  import Portfolio from "./PortfolioMain.vue"
  
  export default {
    setup() {
      onMounted(() => {
        move();
      }); 
  
      // 이미지 이동 함수
      function move() {
        setTimeout(function () {
          document.querySelector(".char-img").classList.add("left-to-rignt");
          // document.querySelector(".waves-bubble-container").classList.add("bottom-to-top");
        }, 50);
      }
      
      return {
        move,
      }
    },
    components: {
      WaveComponent,
      BubbleComponent,
      Portfolio
    }
  
  };
  </script>
  
  <style scoped>
  .page-section1 {
    height:100vh;
    width:100%;
    display: flex;
  }

  .wave-main-container {
    position: relative;
    width: 100%; 
    height: 80vh; 
    align-self: flex-end;
  }
  
  .wave-contents {
    background-color: rgb(169,214,226); 
    margin:0px; 
    height: calc(100% - 120px);
  }
  
  .char-img {
    position: absolute;
    left: -500px;
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




/* .footer { height: 100px; background-color: #707070;} */
  
  </style>