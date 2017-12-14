<template>
  <div class="footer">
    <router-link v-for="item in navData" :to='item.path' active-class='active'>
      <i class="iconfont" :class="item.icon"></i><span>{{item.text}}</span>
    </router-link>      
  </div>
</template>
<script>
export default {
  name: 'footerBar',
  data () {
    return {
      navData: [
        {
          'icon': 'icon-shouye',
          'activeIcon': '',
          'text': '首页',
          'path': 'home'
        },
        {
          'icon': 'icon-fenlei',
          'activeIcon': '',
          'text': '分类',
          'path': 'fen'
        },
        {
          'icon': 'icon-cart-copy',
          'activeIcon': '',
          'text': '购物车',
          'path': 'cart'
        },
        {
          'icon': 'icon-wode',
          'activeIcon': '',
          'text': '我的',
          'path': 'my'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .footer{
    width:100%;
    position:fixed;
    height:0.5rem;
    background:#fff;
    bottom:0;
    left:0;
    display:flex;
    a{
      flex:1;
      text-align:center;
      text-decoration:none;
      padding-top:0.1rem;
      &.active{
        i{
          color:#801a2a;
        }
        span{
          color:#801a2a;
        }
      }
      i{
        display:block;
        color:#999;
      }
      span{
        color:#999;
      }
    }
  }
</style>