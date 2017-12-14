<template>
  <div class="tuijian">
    <div><img :src="val.img" v-for="val in tuijian"></div>
    <div><img :src="val.img" v-for="val in tuijianRight"></div>
  </div>
</template>
<script>
export default {
  props: {
    tuijian: {
      default: []
    },
    tuijianRight: {
      default: []
    }
  }
}
</script>
<style lang="less" scoped>
  .tuijian{
    width:100%;
    display:flex;
    div{
      width:50%;
      img{
        display:block;
        width:100%;
      }
    }
  }
</style>
