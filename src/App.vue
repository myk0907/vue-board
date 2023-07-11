<template>
  <PageHeader/> <!-- 헤더 컴포넌트 -->
  <div class="custom-body">
    <router-view/>  <!-- 페이지 이동이 표시될 곳 -->
  </div>
  <PageFooter/> <!-- 푸터 컴포넌트 -->
</template>

<script>
import PageHeader from '@/components/Page-Header'
import PageFooter from '@/components/Page-Footer'

export default {
  name: 'App',
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
.custom-body {
  width: 1280px; /* 너비를 1280px로 고정 */
  margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
}

</style>