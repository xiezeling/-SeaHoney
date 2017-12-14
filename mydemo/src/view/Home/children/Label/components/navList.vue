<template>
  <div class="con">
    <div>
      <dl v-for="item in navList">
        <dt><img :src="item.img"></dt>
        <dd>
          <p>{{item.text}}</p>
          <p>{{item.price}}</p>
        </dd>
      </dl>
    </div>
    <div>
      <dl v-for="item in navList">
        <dt><img :src="item.img"></dt>
        <dd>
          <p>{{item.text}}</p>
          <p>{{item.price}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      navList: {
        default: []
      }
    }
  }
</script>
<style lang="less" scoped>
  .con{
    width:100%;
    display:flex;
    div{
      flex:4;
      margin-right:0.05rem;
      dl{
        padding:0.1rem 0;
        dt{
          img{
            width:100%;
            height:100%;
          }
        }
        dd{
          background:#fff;
          p{
            font-size:0.12rem;
            padding-top:0.05rem;
          }
        }
      }
    }
    div:nth-child(2){
      margin-left:0.05rem;
    }      
  }
</style>