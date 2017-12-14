<template>
    <div class="buy">
      <div>
        <dl v-for="val in buy">
          <dt><img :src="val.img"></dt>
          <dd>
            <p>{{val.text}}</p>
            <p>{{val.price}}</p>
          </dd>
        </dl>
      </div>
      <div>
        <dl v-for="val in buy">
          <dt><img :src="val.img"></dt>
          <dd>
            <p>{{val.text}}</p>
            <p>{{val.price}}</p>
          </dd>
        </dl>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    buy: {
      default: []
    }
  }
}
</script>
<style scoped lang="less">
  .buy{
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
