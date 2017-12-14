<template>
  <div class="loading-box" v-show="isLoading">
    <span class="loading">
      <i></i>
      <b>正在加载...</b>
    </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    show () {
      this.isLoading = true
    },
    hide () {
      this.isLoading = false
    }
  }
}
</script>
<style lang="less" scoped>
.loading-box{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  z-index: 1000;
  .loading {
    display: block;
    text-align: center;
    i{
      width: 20px;
      height: 20px;
      display: block;
      background: #f00;
      margin: 10px auto;
      -webkit-animation: rotateLoading 1s linear infinite;
    }
    b {
      color: #fff;
    }
  }
}

@-webkit-keyframes rotateLoading {
  from {
    -webkit-transform: rotate(0deg)
  }
  to {
    -webkit-transform: rotate(360deg)
  }
}
</style>