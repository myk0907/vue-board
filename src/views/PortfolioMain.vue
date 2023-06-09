<!-- PageAbout.vue -->
<template>
  <div class="about">
    <h1 style="margin: 50px">This is an about page</h1>
    
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
            가나다라마바사아자차카타파하가갸거겨고교구규그기카캬커켜코쿄쿠큐크키
            <li>ddd</li>
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
    <h1 class="division_line"></h1>
    <div class="contents">

    </div>

    <!-- 프로젝트 -->
    <h1 class="header_1"><img src="../assets/svg/file-box.svg"> Header3</h1>
    <h1 class="division_line"></h1>
    
    <!-- 프로젝트 설명 모달 -->
    <component v-if="isModalViewed" :is="modalComponent" @close-modal="closeAboutModal"></component>

    <!-- 프로젝트 소개 -->
    <div class="group_row box-2" @click="openConfirmModal('cardItem_1', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_1'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
          <div class="group_row modal_button" @click="openAboutModal('automl')" style="width:100%">ddd</div>
        </div>
      </div>
      <div class="card_item">
        <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
        <div class="card_title">title1</div>
        <div class="card_contents">
          안녕하세요.<br>
          반갑습니다.
        </div>
      </div>
    </div>

    <div class="group_row box-2" @click="openConfirmModal('cardItem_2', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_2'" @close-modal="closeConfirmModal()">
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
        <div class="card_title">title2</div>
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
          <div class="group_row modal_button" @click="openAboutModal('shop')">ddd</div>
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

    <div class="group_row box-2" @click="openConfirmModal('cardItem_4', $event)">
      <!-- 확인창 모달 -->
      <div v-if="isModalConfirm === 'cardItem_4'" @close-modal="closeConfirmModal()">
        <div class="card_item card_overlay"></div>
        <div class="modal_confirm">
          <div class="group_row modal_button" @click="openAboutModal('sealab')">ddd</div>
          <!-- <a href='https://www.naver.com' target='_blank'> -->
            <div class="group_row modal_button">
              SEALAB
            </div>
          <!-- </a> -->
        </div>
      </div>
      <!-- 모달 내용 -->
      <div class="card_item">
        <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
        <div class="card_title">title4</div>
        <div class="card_contents">
          안녕하세요.<br>
          반갑습니다.
        </div>
      </div>
    </div>

    <!-- contact -->
    <h1 class="header_1"><img src="../assets/svg/mailbox.svg"> Header4</h1>
    <h1 class="division_line"></h1>
    <div class="contents">
      <img src="../assets/svg/e-mail.svg" style="width: 20px"> myk0907000@gmail.com<br>
      <!-- <img src="../assets/svg/phone.svg" style="width: 20px"> +82 10-9266-1710  -->
    </div>
  </div>
</template>

<script>
import ModalAutoML from "./projectAbout/projectModal/ModalProjectAutoML.vue"
import ModalJeju from "./projectAbout/projectModal/ModalProjectJeju.vue"
import ModalShop from "./projectAbout/projectModal/ModalProjectShop.vue"
import ModalSealab from "./projectAbout/projectModal/ModalProjectSealab.vue"

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
      const scrollY = window.scrollY || window.pageYOffset;
      window.scrollTo(0, scrollY);
      document.body.style.overflow = 'hidden'; // body 스크롤기능 hidden
      this.ModalName = prj;
      this.isModalViewed = true;
    },
    closeAboutModal() {
      document.body.style.overflow = 'auto'; // body 스크롤기능
      this.isModalViewed = false;
    }
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