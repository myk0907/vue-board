<template>
  <div v-for="(careerSummaryInfo, idx) in careerSummaryInfos" :key="idx">
    <div class="career-container">
      <div class="career-contents-left">
        <span style="">{{ careerSummaryInfo.duration }}</span>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="career-contents-right">
        <span style="font-weight: 800;">{{ careerSummaryInfo.companyName }}</span>
      </div>
    </div>
    <div class="career-container">
      <div class="career-contents-left" style="text-align: end;">
        <!-- <span class="career-desc">{{ careerSummaryInfo.roleName }}</span> -->
      </div>
      <div class="circle-container">
        <div class="line"></div>
      </div>
      <div class="career-contents-right">
        <span class="career-desc">{{ careerSummaryInfo.primaryRole }}</span>
      </div>
    </div>
    <div v-if="careerSummaryInfos.length-1 != idx" class="career-container">
      <div class="career-contents-left" style="text-align: end;"></div>
      <div class="circle-container">
        <div class="line" style="height: 35px"></div>
      </div>
      <div class="career-contents-right"></div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
		careerSummaryInfos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
.career-container {
  display: flex;
}
.career-contents-left {
  padding: 0 15px 0 0;
  width: 160px;
  text-align: end;
}
.career-contents-right {
  padding: 0 0 0 25px;
  width: 400px
}
.circle-container {
  width: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle {
  width: 7px;
  height: 7px;
  background-color: #EDC307;
  border-radius: 50%;
}
.line {
  width: 2px; /* 선의 두께 */
  height: 100%; /* 선의 길이 */
  background-color: #EDC307; /* 선의 색상 */
}
.career-desc {
  color: #a0a0a0;
  font-size: 15px;
}

</style>