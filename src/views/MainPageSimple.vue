<template>
<!-- 왼쪽 콘텐츠 -->
  <div style="display: flex;">
    <div class="left-container">
      <LeftContents />
    </div>

<!-- 오른쪽 콘텐츠 -->
    <div class="right-container">
      <RightContents />
    </div>
  </div>
</template>


<script>
// import { ref, onMounted, onBeforeUnmount } from 'vue';
import { onMounted } from 'vue';
import LeftContents from "./LeftContents.vue"
import RightContents from "./RightContents.vue"

export default {
  setup() {
    onMounted(() => {
      
    }); 

    return {
      
    }
  },
  components: {
    LeftContents,
    RightContents
  }

};
</script>

<style>
.left-container {
  position: fixed; /* 화면에 고정 */
  top: 0; /* 상단에 고정 */
  display: flex;
  flex-direction: column; /* 내부 요소 세로 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  width: 20vw;
  height: 100vh;
  min-width: 268px;
  background: #F5F5F5;
  padding: 15px 15px 50px 15px;
  overflow-y: auto;
}
.right-container {
  margin-left: max(268px, 20vw); /* 최소 268px 보장, 그 이상이면 20vw 적용 */
  float: right;
  width: calc(100vw - max(268px, 20vw)); /* 전체 너비에서 margin-left만큼 빼기 */
  min-width: 850px;
  padding: 0 60px 60px 60px;
  overflow-x: auto;
}
</style>