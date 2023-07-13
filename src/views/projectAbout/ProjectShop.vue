<!-- PageAbout.vue -->
<template>
  <div class="project_shop custom-body">
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
        <!-- WWW 로고 -->
        <h1 style="margin: 50px 0px 25px 0px ;"><img src="../../assets/img/project/shop/www_shop_logo.png" style="width: 200px;"></h1>
        
        <div class="git_button" id="git_button_shop" style="text-align: right;">
          <a href='https://github.com/myk0907/project_shop' target='_blank'>
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
          <li>2022-04 ~ 2022-05</li>
          <span style="font-weight: bold;">수행인원</span>
          <li>5명</li>
          <span style="font-weight: bold;">요약</span>
          <li>쇼핑몰 사이트 클론코딩</li>
        </div>
      </div>
      
      <div class="contents">
        <div class="header_2">역할</div>
        <li>쇼핑몰 상품 목록 DB 구축</li>
        <li>상품 리스트, 상세, 장바구니, 주문서 주문확인, 배송현황 페이지 프론트&백엔드 구축</li>
      </div>

      <div class="contents">
        <div class="header_2">개발환경</div>
        <div class="contents" >
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/java-logo-svgrepo-com.svg">
            <div class="lang_logo_title">
              JAVA
            </div>
          </div>
          <div class="group_row txt_center">   
            <img class="lang_logo" src="../../assets/lang_logo/spring-icon-svgrepo-com.svg">
            <div class="lang_logo_title">
              Spring
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
              대표상품 이미지가 순차적으로 나올 수 있게 하였고, 상품, 리뷰, 이벤트, 장바구니, 관리자페이지 등 바로 이동할 수 있는 기능 버튼을 추가함
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