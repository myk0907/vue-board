<template>
  <PageHeader/> <!-- 헤더 컴포넌트 -->
  <router-view/>  <!-- 페이지 이동이 표시될 곳 -->
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
  width: 1280px;
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