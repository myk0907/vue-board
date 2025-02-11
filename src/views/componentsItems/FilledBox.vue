<template>
  <div v-for="(filledBoxItem, idx) in filledBoxItems" :key="idx" class="filledBox-bar-container">
    <span class="filledBox-title">{{ filledBoxItem.filledBoxTitle }}</span>
    <!-- <div class="filledBox-bar">
      <div class="filledBox-fill" :style="{ width: filledBoxItem.progress + '%', backgroundColor: colors1[idx % colors1.length] }"></div>
    </div> -->
    <div class="filledBox-bar-div">
      <div 
        v-for="(box, boxIdx) in 10" 
        :key="boxIdx"
        class="filledBox-segment"
        :style="{ backgroundColor: boxIdx < Math.ceil(filledBoxItem.progress / 10) ? colors[idx % colors.length] : '#ddd' }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filledBoxItems: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      colors1: ['#F7DF2C', '#F7B727', '#F59A1A', '#F76002', '#E8092C', '#A91559'], // 색상 배열 추가
      colors2: ['#BFED07', '#EDDF07', '#EDC307', '#EDD156', '#EDA707', '#ED8A07'], // 색상 배열 추가
      colors: ['#906AA3', '#DF5F49', '#E8901D', '#F3BF30', '#9BBC5B', '#1FAEB1'], // 색상 배열 추가
      colors4: ['#F45644', '#F49046', '#EAC73E', '#85B360', '#038BC8', '#684284'], // 색상 배열 추가
      colors5: ['#EDC307', '#EDC307', '#EDC307', '#EDC307', '#EDC307', '#EDC307'], // 색상 배열 추가
    };
  },
};
</script>

<style scoped>
.filledBox-bar-container {
  display: flex; /* 수평 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%;
  margin-bottom: 3px;
}
.filledBox-bar {
  width: 100%;
  height: 15px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 0 10px 0 10px;
}
.filledBox-fill {
  /* width: 75%; */
  height: 100%; /* 부모 div와 동일한 높이 */
  /* background-color: #EDC307;  */
  border-radius: 10px 0 0 10px; /* 좌측만 둥근 모서리 */
}
.filledBox-bar-div {
  display: flex;
  gap: 4px; /* 칸 사이 여백 */
  width: 100%;
}

.filledBox-segment {
  width: 10%; /* 5등분이므로 20% */
  height: 15px;
  background-color: #ddd; /* 기본 색상 */
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
}

.filledBox-title {
  margin: 0;
  font-size: 16px;
  width: 45%;
  min-width: 45%;
  text-align: start;
}
</style>
