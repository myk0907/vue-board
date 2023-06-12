<!-- PageAbout.vue -->
<template>
  <div class="about fake_data">
    <h1 style="margin: 50px">This is an about page</h1>
    <!-- <h1 style="margin: 50px">웹개발자 김민영 포트폴리오</h1> -->
    
    <!-- 소개 -->
    <div class="contents">
      <div class="group_row" style="margin-right: 50px">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class="group_row contents">
        가나다라마바사아자차카타파하가갸거겨고교구규그기카캬커켜코쿄쿠큐크키
      </div>
    </div>
    <!-- https://www.svgrepo.com/collection/twemoji-emojis/1  svg 이모지 사이트-->

    <!-- 경력 -->
    <h1 class="header_1"><img src="../assets/svg/magnifying-glass.svg"> Header1</h1>
    <h1 class="division_line"></h1>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div class="header_2"><img src="../assets/svg/books.svg"> Header1-1</div>
          <div>
            가나다라마바사아자차카타파하가갸거겨고교구규
            <li>ddd</li>
            <li>ddd</li>
          </div>
        </div>
      </div>

      <div class="group_row box-2">
        <div class="contents">
          <div class="header_2"><img src="../assets/svg/graduation-cap.svg"> Header1-1</div>
          dd
        </div>
        <div class="contents">
          <div class="header_2"><img src="../assets/svg/card-index.svg"> Header1-1</div>
          dd
        </div>
        <div class="contents">
          <div class="header_2"><img src="../assets/svg/pencil.svg"> Header1-1</div>
          dd
        </div>
      </div>
    </div>
    
    <!-- 보유스킬 -->
    <h1 class="header_1"><img src="../assets/svg/hammer-and-wrench.svg"> Header2</h1>
    <!-- <h1 class="header_1"><img src="../assets/svg/hammer-and-wrench.svg"> Skills</h1> -->
    <h1 class="division_line"></h1>
    <div class="contents">
      <div class="group_row box-3">
        <div class="header_2">Header1-1</div>
        dd
      </div>
      <div class="group_row box-3">
        <div class="header_2">Header1-1</div>
        dd
      </div>
      <div class="group_row box-3">
        <div class="header_2">Header1-1</div>
        dd
      </div>
    </div>

    <!-- 프로젝트 -->
    <h1 class="header_1"><img src="../assets/svg/file-box.svg"> Header3</h1>
    <h1 class="division_line"></h1>
    
    <!-- 프로젝트 설명 모달 -->
    <component v-if="isModalViewed" :is="modalComponent" @close-modal="closeAboutModal"></component>

    <!-- 프로젝트 소개 -->
    <div class="group_row box-2" @click="openConfirmModal('cardItem_4', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_4'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
          <div class="group_row modal_button" @click="openAboutModal('automl')" style="width:100%">ddd</div>
        </div>
      </div>
      <div class="card_item">
        <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
        <div class="card_title">title4</div>
        <div class="card_contents">
          안녕하세요.<br>
          반갑습니다.
        </div>
      </div>
    </div>

    <div class="group_row box-2" @click="openConfirmModal('cardItem_3', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_3'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
          <div class="group_row modal_button" @click="openAboutModal('jeju')">ddd</div>
          <a href='https://www.naver.com' target='_blank'>
            <div class="group_row modal_button">
              <img class="svg-icon" src="../assets/svg/github-logo-vector.svg">
            </div>
          </a>
        </div>
      </div>
      <!-- 모달 내용 -->
      <div class="card_item">
        <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
        <div class="card_title">title3</div>
        <div class="card_contents">
          안녕하세요.<br>
          반갑습니다.
        </div>
      </div>
    </div>

    <!-- contact -->
    <h1 class="header_1"><img src="../assets/svg/mailbox.svg"> Header4</h1>
    <!-- <h1 class="header_1"><img src="../assets/svg/mailbox.svg"> Contact</h1> -->
    <h1 class="division_line"></h1>
    <div class="contents">
      <img src="../assets/svg/e-mail.svg" style="width: 20px"> myk0907000@gmail.com<br>
    </div>
  </div>






  <div class="about real_data">
    <h1 style="margin: 50px">웹개발자 김민영 포트폴리오</h1>
    
    <!-- 소개 -->
    <div class="contents">
      <div class="group_row" style="margin-right: 50px">
        <img src="../assets/img/my_pic.png" style="width: 250px">
      </div>
      <div class="group_row contents">
        1년차 웹 개발자 김민영입니다.
      </div>
    </div>
    <!-- https://www.svgrepo.com/collection/twemoji-emojis/1  svg 이모지 사이트-->

    <!-- 경력 -->
    <h1 class="header_1"><img src="../assets/svg/magnifying-glass.svg"> Profile</h1>
    <h1 class="division_line"></h1>
    <div>
      <div class="group_row box-2">
        <div class="contents">
          <div class="header_2"><img src="../assets/svg/books.svg"> 경력</div>
          <div>
            알고그랩 <span style="color: rgb(148, 148, 148); font-size: 18px">&nbsp;2022.10 ~ 현재</span>
            <li>Spring Boot를 이용한 웹 솔루션 제작</li>
            <!-- <li>JavaScript → Vue 라이브러리 변환 작업</li> -->
          </div>
          <div style="margin-top: 10px">
            (주)환경과학기술 <span style="color: rgb(148, 148, 148); font-size: 18px">&nbsp;2017.5 ~ 2022.2</span>
            <li>해양환경 데이터 수집 및 DB 적재</li>
            <li>해양 교육앱 제작(R shiny 웹어플리케이션)</li>
            <!-- <li>ddd</li> -->
          </div>
        </div>
      </div>

      <div class="group_row box-2">
        <div class="contents">
          <div class="header_2"><img src="../assets/svg/graduation-cap.svg"> 학력</div>
          한양대학교 해양융합과학과 <span style="color: rgb(148, 148, 148); font-size: 18px">&nbsp;2015.3 ~ 2017.2 졸업</span><br>
          학점은행제 컴퓨터공학과 <span style="color: rgb(148, 148, 148); font-size: 18px">&nbsp;2013.3 ~ 2015.2 수료</span>
        </div>
        <div class="contents">
          <div class="header_2"><img src="../assets/svg/card-index.svg"> 자격증</div>
          SQLD <span style="color: rgb(148, 148, 148); font-size: 18px">&nbsp;2020.10.06 (한국데이터산업진흥원)</span><br>
          컴퓨터활용능력 2급 <span style="color: rgb(148, 148, 148); font-size: 18px">&nbsp;2016.08.26 (대한상공회의소)</span><br>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="header_2"><img src="../assets/svg/pencil.svg"> 교육</div>
      빅데이터 플랫폼 구축(하둡)과 빅데이터분석(by Spark&Power Bi) & 자바(JAVA)웹개발<br>
      <span style="color: rgb(148, 148, 148); font-size: 18px">&nbsp;2022.02 ~ 2022.08 (더조은아이티아카데미학원)</span><br>
      <li>Spring Framework를 기반으로 웹 페이지 기획, 설계와 데이터베이스 활용을 통해 실무적인 기술을 익히고 빅데이터를 분산처리 할 수 있는 파이썬과 하둡 기술 학습</li>
    </div>
    
    <!-- 보유스킬 -->
    <h1 class="header_1"><img src="../assets/svg/hammer-and-wrench.svg"> Skills</h1>
    <h1 class="division_line"></h1>
    <div class="contents real_data">
      <div class="group_row box-3">
        <div class="header_2"><img src="../assets/svg/browser.svg"> 웹개발</div>
          <li>Spring Framework & JAVA</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>CSS</li>

          <!-- 
          Spring Framework & JAVA
          <li>MVC 패턴을 이용한 웹 페이지 (게시판, 페이징) 구현</li>
          <li>Mybatis를 활용한 데이터베이스 연동</li>
          HTML
          <li>div, span, img, a 등 HTML 태그를 활용한 웹 페이지 구성</li>
          JavaScript
          <li>DOM을 이용하여 HTML 문서의 요소 제어</li>
          <li>카카오API 활용</li>
          CSS
          <li>class와 id를 이용하여 웹 페이지 디자인 제어</li> -->
      </div>
      <div class="group_row box-3">
        <div class="header_2"><img src="../assets/svg/bar-graph.svg"> 데이터</div>
          <li>R</li>
          <li>Python</li>

          <!-- 
          R
          <li>csv, txt, nc파일 등을 데이터프레임으로 변환 후 원하는 형태로 편집하여 시각화</li>
          <li>R Shiny 패키지를 이용하여 웹 앱 제작</li>
          Python
          <li>csv, txt 파일 등을 데이터프레임으로 변환 후 원하는 형태로 편집 및 시각화</li>
          <li>인터넷 크롤링, 셀레니움을 사용하여 데이터 수집</li>
          -->
      </div>
      <div class="group_row box-3">
        <div class="header_2"><img src="../assets/svg/database.svg"> 데이터베이스</div>
          <li>SQL</li>

          <!-- 
          SQL
          <li>데이터베이스를 만들고 필요한 테이블을 생성하여 웹페이지에 활용</li>
          <li>subquery, join문을 활용하여 데이터 조회</li>
          -->
      </div>

    </div>

    <!-- 프로젝트 -->
    <h1 class="header_1"><img src="../assets/svg/file-box.svg"> Header3</h1>
    <!-- <h1 class="header_1"><img src="../assets/svg/file-box.svg"> Projects</h1> -->
    <h1 class="division_line"></h1>
    
    <!-- 프로젝트 설명 모달 -->
    <component v-if="isModalViewed" :is="modalComponent" @close-modal="closeAboutModal"></component>

    <!-- 프로젝트 소개 -->
    <div class="group_row box-2" @click="openConfirmModal('cardItem_4', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_4'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
          <div class="group_row modal_button" @click="openAboutModal('automl')" style="width:100%">자세히 보기</div>
        </div>
      </div>
      <div class="card_item">
        <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
        <div class="card_title">AutoML 솔루션</div>
        <div class="card_contents">
          안녕하세요.<br>
          반갑습니다.
        </div>
      </div>
    </div>

    <div class="group_row box-2" @click="openConfirmModal('cardItem_3', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_3'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
          <div class="group_row modal_button" @click="openAboutModal('jeju')">자세히 보기</div>
          <a href='https://github.com/myk0907/final-project_jejuMap' target='_blank'>
            <div class="group_row modal_button">
              <img class="svg-icon" src="../assets/svg/github-logo-vector.svg">
            </div>
          </a>
        </div>
      </div>
      <!-- 모달 내용 -->
      <div class="card_item">
        <div class="card_img_box"><img src="../assets/img/project/jeju_1.png"></div>
        <div class="card_title">놀당갑서(제주도 여행 추천 사이트)</div>
        <div class="card_contents">
          제주도의 음식점, 카페, 숙박시설 데이터를 수집 및 분석 후 지도에 표출하고, 찜 기능을 이용하여 여행 경로를 확인
        </div>
      </div>
    </div>

    <div class="group_row box-2" @click="openConfirmModal('cardItem_2', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_2'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
          <div class="group_row modal_button" @click="openAboutModal('shop')">자세히 보기</div>
          <a href='https://github.com/myk0907/project_shop' target='_blank'>
            <div class="group_row modal_button">
              <img class="svg-icon" src="../assets/svg/github-logo-vector.svg">
            </div>
          </a>
        </div>
      </div>
      <!-- 모달 내용 -->
      <div class="card_item">
        <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
        <div class="card_title">WWW(화장품 쇼핑몰)</div>
        <div class="card_contents">
          화면이 구현되어 있는 기존 화장품 쇼핑몰 사이트 클론 코딩
        </div>
      </div>
    </div>

    <div class="group_row box-2" @click="openConfirmModal('cardItem_1', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_1'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
          <div class="group_row modal_button" @click="openAboutModal('sealab')">자세히 보기</div>
          <a href='http://shiny.kesti.info/' target='_blank'>
            <div class="group_row modal_button">
              SEALAB
            </div>
          </a>
        </div>
      </div>
      <!-- 모달 내용 -->
      <div class="card_item">
        <div class="card_img_box"><img src="../assets/img/project/sealab_1.png"></div>
        <div class="card_title">해(海)봄 교실 교육 앱</div>
        <div class="card_contents">
          중고등학교 과학 수업에 활용 할 수 있는 웹 페이지
        </div>
      </div>
    </div>

    <!-- contact -->
    <h1 class="header_1"><img src="../assets/svg/mailbox.svg"> Header4</h1>
    <!-- <h1 class="header_1"><img src="../assets/svg/mailbox.svg"> Contact</h1> -->
    <h1 class="division_line"></h1>
    <div class="contents">
      <img src="../assets/svg/e-mail.svg" style="width: 20px"> myk0907000@gmail.com<br>
      <img src="../assets/svg/phone.svg" style="width: 20px"> +82 10-1234-5678 
    </div>
  </div>
