<template>
  <div class="fen-page">
    <div v-for="iteam in bannerList">
      <img :src="iteam.img">
      <p>
        <a v-for="i in iteam.arr">{{i.text}}</a>
      </p>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      bannerList: [
        {
          'img': '//img.haimi.com/FloxuBkDf7JLo-AtEqLGRRnhAxJn',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        },
        {
          'img': '//img.haimi.com/FoXDKmO-JoZqbHyGfCcOQFeb0Jit',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        },
        {
          'img': '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        },
        {
          'img': '//img.haimi.com/FqdLiXEI16k6T2WEivYT7NhZYgGD',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        },
        {
          'img': '//img.haimi.com/FhJPFBPHwBExbG-O9o_Jb7KWjiMD',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        },
        {
          'img': '//img.haimi.com/Frx1nTQbp06lG2ecUpC87lf5ii53',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        },
        {
          'img': '//img.haimi.com/FosWyVnD1RkUsv0BqsRxTHY52qdN',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        },
        {
          'img': '//img.haimi.com/Fls0rowTnDdfI8b4lgoJ9qt7A7Vz',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        },
        {
          'img': '//img.haimi.com/Fq1FZ9-wG_stf7Z-wjsXP23mJF02',
          'arr': [
            {
              'text': '面膜'
            },
            {
              'text': '面霜乳液'
            },
            {
              'text': '眼霜'
            },
            {
              'text': '精华'
            },
            {
              'text': '爽肤水'
            },
            {
              'text': '卸妆'
            },
            {
              'text': '洁面'
            },
            {
              'text': '隔离'
            },
            {
              'text': '精油'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .fen-page{
    width:100%;
    background:#fff;
    div{
      >img{
        width:100%;
        height:100%;
      }
      p{
        width:100%;
        a{
          display:inline-block;
          font-size:0.15rem;
          heigth:0.27rem;
          border:1px solid  #eeeeee;
          padding:0.08rem 0.11rem;
          margin-left:0.13rem;
          margin-top:0.09rem;
        }
      }
    }
  }
</style>