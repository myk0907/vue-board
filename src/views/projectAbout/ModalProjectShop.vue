<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <h1 style="margin: 50px">This is an about page [2] </h1>
    
      <!-- 소개 -->
      <div class="contents">
        <div class="group_row box1" style="margin-right: 50px">
          <img src="../../assets/img/test_img.jpg">
        </div>
        <div class="group_row contents box1">
          모달이다아아아아ㅏㅏㅏ아아아앙아아아아아ㅏㅇ아아아아아아아ㅏ
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
