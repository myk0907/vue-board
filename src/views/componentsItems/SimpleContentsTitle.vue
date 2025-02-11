<template>
  <div class="contents-title">{{ contentsTitle }}</div>
</template>


<script>
export default {
  props: {
    contentsTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
  /* .contents-container{
    margin-top: 30px;
    width: 85%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  } */
  .contents-title {
    font-size: 24px;
    font-weight: 900;
    color: #EDC307;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    width: 100%; /* 부모 요소가 충분한 너비를 가지도록 설정 */
  }
  .contents-title::after {
    content: ""; /* 가상 요소 생성 */
    display: block; /* 블록 요소로 변경 */
    flex-grow: 1; /* 오른쪽 남는 공간을 모두 차지 */
    height: 1px; /* 선 두께 */
    background-color: #EDC307; /* 선 색상 */
    margin-left: 15px; /* 텍스트와 선 사이 간격 */
  }
</style>