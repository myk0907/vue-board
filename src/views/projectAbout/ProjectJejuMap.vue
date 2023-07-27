<!-- PageAbout.vue -->
<template>
  <div class="project_jeju custom-body">
    <!-- 가짜 -->
    <div class="fake_data">
    <h1 style="margin: 50px">This is an about page [3] </h1>
    
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
        <h1 style="margin: 50px; font-family: 'ulsanjunggu'; font-size: 55px">놀당갑서</h1>
        
        <div class="git_button" id="git_button_jeju" style="text-align: right; ">
          <a href='https://github.com/myk0907/final-project_jejuMap' target='_blank'>
            <img src="../../assets/svg/github-icon-svgrepo-com.svg" style="width: 40px;">
          </a>
        </div>
      </div>

    <!-- 프로젝트 설명 -->
    <div style="margin-left: 20px;">
      <h1 class="header_1">프로젝트 소개</h1>
      <div class="contents">
        <div> 
          <span style="font-weight: bold;">수행기간</span>
          <li>2022-07 ~ 2022-08</li>
          <span style="font-weight: bold;">수행인원</span>
          <li>4명</li>
          <span style="font-weight: bold;">요약</span>
          <li>제주도 여행 방문자를 위한 맛집, 숙박, 관광지 추천 페이지 제작</li>
        </div>
      </div>
      
      <div class="contents">
        <div class="header_2">역할</div>
        <li>카카오 지도 API를 활용한 제주도 지도 및 직선경로 표출 기능 구현</li>
        <li>수집한 데이터 저장을 위한 데이터베이스 설계 및 구축</li>
        <li>관광지역 찜 기능 및 여행 경로 쿠키 저장 기능 구현</li>
      </div>

      <div class="contents">
        <div class="header_2">개발환경</div>
        <div class="contents" >
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/python-svgrepo-com.svg">
            <div class="lang_logo_title">
              Python
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/flask-svgrepo-com.svg">
            <div class="lang_logo_title">
              Flask
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/HTML5_logo.svg">
            <div class="lang_logo_title">
              HTML
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/css-3-svgrepo-com.svg">
            <div class="lang_logo_title">
              CSS
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/javascript-svgrepo-com.svg">
            <div class="lang_logo_title">
              JavaScript
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/mysql-svgrepo-com.svg">
            <div class="lang_logo_title">
              MySQL
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 화면 설명 -->
    <h1 class="header_1" style="margin-left: 20px;">화면 설명</h1>
    <!-- <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img src="../../assets/img/project/jeju/jeju_main.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">메인 페이지</span><br>
            놀당갑서의 메인페이지로 제주도 또는 서귀포 중 선택하여 스마트 파인더 페이지로 이동 가능
          </div>
        </div>
      </div>
    </div> -->
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img src="../../assets/img/project/jeju/jeju_1.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">스마트파인더 화면</span><br>
            <span>
              카카오 Maps API를 이용하여 제주도 관광지 데이터 표출<br>
            </span>
            <br>
            <span class="contents_desc">
              네이버, 다음 등 크롤링을 통해 구축한 제주도의 음식점, 관광지, 숙박 데이터를 표출함<br>
              찜 버튼 클릭 시 클릭된 목록을 확인할 수 있도록 하였고, 지도의 마커를 연결하여 직선 경로를 표시함
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img src="../../assets/img/project/jeju/jeju_2.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div>
            <span class="image_title">제주도정보 화면</span><br>
            <span>
              AmCharts API를 이용하여 제주도 관광객 데이터 표출<br>
              OpenWeather의 API를 이용하여 제주도의 현재 날씨 정보 표출<br>
            </span>
            <br>
            <span class="contents_desc">
              한국관광데이터랩에서 2018년 ~ 2022년까지의 제주도 관광객 데이터를 수집하여 DB에 구축하고 표출함<br>
              제주도의 현재 날씨정보를 그래픽과 함께 표출함
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