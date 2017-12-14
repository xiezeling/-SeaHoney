<template>
    <div class="fen-page">
      <nav>
        <a 
          href="javascript:;"
          v-for="iteam in tabs"
          :class="{active:activeIndex == iteam.id}"
          :key="iteam.id"
          @click="tabClick(iteam.id,iteam.type)"
        >{{iteam.text}}
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
    tabs: {
      default: []
    }
  },
  methods: {
    tabClick (id, type) {
      let typeStr = type === 1 ? 'banner' : 'pinpai'
      this.activeIndex = id
      this.$emit('setTemplate', typeStr, id)
    }
  }
}
</script>
<style scoped lang="less">
.fen-page{
    width:100%;
    background:#fff;
    heigth:0.4rem;
    >nav{
      heigth:0.4rem; 
      line-height:0.4rem;
      text-align:center;
      padding-top:0.13rem;
      >a{
        text-decoration:none;
        color:#9a9a9a;
        font-size:0.12rem;
        padding:0.15rem 0.15rem;
        position:relative;  
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
  }
</style>