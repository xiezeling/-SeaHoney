<template>
  <div class="add-page">
    <dl v-for="item in addList">
      <dt><img :src="item.img"></dt>
      <dd>
        <p>{{item.ubras}}</p>
        <p>{{item.price}}</p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      addList: [
        {
          'img': '//img.haimi.com/FgCMylNAeDVIH9OJfxAh-gLR3QVB?imageView2/1/w/375/h/375',
          'ubras': '经典款无痕内衣',
          'price': '¥299.00'
        },
        {
          'img': '//img.haimi.com/FgCMylNAeDVIH9OJfxAh-gLR3QVB?imageView2/1/w/375/h/375',
          'ubras': '经典款无痕内衣',
          'price': '¥299.00'
        },
        {
          'img': '//img.haimi.com/FgCMylNAeDVIH9OJfxAh-gLR3QVB?imageView2/1/w/375/h/375',
          'ubras': '经典款无痕内衣',
          'price': '¥299.00'
        },
        {
          'img': '//img.haimi.com/FgCMylNAeDVIH9OJfxAh-gLR3QVB?imageView2/1/w/375/h/375',
          'ubras': '经典款无痕内衣',
          'price': '¥299.00'
        },
        {
          'img': '//img.haimi.com/FgCMylNAeDVIH9OJfxAh-gLR3QVB?imageView2/1/w/375/h/375',
          'ubras': '经典款无痕内衣',
          'price': '¥299.00'
        },
        {
          'img': '//img.haimi.com/FgCMylNAeDVIH9OJfxAh-gLR3QVB?imageView2/1/w/375/h/375',
          'ubras': '经典款无痕内衣',
          'price': '¥299.00'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .add-page{
    width:100%; 
    display:flex;  
    flex-wrap:wrap;
    dl{
      width:50%;   
      dt{
        img{
          width:100%;
        }
      }
      dd{
        p{
          font-size:0.15rem;
        }
      }
    }
  }
</style>