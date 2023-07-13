<template>
  <PageHeader/>
  <!-- <div class="custom-body"> -->
    <router-view/>
    <!-- </div> -->
  <div :class="pageBackgroundColorClass">
    <PageFooter/>
  </div>
</template>

<script>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

import PageHeader from '@/components/Page-Header'
import PageFooter from '@/components/Page-Footer'

export default {
  name: 'App',
  
  setup() {

    const route = useRoute();
    let pageBackgroundColorClass = ref('custom-footer-bg-blue');
  
    watch(
			() => route,
			(from) => {
        // path에 따라 푸터 배경 색 변경
        let currentPage = from.path;
        if(currentPage === '/'){
          pageBackgroundColorClass.value = "custom-footer-bg-blue"
        } else {
          pageBackgroundColorClass.value = "custom-footer-bg-black"
        }

			},
      {
        deep: true
      }
    );
    
    return {
      pageBackgroundColorClass,
    };
  },
  components: {
    PageFooter,
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* width: 1280px; */
  margin: 0 auto;
}

#nav {
  padding: 30px;
  transform: scale(1.1);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>