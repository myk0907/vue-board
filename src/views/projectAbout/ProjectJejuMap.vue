<!-- PageAbout.vue -->
<template>
  <div class="project_jeju">
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
    <h1 style="margin: 50px; font-family: 'ulsanjunggu'; font-size: 55px">놀당갑서</h1>
    
    <div class="git_button" style="text-align: right;">
      <a href='https://github.com/myk0907/final-project_jejuMap' target='_blank'>
        <img src="../../assets/svg/github-icon-svgrepo-com.svg" style="width: 40px;">
      </a>
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
        <li>카카오 지도 API를 활용한 제주지역 지도 구현 및 장소 추가 기능 구현</li>
        <li>찜 버튼을 활용한 여행 경로 추가 및 쿠키 저장 기능 구현</li>
      </div>

      <div class="contents">
        <div class="header_2">개발환경</div>
        <div class="contents" >
          <div class="group_row txt_center">   
              <img class="lang_logo" src="../../assets/lang_logo/python-svgrepo-com.svg">
            <div class="image_title">
              Python
            </div>
          </div>
          <div class="group_row txt_center">   
              <img class="lang_logo" src="../../assets/lang_logo/flask-svgrepo-com.svg">
            <div class="image_title">
              Flask
            </div>
          </div>
          <div class="group_row txt_center">   
              <img class="lang_logo" src="../../assets/lang_logo/HTML5_logo.svg">
            <div class="image_title">
              HTML
            </div>
          </div>
          <div class="group_row txt_center">   
              <img class="lang_logo" src="../../assets/lang_logo/css-3-svgrepo-com.svg">
            <div class="image_title">
              CSS
            </div>
          </div>
          <div class="group_row txt_center">   
              <img class="lang_logo" src="../../assets/lang_logo/javascript-svgrepo-com.svg">
            <div class="image_title">
              JavaScript
            </div>
          </div>
          <div class="group_row txt_center">   
              <img class="lang_logo" src="../../assets/lang_logo/mysql-svgrepo-com.svg">
            <div class="image_title">
              MySQL
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
            <img src="../../assets/img/project/jeju_1.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            스마트파인더 화면 : 제주도의 위치(제주시, 서귀포시, 제주도), 카테고리 (음식점, 관광지, 숙박) 로 나누어 화면에 표출할 수 있고, 찜 기능을 활용하여 여행 경로를 확인할 수 있다.<br>
            <br>
            찜 버튼을 누를 시 지도의 마커를 연결하여 직선 경로를 표시하였다. 
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img src="../../assets/img/project/jeju_1.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            스마트파인더 화면 : 제주도의 위치(제주시, 서귀포시, 제주도), 카테고리 (음식점, 관광지, 숙박) 로 나누어 화면에 표출할 수 있고, 찜 기능을 활용하여 여행 경로를 확인할 수 있다.<br>
            <br>
            찜 버튼을 누를 시 지도의 마커를 연결하여 직선 경로를 표시하였다. 
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
</script>