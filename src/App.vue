<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: { Header }
}
</script>
<style>
#app {
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
}
.content {
  padding-top: 65px;
}
body {
  margin: 0;
  padding: 0;
}
body, html, #app {
  margin: 0;
  padding: 0;
  background-color: #121212; 
  color: #fff;
  min-height: 100vh;
}

</style>