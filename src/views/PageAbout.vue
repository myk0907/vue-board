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
    <h1 class="header_1"><img class="svg_icon_h1" src="../assets/svg/magnifying-glass.svg"> Header1</h1>
    <h1 class="division_line"></h1>
    <div>
      <div class="group_row box-2">
        <div class="contents box1">
          <div class="header_2"><img class="svg_icon_h2" src="../assets/svg/books.svg"> Header1-1</div>
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
          <div class="header_2"><img class="svg_icon_h2" src="../assets/svg/graduation-cap.svg"> Header1-1</div>
          dd
        </div>
        <div class="contents box1">
          <div class="header_2"><img class="svg_icon_h2" src="../assets/svg/card-index.svg"> Header1-1</div>
          dd
        </div>
        <div class="contents box1">
          <div class="header_2"><img class="svg_icon_h2" src="../assets/svg/pencil.svg"> Header1-1</div>
          dd
        </div>
      </div>
      
    </div>

    <!-- 보유스킬 -->
    <h1 class="header_1"><img class="svg_icon_h1" src="../assets/svg/hammer-and-wrench.svg"> Header2</h1>
    <h1 class="division_line"></h1>
    <div class="contents">

    </div>

    <!-- 프로젝트 -->
    <h1 class="header_1"><img class="svg_icon_h1" src="../assets/svg/file-box.svg"> Header3</h1>
    <h1 class="division_line"></h1>
    <div class="card_item">
      <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
      <div class="card_title">title</div>
      <div class="card_contents">
        안녕하세요.<br>
        반갑습니다.
      </div>
    </div>
    <div class="card_item" style="cursor: pointer;" onclick="window.open('https://github.com/myk0907/project_shop')">
      <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
      <div class="card_title">title</div>
      <div class="card_contents">
        안녕하세요.<br>
        반갑습니다.
      </div>
    </div>
    <div class="card_item" style="cursor: pointer;" onclick="window.open(https://github.com/myk0907/final-project_jejuMap')">
      <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
      <div class="card_title">title</div>
      <div class="card_contents">
        안녕하세요.<br>
        반갑습니다.
      </div>
    </div>
    <div class="card_item">
      <div class="card_img_box"><img src="../assets/img/test_img.jpg"></div>
      <div class="card_title">title</div>
      <div class="card_contents">
        안녕하세요.<br>
        반갑습니다.
      </div>
    </div>

    <!-- contact -->
    <h1 class="header_1"><img class="svg_icon_h1" src="../assets/svg/mailbox.svg"> Header4</h1>
    <h1 class="division_line"></h1>
    <div class="contents">
      <img src="../assets/svg/e-mail.svg" style="width: 20px"> myk0907000@gmail.com<br>
      <img src="../assets/svg/phone.svg" style="width: 20px"> +82 10-9266-1710 
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // handleMouseOver(event) {
    // const targetElement = event.currentTarget;
    // // targetElement.classList.add('card_hover'); // 클래스 추가
    // console.log(targetElement);
    // }
  }
}
</script>