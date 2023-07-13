<!-- PageAbout.vue -->
<template>
  <div class="project_rshiny custom-body">
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
      <h1 style="margin: 50px; font-size: 40px">JOISS 해(海)봄 교실</h1>
      
      <div class="git_button" id="git_button_jeju" style="display: flex; justify-content: end; align-items: center;">
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
      </div>
    </div>
    
    <!-- 프로젝트 설명 -->
    <div style="margin-left: 20px;">
      <h1 class="header_1">프로젝트 소개</h1>
      <div class="contents">
        <div> 
          <span style="font-weight: bold;">수행기간</span>
          <li>2021-05 ~ 2021-12</li>
          <span style="font-weight: bold;">요약</span>
          <li>JOISS : 한반도 해양과학 자료 통합 제공 포털</li>
          <li>해봄교실 교육 앱 : 중고등학교 지구과학 수업시간에 활용 할 수 있는 웹 페이지</li>
        </div>
      </div>
      
      <div class="contents">
        <div class="header_2">역할</div>
        <li>데이터 수집, 전처리, DB 구축 및 시각화 페이지 기획, 제작</li>
      </div>

      <div class="contents">
        <div class="header_2">개발환경</div>
        <div class="contents" >
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/r-studio.svg">
            <div class="lang_logo_title">
              R
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/r-shiny.png">
            <div class="lang_logo_title">
              Shiny
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/leaflet-svgrepo-com.svg">
            <div class="lang_logo_title">
              Leaflet
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/plot_ly-official.svg">
            <div class="lang_logo_title">
              plotly
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
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/qgis-logo.svg">
            <div class="lang_logo_title">
              QGIS
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
            <img src="../../assets/img/project/sealab/joiss_1.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">해양데이터 제공 화면</span><br>
              국내외 해양데이터 수집<br>
              R을 이용한 데이터 전처리 후 Postgres DB에 저장<br>
            <br>
            <span class="contents_desc">
              해양R&D 과제 자료와 국내외 해양과학자료 수집 후 R을 이용하여 전처리를 진행하고 Postgres DB에 저장하여 사용자들에게 제공함
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img src="../../assets/img/project/sealab/sealab_1.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">장기간 연평균 표층수온 화면</span><br>
            <span>
              plotly라이브러리를 이용한 연평균 표층수온 시계열 그래프 제작<br>
              Leaflet 라이브러리를 이용한 연평균 표층수온 래스터 이미지 표출<br>
            </span>
            <br>
            <span class="contents_desc">
              COBE에서 수집한 1도간격의 연평균 표층수온 데이터를 동해, 서해, 남해로 구분하여 시계열 그래프를 작성하고,
              보간법을 적용한 래스터로 제작하여 표출하였음.<br>
              레인지 바를 이용하여 사용자가 지정한 연도의 평균 데이터를 확인할 수 있음.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/sealab/sealab_2.png" style="width: 100%">
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
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/sealab/sealab_3.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">생물다양성 화면</span><br>
            <span>
              plotly라이브러리를 이용한 연평균 생물지수 박스 그래프 제작<br>
              Leaflet 라이브러리를 이용한 생물지수 표출<br>
            </span>
            <br>
            <span class="contents_desc">
              해양생태계 기본조사 자료를 수집하여 연평균으로 계산하여 색상에 따른 공간분포도를 작성하였고, 
              6개 권역의 shp파일을 만들어 지도에 표출하고 권역 클릭시 각 권역에 맞는 생물지수 박스 그래프가 나오도록 제작하였음.
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