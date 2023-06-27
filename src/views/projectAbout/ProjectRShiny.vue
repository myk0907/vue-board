<!-- PageAbout.vue -->
<template>
  <div class="project_rshiny">
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
    <h1 style="margin: 50px; font-size: 40px">해(海)봄 교실</h1>
    
    <!-- 프로젝트 설명 -->
    <div style="margin-left: 20px;">
      <h1 class="header_1">프로젝트 소개</h1>
      <div class="contents">
        <div> 
          <span style="font-weight: bold;">수행기간</span>
          <li>2021-05 ~ 2021-12</li>
          <span style="font-weight: bold;">요약</span>
          <li>중고등학교 지구과학 수업시간에 활용 할 수 있는 웹 페이지</li>
        </div>
      </div>
      
      <div class="contents">
        <div class="header_2">역할</div>
        <li>한반도 장기간 연평균 표층수온 데이터 수집, DB 구축 및 시각화 페이지 기획, 제작</li>
        <li>한반도 해양생태계 생물지수 데이터 수집, DB구축 및 시각화 페이지 기획, 제작</li>
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
              leaflet
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
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img src="../../assets/img/project/shop/www_shop_1.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">메인 화면</span><br>
            <span>
              대표 상품 이미지와 각 메뉴에 바로 이동이 가능한 메인 화면<br>
            </span>
            <br>
            <span class="contents_desc">
              대표상품 이미지가 순차적으로 나올 수 있게 하였고, 상품, 리뷰, 이벤트, 장바구니, 관리자페이지 등 바로 ??????????
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/shop/www_shop_2.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">상품 목록 화면</span><br>
            <span>
              DB에 구축된 상품 리스트 표출 및 검색 기능 구현<br>
            </span>
            <br>
            <span class="contents_desc">
              상품의 카테고리를 나누어 상품 리스트를 표출하고 검색 기능을 사용하여 포함되는 단어를 서치할 수 있게 함
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/shop/www_shop_2_1.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">상품 상세 화면</span><br>
            <span>
              DB에 구축된 상품의 상세정보 및 리뷰정보 표출
            </span>
            <br>
            <span class="contents_desc">
              DB에 구축된 상품의 상세정보와 리뷰 정보를 표출하였고, 장바구니 또는 바로 구매 기능을 추가함
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <img class="img-border" src="../../assets/img/project/shop/www_shop_6.png" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="group_row box-2">
        <div class="contents">
          <div> 
            <span class="image_title">마이페이지 개인정보 수정 화면</span><br>
            <span>
              DB에 저장된 회원 정보 수정<br>

            </span>
            <br>
            <span class="contents_desc">
              생일, 주소 등 회원정보를 수정할 수 있음.
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