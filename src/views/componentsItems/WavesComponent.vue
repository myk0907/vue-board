<template>
    <!--Waves Container-->
    <!-- <div class="waves-container main-body">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(169,214,226,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(169,214,226,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(169,214,226,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgb(169,214,226)" />
        </g>
      </svg>
    </div> -->
    <!--Waves end-->
    
    

    <!--Waves Container-->
    <div class="header">
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(169,214,226,0.7)" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(169,214,226,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(169,214,226,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="rgb(169,214,226)" />
          </g>
        </svg>
      </div>
    </div>
    <!--Waves end-->

    <div class="inner-header flex"> </div> 

    <!-- 파도 출처 -->
    <div class="content flex" style="background-color: rgb(169,214,226);"> 
      <p>By.Goodkatz</p>
    </div>
    <!-- 파도 출처 끝 -->




</template>

<script>
export default {
    
};
</script>

<style>

/* 파도 스타일 */
body {
  margin:0;
}

p {
  /* letter-spacing: 1px; */
  font-size:10px;
  color: #F8F6F4;
  margin-right: 7px;
}

.header {
  position:relative;
  text-align:center;
  color:white;
}

.inner-header {
  height:62vh;
  width:100%;
  margin: 0;
  padding: 0;
  background-color: rgb(169,214,226);
}

.main-body {
  position:relative;
  /* text-align:center; */
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: right;
  align-items: center;
  text-align: center;
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
  height:15vh;
  text-align:right;
  vertical-align: top;
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
}


</style>