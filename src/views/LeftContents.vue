<template>
  <div class="profile-img">
    <img src="../assets/img/my_pic_hand.png">
  </div>
  
  <div class="left-contents-container" style="margin-top: 50px;">
    <ContentsTitle contentsTitle="CONTACT"/>
    <div class="contents">
      김민영 <br>
      myk0907@naver.com <br>
      <a href='https://github.com/myk0907/' target='_blank'>
        <img src="../assets/svg/github-icon-svgrepo-com.svg" style="width: 20px;">
      </a>
    </div>
  </div>

  <div class="left-contents-container">
    <ContentsTitle contentsTitle="SKILLS"/>
    <FilledBox 
      :filledBoxItems="[
        {filledBoxTitle: 'javaScript', progress: '80'},
        {filledBoxTitle: 'React', progress: '70'},
        {filledBoxTitle: 'Vue', progress: '75'},
        {filledBoxTitle: 'JAVA', progress: '70'},
        {filledBoxTitle: 'PostgreSQL', progress: '80'},
        {filledBoxTitle: 'QGIS', progress: '40'},
      ]"
    />
  </div>

  <div class="left-contents-container">
    <ContentsTitle contentsTitle="자격증"/>
    <span>SQLD</span>
    <span>컴퓨터활용능력 2급</span>
  </div>
</template>


<script>
import ContentsTitle from "./componentsItems/SimpleContentsTitle.vue"
import FilledBox from "./componentsItems/FilledBox.vue"

export default {
  components: {
    ContentsTitle,
    FilledBox,
  }
};
</script>
<style scoped>
.profile-img {
  min-width: 200px;
  min-height: 200px;
  margin-top: 30px;
  /* height: min(120%); */
  aspect-ratio: 1 / 1; /* 정사각형 유지 */
  border-radius: 50%; /* 원형 유지 */
  background-color: white;
  border: 3px solid #EDC307;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 넘치는 부분 숨기기 */
  position: relative;
}


.profile-img img{
  width: 85%;
  height: 85%;
  object-fit: cover; /* 이미지가 꽉 차도록 */
  position: absolute;
  top: 15%;
}
.left-contents-container{
  margin-top: 50px;
  width: 85%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.contents{
  width: 100%; /* 부모 너비에 맞게 설정 */
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어 줄바꿈 (표준) */
  white-space: normal; /* 자동 줄바꿈 활성화 */
  font-size: 16px;
  margin: 0px;
  padding: 0;
  line-height: 200%;
}
</style>