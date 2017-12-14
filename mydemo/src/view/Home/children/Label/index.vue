<template>
    <div class="tab-bar">
      <banner :msg='msg'></banner>
      <h5>居家</h5>
      <nav-list :navList='navList'></nav-list>
    </div>
</template>

<script>
import banner from './components/banner'
import navList from './components/navList'
export default {
  data () {
    return {
      msg: '//img.haimi.com/FsGUYUCWZvDNBZHBEKSfUsDgVKQ2',
      navList: [
        {
          'img': '//img.haimi.com/FhEiGmVLqj4aNtfqI16fCRxB93ze?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fp_MXVA0COdImxT0SaLEByFz514S?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FvtLnLOTljJNxtX0CGnrjZP-Wjqd?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fu5K3I4y0QI0T0ocMl7HfWJfvcHX?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FkA2IXPu6KvMdAC5XEmzGCv1Peb7?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FuGjSFJRnsT3YlgxVHXKGvPkZJ0J?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FhEiGmVLqj4aNtfqI16fCRxB93ze?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fp_MXVA0COdImxT0SaLEByFz514S?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FvtLnLOTljJNxtX0CGnrjZP-Wjqd?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/Fu5K3I4y0QI0T0ocMl7HfWJfvcHX?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FkA2IXPu6KvMdAC5XEmzGCv1Peb7?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        },
        {
          'img': '//img.haimi.com/FuGjSFJRnsT3YlgxVHXKGvPkZJ0J?imageView2/1/w/375/h/375',
          'text': 'Breo倍轻松医用亲肤硅胶洗脸仪',
          'price': '¥99'
        }
      ]
    }
  },
  components: {
    banner,
    navList
  }
}
</script>
<style scoped lang="less">
  .tab-bar{
    width:100%;
    img{
      width:100%;
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