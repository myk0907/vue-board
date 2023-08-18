<!-- MainPage.vue -->
<template>
  <!-- 상단 이동 버튼 -->
    <div :class="buttonClass" class="top-down-button" @click="topDownFun" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
      <img id="button-turtle" src="../assets/svg/turtle_1.svg" style="width: 50px;">
    </div>

    <!-- 페이지1: 메인 -->
    <div class="page-section1" >
      <div class="wave-main-container">
        
        <div class="wave-component">
          <WaveComponent />
        </div>
        <div class="contents wave-contents">
          
          <!--메인 콘텐츠-->
          <div class="group_row char-img" style="margin-right: 50px">
            <img src="../assets/img/my_pic_hand.png" style="width: 250px; ">
          </div>
          <div class="group_row main-contents">
            <p style="display: none;">안녕안녕녕녕녕하세요오오오오</p>
            <p class="header_1" >
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
    
    <!-- 페이지 2: 포트폴리오 -->
    <div class="page-section2">
      <Portfolio/>
    </div>

  </template>
  
  
  <script>
  // import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { ref, onMounted } from 'vue';
  import WaveComponent from "./componentsItems/WavesComponent.vue"
  import BubbleComponent from "./componentsItems/BubbleComponent.vue"
  import Portfolio from "./PortfolioMain.vue"
  
  export default {
    setup() {
      
      // 화면 상하단 이동버튼(거북이) 마우스 오버시 거북이 흔들림
      let buttonClass = ref('');

      const handleMouseOver = () => {
        const buttonElement = document.getElementById('button-turtle').className;
        if (buttonElement === 'to-top-button') {
          buttonClass.value = 'element-shake-top';
        } else if (buttonElement === 'to-down-button') {
          buttonClass.value = 'element-shake-bottom';
        }
      };

      const handleMouseOut = () => {
        buttonClass.value = ''; // 초기 클래스로 변경
      };

      // 마우스 휠 방향 체크 함수
      let wheelDir = "down";
      const handleWheel = (event) => {
        if (event.deltaY > 0) {
          if(wheelDir != "down"){
            wheelDir = "down";
            document.getElementById("button-turtle").className = 'to-down-button';
          }
        } else if (event.deltaY < 0) {
          if(wheelDir != "up"){
            wheelDir = "up";
            document.getElementById("button-turtle").className = 'to-top-button';
          }
        }
      };

      onMounted(() => {
        move();
        // 맨 처음 화면 로딩 시 거북이 머리 아래로 돌리기
        document.getElementById("button-turtle").className = 'to-down-button';

        // 마우스 휠 방향 체크
        window.addEventListener('wheel', handleWheel);
        
        // 스크롤 맨 위/끝 체크
        window.addEventListener('scroll', () => {
          let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
          let windowHeight = window.innerHeight; // 스크린 창
          let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
          
          if(scrollLocation == 0){
            document.getElementById("button-turtle").className = 'to-down-button';
          } else if(scrollLocation + windowHeight >= fullHeight){
            document.getElementById("button-turtle").className = 'to-top-button';
          } 
        })
      }); 
  
      // 이미지 이동 함수
      function move() {
        setTimeout(function () {
          document.querySelector(".char-img").classList.add("left-to-rignt");
          // document.querySelector(".waves-bubble-container").classList.add("bottom-to-top");
        }, 50);
      }

      // 스크롤 to top-down 함수
      function topDownFun() {
        var direction = document.getElementById("button-turtle").className;
        if(direction == "to-top-button"){
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          document.getElementById("button-turtle").className = 'to-down-button'; // 거북이 아래로 돌리기
        } else {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
          document.getElementById("button-turtle").className = 'to-top-button'; // 거북이 위로 돌리기
        }
      }

      return {
        move,
        topDownFun,
        buttonClass,
        handleMouseOver,
        handleMouseOut,
      }
    },
    components: {
      WaveComponent,
      BubbleComponent,
      Portfolio,
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

  .light-text {
    color: white;
  }

  .dark-text {
    color: black;
  }

  .page-section2 {
    background: linear-gradient(rgb(169,214,226), #00B7A8,  #096386, #071E3D);
  }


/* .footer { height: 100px; background-color: #707070;} */
  
  </style>