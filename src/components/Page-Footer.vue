<!-- PageFooter.vue -->
<template>
  <footer>
    <div class="custom-footer-bg">
      <div class="custom-footer">
        <div class="group_row contents">
          <div>
            <img src="../assets/svg/e-mail.svg" style="width: 20px; margin-right: 10px;"> myk0907000@gmail.com <br>
            <!-- <img src="../assets/svg/phone.svg" style="width: 20px; margin-right: 10px;"> +82 10-1234-5678 <br> -->
          </div>
          <div style="font-size: 16px; margin-top: 10px;">
            Copyrightⓒ2023 by Minyoung. All pictures cannot be copied without permission.
          </div>
        </div>

        <!-- 깃 로고 -->
        <div class="group_row" style="display: flex; align-items: center;">
          <a href='https://github.com/myk0907/' target='_blank'>
            <img src="../assets/svg/github-icon-svgrepo-com.svg" style="width: 40px; filter: brightness(0) invert(1);">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.custom-footer-bg {
  /* background-color: #24272D;  */
  height: 120px; color:white; 
  /* margin-top: 50px; */
  padding: 16px;
  display: flex;
  align-items: center;
}
.custom-footer {
  width: 1280px; 
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

</style>