<template>
  <div class="Header-bar" :class='[theme]'>
    <p>
      <span><i class="iconfont icon-sousuo"></i></span>
      <input type="text" placeholder="搜索宝贝"  v-model='searchVal'>
      <a href="javascript:;" v-show="clear" @click="close">x</a>
    </p>
    <router-link :to="{name:'Search',params:{'searchVal':searchVal}}" class="search">搜索</router-link>
    <!--<div class="search" @click="search"></div>-->    
  </div>
</template>
<script>
  export default {
    name: 'HeaderBar',
    props: {
      theme: {
        default: 'black' // || 'white'
      },
      defaultVal: {
        default: ''
      }
    },
    data () {
      return {
        searchVal: this.defaultVal
      }
    },
    computed: {
      clear () {
        return this.searchVal.length >= 1
      }
    },
    methods: {
      close () {
        this.searchVal = ''
      }
    }
  }
</script>
<style lang="less" scoped>
  .Header-bar{
    width:100%;
    height:0.44rem;    
    display:flex;
    border-bottom:1px solid #ccc;
    &.black{
      background:#242424; 
    }
    &.white{
      background:#ffffff; 
      .search{
        color:#000;
        line-height:0.44rem;
        padding-left:0.14rem;
        cursor:pointer;
      }
    }
    p{
      width:80%;
      height:0.28rem;
      margin-left:5%;
      padding-top:0.08rem;
      position:relative;
      input{
        display:block;
        width:90%;
        height:0.28rem;
        outline:none;
        border:none;
        background:#1a1a1a;
        padding-left:0.32rem;    
        color:#ffffff;        
      }
      a{
        display:block;
        width:0.15rem;
        height:0.15rem;
        position:absolute;
        right:0;
        top:0.15rem;
        color:#ccc;
        background:#1a1a1a;
        text-align:center;
        border-radious:50%;
      }
      span{
        position:absolute;
        left:0.1rem;
        top:0.12rem;
        i{
          color:#ffffff;
        }
      }
    }
    .search{
      color:#ffffff;
      line-height:0.44rem;
      padding-left:0.14rem;
      cursor:pointer;
    }
    &.white{
      background:#ffffff; 
      p{
      width:80%;
      height:0.28rem;
      margin-left:5%;
      padding-top:0.08rem;
      position:relative;
      input{
        display:block;
        width:90%;
        height:0.28rem;
        outline:none;
        border:none;
        background:#ffffff;
        padding-left:0.32rem; 
        border:1px solid #ccc; 
        color:#000;     
      }
      a{
        display:block;
        width:0.15rem;
        height:0.15rem;
        position:absolute;
        right:0;
        top:0.15rem;
        color:#fff;
        background:#ccc;
        text-align:center;
        border-radius:50%;
        lin-height:0.15rem;
      }
      span{
        position:absolute;
        left:0.1rem;
        top:0.12rem;
        i{
          color:#000;
        }
      }
    }
    
    }
  }
</style>