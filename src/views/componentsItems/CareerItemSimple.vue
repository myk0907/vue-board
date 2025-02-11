<template>
  <div style="display: flex; text-align: start; width: 100%;">
    <div class="" style="width: 20%; margin-right: 30px; ">
      <span class="header_3">{{ companyName }}</span><br>({{ roleName }})<br>
      <span class="">{{ jobCategory }}<br></span>
      <span class="">{{ periodOfEmployment }}</span>
    </div>
    <div class="" style="line-height: 200%">
      <div v-for="(projectInfo, idx) in projectInfos" :key="idx" class="mb-5">
        <span style="font-weight: 800; font-size: 17px;">{{ projectInfo.projectName }}</span><br>
        <span class="">{{ projectInfo.projectDuration }}</span>
        <!-- 기술 스택 -->
        <div class="lang_container_yellow">
          <span v-for="(techStack, idx) in projectInfo.techStacks" :key="idx">{{ techStack }} </span>
        </div>
        <!-- 담당 역할 -->
        <div v-if="projectInfo.primaryRole != undefined">
          - 담당 역할: {{ projectInfo.primaryRole }}
        </div>
        <!-- 주요 업무 -->
        <div v-if="projectInfo.taskSummary != undefined">
          - 주요 업무: {{ projectInfo.taskSummary }}  
        </div>
        <!-- 개발 인원 -->
        <div v-if="projectInfo.devCount != undefined">
          - 개발 인원: {{ projectInfo.devCount }}
        </div>
        <div v-if="projectInfo.contribution != undefined">
          - 기여도: {{ projectInfo.contribution }}
        </div>
        <div v-if="projectInfo.mainTasks != undefined">
          <!-- 상세내역 -->
          - 상세내역
          <li v-for="(mainTask, idx) in projectInfo.mainTasks" :key="idx">
            {{ mainTask }}
          </li>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    companyName: {
      type: String,
      required: true, // 회사 이름은 필수 입력으로 가정
    },
    roleName: {
      type: String,
      required: true, // 역할 이름도 필수 입력으로 가정
			default: ""
    },
    jobCategory: {
      type: String,
      required: true, // 역할 이름도 필수 입력으로 가정
			default: ""
    },
    periodOfEmployment: {
      type: String,
			default: ""
    },
    // projectInfos: {
    //   type: Object,
    //   default: () => {
		// 		return {
		// 			projectDuration: String,
		// 			projectName: String,
		// 			primaryRole: String,
		// 			techStacks: Object,
		// 			taskSummary: String,
		// 			devCount: String,
		// 			mainTasks: Object,
		// 		}
		// 	},
    // },
		projectInfos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
.lang_container_yellow > span {
    margin: 5px;
    padding: 6px;
    border: 1px solid #EDC307;
    background-color: #fffcf3;
    border-radius: 5px;
    color: #EDC307;
    font-size: 1rem;
}
</style>