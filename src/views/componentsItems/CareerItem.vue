<template>
	<div class="group_row" style="text-align: right; width: 17%; margin-right: 30px;">
		<span class="header_3">{{ companyName }}</span><br>({{ roleName }})<br>
		<span class="contents_desc-bg-black">&nbsp;{{ periodOfEmployment }}</span>
	</div>
	<div class="group_row" style="width: 75%;">
		<div v-for="(projectInfo, idx) in projectInfos" :key="idx" class="mb-5">
			<span style="font-weight: bold;">{{ projectInfo.projectName }}</span><span class="contents_desc-bg-black">&nbsp;{{ projectInfo.projectDuration }}</span>
			<!-- 기술 스택 -->
			<div class="lang_container">
				<span v-for="(techStack, idx) in projectInfo.techStacks" :key="idx">{{ techStack }} </span>
			</div>
			<!-- 주요 업무 -->
			<div>
				- 주요 업무: {{ projectInfo.primaryRole }}
			</div>
			<!-- 담당 역할 -->
			<div>
				- 담당 역할: {{ projectInfo.taskSummary }}  
			</div>
			<!-- 개발 인원 -->
			<div>
				- 개발 인원: {{ projectInfo.devCount }}
			</div>
			<div>
				- 기여도: {{ projectInfo.contribution }}
			</div>
			<div>
				<!-- 상세내역 -->
				- 상세내역
				<li v-for="(mainTask, idx) in projectInfo.mainTasks" :key="idx">
					{{ mainTask }}
				</li>
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