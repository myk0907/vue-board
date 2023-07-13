<!-- MainPage.vue -->
<template>
  
  <!--Hey! This is the original version of Simple CSS Waves-->

  <div class="header">

  <!--Content before waves-->
  <div class="inner-header flex custom-body">
    <div class="contents" style="height: 500px; width: 1280px;">
      <div class="group_row char-img" style="margin-right: 50px">
        <!-- <img src="../assets/img/my_pic_hand.png" style="width: 250px"> -->
      </div>
      <div class="group_row img-contents">
        ???
      </div>
    </div>
  </div>

    <!--Waves Container-->
    <div class="waves-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(153,219,245,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(153,219,245,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(153,219,245,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgb(153,219,245)" />
        </g>
      </svg>
    </div>
    <!--Waves end-->

  </div>
  <!--Header ends-->

  <!--Content starts-->
  <div class="content flex" style="background-color: rgb(153,219,245);"> <!--#99DBF5-->
    <p>By.Goodkatz | Free to use </p>
  </div>
  <!--Content ends-->
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
        document.querySelector(".char-img").classList.add("left-to-rignt");
      }, 50);

    }

    return {
      move,
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

.img-contents {
  position: absolute;
  left: 700px;
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


body {
  margin:0;
}

h1 {
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}

p {
  /* letter-spacing: 1px; */
  font-size:10px;
  color: #fff;
  margin-right: 7px;
}

.header {
  position:relative;
  text-align:center;
  /* background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%); */
  /* color:white; */
}
.logo {
  width:50px;
  fill:white;
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  justify-content: flex-end
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:50px;
  max-height:100px;
}

.content {
  position:relative;
  /* height:20vh; */
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
  transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}

</style>