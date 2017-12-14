<template>
  <div class="con">
    <dl v-for="items in datas">
      <dt><img :src="items.icon"></dt>
      <dd>{{items.text}}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datas: [
        {
          'icon': '//img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe',
          'text': '新人礼包'
        },
        {
          'icon': '//img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB',
          'text': '领取积分'
        },
        {
          'icon': '//img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57',
          'text': '邀请有礼'
        },
        {
          'icon': '//img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY',
          'text': '每周新品'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
  .con{
    width:100%;
    display:flex;
    background:#fff;
    margin-top:0.1rem;
    dl{
      flex:1;
      text-align:center;
      padding-bottom:0.12rem;
      dt{
        img{
          width:100%;
        }
      }
      dd{
        font-size:0.16rem;
      }
    }
  }  
</style>
