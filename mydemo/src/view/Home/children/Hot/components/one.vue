<template>

  <div class="once">
    <div class="left">
      <img v-for="iteam in crr" :src="iteam.img">
    </div>
    <div>
      <img src="//img.haimi.com/Fo6aIswHZTuLTpc1zuFQGT59wfOv">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    crr: {
      default: []
    }
  }
}
</script>
<style scoped lang="less">
  .once{
    width:100%;
    display:flex;
    div{
      flex:1;
      img{
        display:block;
        width:100%;
        height:100%;
      }
    }
    .left{
      img{
        width:100%;
        height:50%;
      }
    }
  }
</style>
