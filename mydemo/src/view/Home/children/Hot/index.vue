<template>
  <div class="tab-bar">
    <bannerList></bannerList>     
    <menuMy></menuMy>
    <Logo :arr="arr"></Logo>
    <h5>严选品牌</h5>
    <one :crr="crr"></one>
    <h5>推荐好物</h5>
    <tuijian-nav :tuijian="tuijian" :tuijianRight="tuijianRight"></tuijian-nav>
    <h6>大家都在买</h6>
    <buy :buy="buy"></buy>
  </div>
</template>
<script>
import bannerList from './components/banner'
import menuMy from './components/menuMy'
import Logo from './components/Logo'
import one from './components/one'
import tuijianNav from './components/tuijian'
import buy from './components/buy'
export default {
  data () {
    return {
      arr: [
        {
          'img': '//img.haimi.com/Fpt1eouzu2Tmc5C3JMoeN49-4CLe'
        },
        {
          'img': '//img.haimi.com/FsSof6YcsmmFomdszaRVSy8eqDNO'
        }
      ],
      crr: [
        {
          'img': '//img.haimi.com/FgDc_2t_n2s_5y6sJXq_HC52toxk'
        },
        {
          'img': '//img.haimi.com/Fl1dPmAViO5wHlnVKCeX44aqK25X'
        }
      ],
      tuijian: [
        {
          'img': '//img.haimi.com/FoITI-pBFngg5WMnfs-g5D_eGx7w'
        },
        {
          'img': '//img.haimi.com/FnMGXi5SqpNGwunxy9KQAzG4fD1o'
        },
        {
          'img': '//img.haimi.com/FiYaccwV02QtUfFVTHuJ3L8sWKdu'
        }
      ],
      tuijianRight: [
        {
          'img': '//img.haimi.com/FuWX5x4IxMNvPWDhtFy16Cixnm_P'
        },
        {
          'img': '//img.haimi.com/FvIiZyy9v7fJng1tY-11tHXRD7ZU'
        },
        {
          'img': '//img.haimi.com/FhSIFoj26b7s_23zjavGQVVxoYIV'
        }
      ],
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
    bannerList,
    menuMy,
    Logo,
    one,
    tuijianNav,
    buy
  },
  created () {
    this.$http.get('/api/buy').then(res => {
      console.log(res)
      this.buy = res.data
    }, error => {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="less">
  .tab-bar{
    width:100%;
    img{
      width:100%;
    }
    h6{
      width:100%;
      height:49px;
      line-height:49px;
      text-align:center;
      font-size: .2rem;
      background:#f8f8f8;
    }
    h5{
      width:100%;
      height:49px;
      line-height:49px;
      text-align:center;
      font-size: .2rem;
      background:#fff;
    }
  }
</style>