<!-- PageAbout.vue -->
<template>
  <div class="project_automl custom-body">
    <!-- 가짜 -->
    <div class="fake_data">
    <h1 style="margin: 50px">This is an about page [2] </h1>
    
    <div class="contents">
      <div class="group_row box1" style="margin-right: 50px">
        <img src="../../assets/img/test_img.jpg">
      </div>
      <div class="group_row contents box1">
        가나다라마바사아자차카타파하가갸거겨고교구규그기카캬커켜코쿄쿠큐크키
      </div>
    </div>
    </div>
    <!-- 가짜 끝 -->
  
    <div class="real_data">
    <div style="height: 200px;">
      <h1 style="margin: 50px; font-size: 40px"><b>AutoML</b></h1>
      
      <!-- <div class="git_button" id="git_button_jeju" style="display: flex; justify-content: end; align-items: center;">
        <a href='https://joiss.kr/' target='_blank' style="margin-right: 40px;">
          <img src="../../assets/img/project/sealab/wh-joiss-logo.png" style="width: 200px; filter: invert(100%) sepia(100%) saturate(556%) hue-rotate(169deg) brightness(98%) contrast(94%);">
        </a>
        <a href='http://shiny.kesti.info/' target='_blank'>
          <div class="group_row txt_center">   
            <img src="../../assets/img/project/sealab/sealab-logo-blue.png" style="width: 40px;">
            <div class="lang_logo_title" style="margin-top : 10px;">
              해(海)봄 교실
            </div>
          </div>
        </a>
      </div> -->
    </div>
    
    <!-- 프로젝트 설명 -->
    <div style="margin-left: 20px;">
      <h1 class="header_1">프로젝트 소개</h1>
      <div class="contents">
        <div> 
          <span style="font-weight: bold;">수행기간</span>
          <li>2022.10 ~ 2023.05</li>
          <span style="font-weight: bold;">요약</span>
          <li>반복적인 Machine Learning 모델 개발 작업 자동화 솔루션</li>
        </div>
      </div>
      
      <div class="contents">
        <div class="header_2">역할</div>
        <li>데이터 저장 및 시각화 </li>
      </div>

      <div class="contents">
        <div class="header_2">개발환경</div>
        <div class="contents" >
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/spring-icon-svgrepo-com.svg">
            <div class="lang_logo_title">
              SpringBoot
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/java-logo-svgrepo-com.svg">
            <div class="lang_logo_title">
              JAVA
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/HTML5_logo.svg">
            <div class="lang_logo_title">
              HTML
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/javascript-svgrepo-com.svg">
            <div class="lang_logo_title">
              JavaScript
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/webix-seeklogo.com.svg">
            <div class="lang_logo_title">
              Webix
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/plot_ly-official.svg">
            <div class="lang_logo_title">
              Plotly
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/css-3-svgrepo-com.svg">
            <div class="lang_logo_title">
              CSS
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/postgresql-svgrepo-com.svg">
            <div class="lang_logo_title">
              PostgreSQL
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 화면 설명 -->
    <h1 class="header_1" style="margin-left: 20px;">화면 설명</h1>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/automl/automl_1.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">장기간 계절별 연평균 표층수온 화면</span><br>
            <span>
              Leaflet 라이브러리를 이용한 연평균 표층수온 래스터 이미지 표출<br>
            </span>
            <br>
            <span class="contents_desc">
              COBE에서 수집한 1도간격의 연평균 표층수온 데이터를 4계절로 나누고, 보간법을 적용한 래스터로 제작하여 표출하였음.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
</script>