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
        <li>분석결과 저장 데이터베이스 설계 및 구축</li>
        <li>분석 결과 시각화 화면 구현</li>
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
    <!-- 프로젝트 화면 설명 -->
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/automl/automl_8.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">데이터셋 업로드 화면</span><br>
            <span>
              데이터셋 서버 업로드 및 프로젝트 정보 데이터베이스 저장<br>
              생성한 프로젝트 정보 그리드 표출<br>
            </span>
            <br>
            <span class="contents_desc">
              사용자가 입력한 프로젝트 정보와 업로드한 데이터셋을 각각 데이터베이스와 서버에 저장함.<br>
              각 사용자가 생성한 프로젝트 정보를 webix 라이브러리 그리드로 표출하고, 그리드 더블클릭으로 프로젝트 명 정보를 수정할 수 있음.
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 프로젝트 화면 설명 -->
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
            <span class="image_title">데이터 시각화 화면</span><br>
            <span>
              Plotly 라이브러리를 활용한 데이터 시각화<br>
            </span>
            <br>
            <span class="contents_desc">
              사용자가 업로드한 데이터셋을 d3라이브러리를 활용해 읽은 후 plotly 라이브러리를 활용해 시각화 함.<br>
              (Scatter Plot, Histogram Plot, Box Plot, Outliers, Heatmap Plot, Time Series Plot)
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 프로젝트 화면 설명 -->
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/automl/automl_3.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">데이터 전처리 화면</span><br>
            <span>
              Webix 라이브러리를 활용한 전처리 탭 기능 개발<br>
            </span>
            <br>
            <span class="contents_desc">
              데이터 전처리 수행 항목을 선택할 수 있는 화면으로, webix 라이브러리를 활용해 데이터셋의 missing values, outlier 등 기본 정보를 표출하고
              처리 방식을 셀렉트 박스로 제공하여 사용자가 선택할 수 있게 함.<br>
              사용자가 처리한 파라미터를 Python API로 전송하고, 처리결과를 응답받아 데이터베이스에 저장함.
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 프로젝트 화면 설명 -->
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/automl/automl_4.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">모델 실험 화면</span><br>
            <span>
              데이터 분석모델을 선택 화면 개발<br>
            </span>
            <br>
            <span class="contents_desc">
              ㅇㅇㅇ
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