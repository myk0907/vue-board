<template>
  <div class="card_item">
    <div class="card_img_box"><img :src="imgSrc" /></div>
    <div class="card_title">{{ cardTitle }}</div>
    <div class="card_contents">
      {{ cardContents }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
    },
    cardTitle: {
      type: String,
      default: ""
    },
    cardContents: {
      type: String,
      default: ""
    }
  },
  data (){
    return{

    }
  }
};
</script>