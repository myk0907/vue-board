<template>
  <div class="introText">
    <div style="font-size:26px; font-weight: 400;">사용자 관점에서 고민하고 개발하는 <span style="color: #EDC307; font-weight: bold;">웹 개발자</span></div>
    <div style="font-size: 60px;"><span style="color: #EDC307; font-weight: 900;">김민영</span> 입니다.</div>
  </div>

  <div class="right-contents-container">
    <ContentsTitle contentsTitle="경력"/>
    <CareerSummary 
      :careerSummaryInfos="[
        {duration: '2022.10 ~ 2024.09',
          companyName: '알고그랩',
          roleName: '사원',
          primaryRole: 'front-end, back-end 웹 개발',
        },
        {duration: '2017.05 ~ 2022.02',
          companyName: '(주)환경과학기술',
          roleName: '대리',
          primaryRole: '콘텐츠 기획 및 데이터 관리',
        },
          
      ]"
    />
  </div>
  <div class="right-contents-container">
    <!-- 회사에 퇴사자가 급증하면서 기존 업무를 인수인계하여 진행하였습니다 -->
    <ContentsTitle contentsTitle="경력기술"/>
    <CareerItemSimple 
      companyName="알고그랩" 
      roleName="풀스택서비스팀/사원" 
      jobCategory="웹 개발자" 
      periodOfEmployment="2022.10 ~ 2024.09"
      :projectInfos="[
        {projectName: 'Data-lake 솔루션 개발',
          projectDuration: '2023.10 ~ 2024.08(10개월)',
          primaryRole: 'front-end, back-end 담당',
          taskSummary: '웹 페이지 axios 활용 기능 개발 및 REST API 개발',
          techStacks: ['React', 'Next.js', 'Spring Boot', 'PostgreSQL'],
          devCount: '5명(front-end), 5명(back-end), 3명(python), 1명(publisher)',
          contribution: '20%',
          mainTasks: [
          'React-grid-layout 라이브러리를 이용한 드래그 앤 드롭 대시보드(텍스트 박스, 시각화) 생성, 편집 기능 개발',
          'webix 라이브러리를 이용한 트리 기능 개발',
          '뉴스 크롤링 front-end 기능 개발',
        ]},
          
        {projectName: 'SportsAI 통합훈련 관리 플랫폼',
        projectDuration: '2024.01 ~ 2024.07(7개월)',
        primaryRole: 'front-end, back-end 담당',
        taskSummary: '웹 페이지 axios 활용 기능 개발 및 REST API 개발',
        techStacks: ['Vue', 'Node.js', 'Spring Boot', 'PostgreSQL'],
        devCount: '4명',
        contribution: '35%',
        mainTasks: [
          '패럴림픽 국가 대표 선수 관리 시스템 개발',
          '회원가입 기능 및 SMTP 서버를 이용한 이메일 인증 기능 개발',
          '선수 기본정보, 경기결과, 체력측정 등 관리 기능 개발',
          '선수 대시보드 및 chart.js를 활용한 시각화 페이지 기능 개발',
          '화면 기획, 화면 설계서 작성',
        ]},
        
        {projectName: 'AutoML 1.5v 솔루션 개발',
        projectDuration: '2022.10 ~ 2023.05(7개월)',
        primaryRole: 'front-end, back-end 담당',
        taskSummary: '웹 페이지 ajax 활용 신규 기능 개발 및 기존 기능 고도화',
        techStacks: ['Spring Boot', 'JSP', 'jQuery', 'PostgreSQL'],
        devCount: '2명(front-end, back-end), 2명(python)',
        contribution: '40%',
        mainTasks: [
          'json parse를 사용하여 백엔드 기능 고도화',
          '파일 업로드 및 저장 기능 개발',
          '데이터 전처리 페이지 개발 및 REST API 파이썬 통신 기능 개발',
          'D3, Plotly 라이브러리를 활용한 데이터 시각화 페이지 개발',
          '쿼리 개선 및 무한 스크롤 도입을 통한 속도 개선 작업 진행',
          '화면 설계서, 테이블 정의서 작성',
        ]},
      ]"
    />
    <!-- 
    {projectName: 'Data-lake 솔루션 개발',
        projectDuration: '2023.10 ~ 2023.12(3개월)',
        primaryRole: 'front-end 담당',
        taskSummary: '웹 페이지 axios 활용 기능 개발',
        techStacks: ['React', 'Next.js', 'Spring Boot', 'PostgreSQL'],
        devCount: '3명(front-end), 3명(back-end), 2명(python), 1명(publisher)',
        contribution: '25%',
        mainTasks: [
          '데이터 적재, 전처리, query editor, 사용자 그룹 생성 기능 개발',
          '화면 기획, 화면 설계서, 테이블 정의서 작성',
        ]},
    {projectName: 'LLM & Data Portal 고도화 동시 진행',
        projectDuration: '2023.07 ~ 2023.11(5개월)',
        primaryRole: 'front-end, back-end 담당',
        taskSummary: 'front-end 코드 리팩토링',
        techStacks: ['Spring Boot', 'JSP', 'jQuery', 'PostgreSQL'],
        devCount: '4명',
        contribution: '30%',
        mainTasks: [
          '고객사 맞춤 솔루션 제공을 위한 코드 리팩토링',
          '데이터 적재, 전처리, query editor, 사용자 그룹 생성 페이지 개발',
          '화면 기획, 화면 설계서, 테이블 정의서 작성',
        ]}, -->
    <CareerItemSimple 
      companyName="(주)환경과학기술" 
      roleName="해양사업부/대리" 
      jobCategory="콘텐츠 기획 및 데이터 관리" 
      periodOfEmployment="2017.05 ~ 2022.02"
      :projectInfos="[
        {projectName: '관할해역 해양정보 공동활용 구축 연구',
        projectDuration: '2017.05 ~ 2022.02(4년 10개월)',
        primaryRole: '플랫폼 기획 및 해양자료 관리',
        taskSummary: '해양연구자료 전문 리포지토리 플랫폼 기획 및 자료 관리',
        techStacks: ['R', 'PostgreSQL', 'QGIS', 'ArcGIS', 'Excel'],
        devCount: '4명',
        contribution: '70%',
        mainTasks: [
          '해양연구자료 전문 리포지토리 플랫폼 기획 및 관리',
          '해외 및 국내 공공 포털을 이용한 해양 데이터 수집',
          'R을 활용한 데이터 전처리 및 PostgreSQL DB에 적재',
          '해양 시각화 페이지 기획 및 R shiny패키지를 이용한 Interactive web app 개발 (http://shiny.kesti.info/)'
        ]},
          
        {projectName: '국내 블루카본 정보시스템 구축 및 평가관리기술 개발',
        projectDuration: '2017.05~2022.02(4년 10개월)',
        primaryRole: '해양자료 관리',
        taskSummary: '자료 수집 및 데이터베이스 적재',
        techStacks: ['R', 'PostgreSQL', 'QGIS', 'ArcGIS', 'Excel'],
        devCount: '4명',
        contribution: '50%',
        mainTasks: [
          '블루카본 데이터 수집, R을 이용한 전처리 및 PostgreSQL DB에 적재',
          'QGIS/ArcGIS를 활용한 드론촬영 데이터 전처리 및 적재',
          '전처리된 shape파일을 geoserver에 적재',
        ]},
      ]"
    />
  </div>
  <!-- <div class="right-contents-container">
    <ContentsTitle contentsTitle="경력"/>
    <CareerItemSimple 
      companyName="알고그랩" 
      roleName="풀스택서비스팀/사원" 
      periodOfEmployment="2022.10 ~ 2024.09"
      :projectInfos="[
        {projectName: 'Data-lake 솔루션 개발',
          projectDuration: '2024.07 ~ 2024.08(2개월)',
          taskSummary: '웹 페이지 기능 개발 및 REST API 개발',
        },
          
        {projectName: 'SportsAI 통합훈련 관리 플랫폼',
        projectDuration: '2024.01 ~ 2024.07(7개월)',
        taskSummary: '패럴림픽 국가 대표 선수 관리 시스템 개발',
        },

        {projectName: 'Data-lake 솔루션 개발',
        projectDuration: '2023.10 ~ 2023.12(3개월)',
        taskSummary: '사내 솔루션 웹 페이지 기능 개발',
        },

        {projectName: 'LLM & Data Portal 솔루션 개발 동시 진행',
        projectDuration: '2023.07 ~ 2023.11(5개월)',
        taskSummary: '기존 코드 리팩토링 작업 및 기업 솔루션화 진행',
        },
        
        {projectName: 'AutoML 1.5v 솔루션 개발',
        projectDuration: '2022.10 ~ 2023.05(7개월)',
        taskSummary: '기존 코드 리팩토링 작업 및 기업 솔루션화 진행, 기능 개발',
        },
      ]"
    />
    <CareerItemSimple 
      companyName="(주)환경과학기술" 
      roleName="해양사업부/대리" 
      periodOfEmployment="2017.05 ~ 2022.02"
      :projectInfos="[
        {projectName: '관할해역 해양정보 공동활용 구축 연구',
        projectDuration: '2017.05 ~ 2022.02(4년 10개월)',
        taskSummary: '자료 수집 및 데이터베이스 적재',
        },
          
        {projectName: '국내 블루카본 정보시스템 구축 및 평가관리기술 개발',
        projectDuration: '22017.05~2022.02(4년 10개월)',
        taskSummary: '자료 수집 및 데이터베이스 적재',
        },
      ]"
    />
  </div> -->
  <div class="right-contents-container group-row">
    <div style="line-height: 200%;">
      <ContentsTitle contentsTitle="자격증" />
      <b>SQLD</b> <span class="content-desc">&nbsp;2020.10.06 (한국데이터산업진흥원)</span><br>
      <b>컴퓨터활용능력 2급</b> <span class="content-desc">&nbsp;2016.08.26 (대한상공회의소)</span><br>
    </div>
    <div style="margin-left: 50px; line-height: 200%;">
      <ContentsTitle contentsTitle="학력"/>
      <b>한양대학교 해양융합과학과</b> <span class="content-desc">&nbsp;2015.3 ~ 2017.2 졸업</span><br>
      학점은행제 컴퓨터공학과 <span class="content-desc">&nbsp;2013.3 ~ 2015.2 수료</span>
    </div>
  </div>
  
  <div class="right-contents-container">
    <ContentsTitle contentsTitle="교육" />
    <div style="line-height: 200%">
      <span style="font-size: 18px; font-weight: bold;">빅데이터 플랫폼 구축(하둡)과 빅데이터분석(by Spark&Power Bi) & 자바(JAVA)웹개발</span>
      <span class="content-desc" style="margin-left: 15px;">2022.02 ~ 2022.08 (더조은아이티아카데미학원)</span><br>
      <li>Spring Framework를 기반으로 웹 페이지 기획, 설계와 데이터베이스 활용을 통해 실무적인 기술을 익히고 빅데이터를 분산처리 할 수 있는 파이썬과 하둡 기술 학습</li>

    </div>
  </div>

  
</template>


<script>
import ContentsTitle from "./componentsItems/SimpleContentsTitle.vue"
import CareerSummary from "./componentsItems/CareerSummary.vue"
import CareerItemSimple from "./componentsItems/CareerItemSimple.vue"

export default {
  components: {
    ContentsTitle,
    CareerItemSimple,
    CareerSummary,
  }
};
</script>
<style scoped>
.right-contents-container{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
}
.contents{
  width: 100%; /* 부모 너비에 맞게 설정 */
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어 줄바꿈 (표준) */
  white-space: normal; /* 자동 줄바꿈 활성화 */
  font-size: 16px;
  margin: 0px;
  padding: 0;
}
.introText{
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: start;
}
.content-desc{
  color: #a0a0a0;
  font-size: 14px;
}
.group-row{
  display: flex; 
  flex-direction: row;
}
.group-row > div{
  flex: 1;
}
</style>