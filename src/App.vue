<template>
  <div id="app">
 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/style/reset');
#app {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#app::-webkit-scrollbar {
  display: none;
}
p{
  line-height: 36px;
}
</style>