</template>

<script>
import ModalAutoML from "./projectAbout/projectModal/ModalProjectAutoML.vue"
import ModalJeju from "./projectAbout/projectModal/ModalProjectJeju.vue"
import ModalShop from "./projectAbout/projectModal/ModalProjectShop.vue"
import ModalSealab from "./projectAbout/projectModal/ModalProjectSealab.vue"

let scrollY=0;

export default {
  components: {
    ModalAutoML,
    ModalJeju,
    ModalShop,
    ModalSealab
  },
  data() {
    return {
      isModalConfirm: null, // 현재 열린 모달을 추적하기 위한 변수
      isModalViewed: true,
      dynamicHTML: '',
      ModalName: null
    };
  },
  methods: {
    openConfirmModal(cardItemId, e) {
      this.isModalConfirm = cardItemId;
      e.stopPropagation(); // 이벤트 전파(stopPropagation)를 중지
    },
    closeConfirmModal() {
      this.isModalConfirm = null;
    },
    openAboutModal(prj) {
      scrollY = window.scrollY || window.pageYOffset; // 현재 스크롤 위치
      window.addEventListener('scroll', this.handleScroll, { passive: false }); // 스크롤 이벤트 캡처링
      this.ModalName = prj;
      this.isModalViewed = true;
    },
    closeAboutModal() {
      window.removeEventListener('scroll', this.handleScroll); // 스크롤 이벤트 제거
      this.isModalViewed = false;
    },
    handleScroll(event) {
      event.preventDefault(); // 스크롤 동작 정지
      window.scrollTo(0, scrollY); // 스크롤 위치 이동
    },
  },
  computed: {
    modalComponent() {
      switch (this.ModalName) {
        case 'automl':
          return "ModalAutoML";
        case 'jeju':
          return "ModalJeju";
        case 'shop':
          return "ModalShop";
        case 'sealab':
          return "ModalSealab";
        default:
          return null;
      }
    },
  },
  mounted() {
    // 컴포넌트가 마운트된 후, 바깥쪽 요소에 클릭 이벤트 리스너를 추가합니다.
    document.addEventListener('click', this.closeConfirmModal);
  }
}
</script>