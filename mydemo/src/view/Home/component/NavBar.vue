<template>
    <div class="nav-bar">
      <nav>
        <a 
          href="javascript:;"
          v-for="iteam in navList"
          :class="{active:activeIndex == iteam.id}"
          :key="iteam.id"
          @click="tabClick(iteam.id,iteam.type)"
        >{{iteam.name}}
        </a>
      </nav>
    </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: 0
    }
  },
  props: {
    navList: {
      default: []
    }
  },
  methods: {
    tabClick (id, type) {
      let typeStr = type === 1 ? 'HotPage' : 'LablePage'
      this.activeIndex = id
      this.$emit('setTemplate', typeStr, id)
    }
  }
}
</script>
<style scoped lang="less">
.nav-bar{   
  background:#fff;
  width: 100%;
  z-index: 100;
  overflow:auto;
  nav{
    display:-webkit-box;
  }
  a{
    padding: 0 10px;
    height: 30px;
    line-height:30px;
    color: #000;
    display: block;
    position:relative;
    text-decoration:none;
    &.active{
      &::after{
        content: '';
        width: 100%;
        height: 2px;
        background:#000;
        display:block;
        position: absolute;
        bottom:0;
        left:0;
      }
    }
  }
}
</style>