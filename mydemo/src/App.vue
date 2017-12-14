<template>
  <div id="app">
    <router-view/>
    <div id="loading-box"></div>
  </div>
</template>

<script>
import './ulits/http'
import '@/static/font/iconfont.css'
export default {
  name: 'app'
}
</script>
<style>
*{
  margin:0;
  padding:0;
  list-style:none;
  font-family:"华文楷体";
}
html{
  font-size:100px;
}
body{
  font-size:0.12rem;
}
html,body,#app{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  background:#f8f8f8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
