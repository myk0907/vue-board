<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <h1 style="margin: 50px">This is an about page [1] </h1>
    
      <!-- 소개 -->
      <div class="contents">
        <div class="group_row box1" style="margin-right: 50px">
          <img src="../../assets/img/test_img.jpg">
        </div>
        <div class="group_row contents box1">
          가나다라마바사아자차카타파하가갸거겨고교구규그기카캬커켜코쿄쿠큐크키
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
