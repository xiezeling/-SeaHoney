<template>
  <div class="shop">
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
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '@/components/footerBar'
export default {
  data () {
    return {
      buy: [
        {
          'img': '//img.haimi.com/FoGgYwe8s3gMOaaHwh732a2wFSbQ?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FjuLjnxZx5OkjeQbyWtR1GovfDRu?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FlJimK0fTAUl38M_aS9mfnrQTqf4?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Flya_eeVgJb54MzsWWOipck20R_r?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FqIwr5Uqy8oYdrBEeS8Kv407LTJE?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FhRtC5V-YN92tC-2ggsD6O-qQf62?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fp6PHXhD_G7htKxa2X5fwbS6cIri?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fn2dpYAtfM721i84Xn4n6LIDZtE8?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fqrm2oFJX69DM8nfLvoy9NHCgIW0?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/haimi-product-yanxuan-0-5490?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fqsf-XSvalYF4ummUR9CBHi4ps15?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fqrm2oFJX69DM8nfLvoy9NHCgIW0?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fp_MXVA0COdImxT0SaLEByFz514S?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fgg3kj3NfXSyZd3CDrxpyGh7rqmO?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FoDOouHs1db60cnEng0cDejvCSVI?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fotog5pzbC2Sg0dDA2VNIvlsdV8C?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FgRPFw-1LUh7DO58J1iDnez8dBPM?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FpxuUhB77PBQlsX9RfPvs8l_0R2n?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FtMV2chRkbF2tfyoa1WxlT9zihSX?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        }
      ]
    }
  },
  components: {
    footerBar
  }
}
</script>
<style lang="less">
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