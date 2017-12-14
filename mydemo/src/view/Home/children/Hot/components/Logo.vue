<template>
  <div class="avite">
      <a href="javascript:;" v-for="item in arr"><img :src='item.img'></a>
  </div>
</template>
<script>
export default {
  props: {
    arr: {
      default: []
    }
  }
}
</script>
<style scoped lang="less">
  .avite{
    width:100%;
    img{
      margin-top:0.1rem;
      width:100%;
    }
  }
</style>
