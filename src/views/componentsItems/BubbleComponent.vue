<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
// import { ref, onMounted, onBeforeUnmount } from 'vue';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    
    // 공기방울 js
    const canvas = ref(null);
    const circleArray = [];

    const settings = {
      maxCount: 50, // 방울 갯수
      bounce: -0.01,
      force: -1.25,
      gravity: -0.0005,
    };

    const ballColorSelections = ['#C4DFDF', '#D2E9E9', '#E3F4F4', '#F8F6F4'];

    const createCircle = (max) => {
      for (let i = 0; i < max; i++) {
        const circleObject = new Circle();
        circleObject.id = i;
        circleArray.push(circleObject);
      }
      
      moveCircle();
    };

    const drawCircle = (object) => {
      if(canvas.value){

        const ctx = canvas.value.getContext('2d');
  
        for (let i = 0; i < object.length; i++) {
          ctx.beginPath();
          ctx.arc(
            object[i].positionX,
            object[i].positionY,
            object[i].radius,
            0,
            2 * Math.PI
          );
          ctx.fillStyle = object[i].color;
          ctx.fill();
          ctx.closePath();
        }
      }
    };

    const moveCircle = () => {
      if(!canvas.value){
        // cancelAnimationFrame(moveCircle);
        return;
      }

      const ctx = canvas.value.getContext('2d');
      ctx.fillStyle = '#69D2E7';
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

      for (let i = 0; i < circleArray.length; i++) {
        collideCircle(circleArray, circleArray[i]);
        circleArray[i].velocityY += settings.gravity * 0.5; // 속도 조절
        circleArray[i].positionY += circleArray[i].velocityY;
        circleArray[i].positionX += circleArray[i].velocityX;

        if (circleArray[i].positionY > 0 - circleArray[i].radius) {
          circleArray[i].positionY += circleArray[i].velocityY;
        } else {
          circleArray[i].velocityY = (Math.random() * 100) / 100 * -1;
          circleArray[i].positionX = Math.random() * canvas.value.width;
          circleArray[i].positionY = canvas.value.height;
        }

        if (
          circleArray[i].positionX > canvas.value.width + circleArray[i].radius ||
          circleArray[i].positionX < 0 - circleArray[i].radius
        ) {
          circleArray[i].positionX = Math.random() * canvas.value.width;
          circleArray[i].positionY = canvas.value.height;
        }
      }

      function collideCircle(collideObject, circleObject) {
        for (let j = circleObject.id + 1; j < collideObject.length; j++) {
          const distanceX = collideObject[j].positionX - circleObject.positionX;
          const distanceY = collideObject[j].positionY - circleObject.positionY;
          const distance = Math.floor(
            Math.sqrt(distanceX * distanceX + distanceY * distanceY)
          );
          const minimumDistance =
            collideObject[j].radius + circleObject.radius * 10;
          if (distance <= minimumDistance) {
            const angle = Math.atan2(distanceY, distanceX);
            const targetX =
              circleObject.positionX + Math.cos(angle) * minimumDistance;
            const targetY =
              circleObject.positionY + Math.sin(angle) * minimumDistance;
            const angleX = parseInt(
              (targetX - collideObject[j].positionX) * settings.bounce
            ) / 50;
            const angleY = parseInt(
              (targetY - collideObject[j].positionY) * settings.bounce
            ) / 50;
            circleObject.velocityX -= angleX;
            circleObject.velocityY -= angleY;
            collideObject[j].velocityX += angleX;
            collideObject[j].velocityY += angleY;
          }
        }
      }

      if (canvas.value != null && canvas.value.getContext != null) {
        drawCircle(circleArray);
        requestAnimationFrame(moveCircle);
      }
    };

    class Circle {
      constructor() {
        this.positionX = Math.random() * window.innerWidth;
        // this.positionX =
        //   (Math.random() * window.innerWidth) / 2 + window.innerWidth / 4;
        this.positionY = window.innerHeight;
        this.radius =
          Math.floor((Math.random() * window.innerWidth * 0.005) + 1);
        this.velocityY = (Math.random() * 100) / 100 * -1;  // 물방울 방향, 속도
        this.velocityX = (Math.random() * 100) / 100 * -1;  // 물방울 방향, 속도
        this.color =
          ballColorSelections[Math.floor(Math.random() * ballColorSelections.length)];
      }
    }

    onMounted(() => {
      const canvasElement = canvas.value;
      canvasElement.height = document.querySelector('.waves-container').clientHeight; // 물방울 높이
      // canvasElement.height = window.innerHeight;
      canvasElement.width = window.innerWidth;
      createCircle(settings.maxCount);

      window.addEventListener('resize', () => {
        canvasElement.height = document.querySelector('.waves-container').clientHeight; // 물방울 높이
        // canvasElement.height = window.innerHeight;
        canvasElement.width = window.innerWidth;
      });
    });

    // let id = requestAnimationFrame(moveCircle)
    
    // const beforeUnmount = () => {
    //   const canvasElement = canvas.value;
    //   if (canvasElement) {
    //     // 정리 작업 수행
    //     // window.removeEventListener('resize');
    //     console.log("???11", id)
    //     window.cancelAnimationFrame(id);

    //   }
    // };

    // onBeforeUnmount(beforeUnmount);

    return {
      canvas,
    }
  }

};
</script>

<style>

/* 공기방울 스타일 */
canvas {
  -webkit-filter: blur(1px);
  filter: blur(1px);
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 1;
}
</style>