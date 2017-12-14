<template>
   <img :src="msg">
</template>
<script>
  export default {
    props: {
      msg: {
        default: []
      }
    }
  }
</script>
<style lang="less" scoped>
  img{
    width:100%;
    height:100%;
  }
</style>