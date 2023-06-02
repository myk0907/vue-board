<!-- PageAbout.vue -->
<template>
  <div class="about">
    <h1 style="margin: 50px">This is an about page</h1>
    
    <!-- 소개 -->
    <div class="contents">
      <div class="group_row box1" style="margin-right: 50px">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class="group_row contents box1">
        가나다라마바사아자차카타파하가갸거겨고교구규그기카캬커켜코쿄쿠큐크키
      </div>
    </div>
    <!-- https://www.svgrepo.com/collection/twemoji-emojis/1  svg 이모지 사이트-->

    <!-- 경력 -->
    <h1 class="header_1"><img src="../assets/svg/magnifying-glass.svg"> Header1</h1>
    <h1 class="division_line"></h1>
    <div>
      <div class="group_row box-2">
        <div class="contents box1">
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
        <div class="contents box1">
          <div class="header_2"><img src="../assets/svg/graduation-cap.svg"> Header1-1</div>
          dd
        </div>
        <div class="contents box1">
          <div class="header_2"><img src="../assets/svg/card-index.svg"> Header1-1</div>
          dd
        </div>
        <div class="contents box1">
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
    
    <!-- 확인창 모달 -->
    <!-- <div class="modal_confirm" v-if="isModalConfirm" @close-modal="isModalConfirm = false">
      <div>ddddddddddd</div>
      <button @click="isModalViewed = true">ddd</button>
      <button>ddd</button>
    </div> -->

    <!-- 프로젝트 설명 모달 -->
    <ModalView v-if="isModalViewed" @close-modal="closeIntroModal">
    </ModalView>

    <div class="group_row box-2" id="cardItem_1" @click="openConfirmModal($event)">
      <div v-html="dynamicHTML"></div>
      <div class="card_item" id="cardContent_1" :style="customStyles">
        <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
        <div class="card_title">title1</div>
        <div class="card_contents">
          안녕하세요.<br>
          반갑습니다.
        </div>
      </div>
    </div>

    <div class="group_row box-2" id="cardItem_2" @click="openConfirmModal($event)">
      <div class="card_item" id="cardContent_2" :style="customStyles">
        <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
        <div class="card_title">title1</div>
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
      <img src="../assets/svg/phone.svg" style="width: 20px"> +82 10-9266-1710 
    </div>
  </div>
</template>

<script>
import ModalView from "./projectIntro/ModalProjectAutoML.vue"

export default {
  components:{
    ModalView
  },
  data() {
    return {
      isModalViewed: false,
      isModalConfirm: false,
      dynamicHTML: ''        
    };
  },
  methods: {
    openConfirmModal(e) {
      const cardItemId = e.currentTarget.id
      const confirmModalId = "confirmModalId_"+cardItemId.split('_')[1];
      const confirmModalElement = document.getElementById(confirmModalId);
      console.log(confirmModalElement)
      this.dynamicHTML = '<div class="modal_confirm" v-if="isModalConfirm" @close-modal="isModalConfirm = false">'
                        +   '<div>ddddddddddd</div>'
                        +   '<button @click="isModalViewed = true">ddd</button>'
                        +   '<button>ddd</button>'
                        + '</div>';
      // this.isModalConfirm = true;
      e.stopPropagation(); // 이벤트 전파(stopPropagation)를 중지
    },
    closeConfirmModal() {
    this.isModalConfirm = false;
    },
    closeIntroModal() {
      this.isModalConfirm = false;
      this.isModalViewed = false;
    }
  },
  mounted() {
    // 컴포넌트가 마운트된 후, 바깥쪽 요소에 클릭 이벤트 리스너를 추가합니다.
    document.addEventListener('click', this.closeConfirmModal);
  }
}
</script>