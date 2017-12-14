<template>
  <div class="pinbai-page">
    <dl v-for="iteam in pinpai">
      <dt><img :src="iteam.img"></dt>
      <dd>
        <P>{{iteam.title}}</p>
        <P>{{iteam.text}}</p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pinpai: [
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '////img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Fuqtzw_4g62P_RqlbPzKrSH9ZNZ1',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/FscqPdPEAwBojaXc36dx2ps7HD2c',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '////img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        },
        {
          'img': '//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN',
          'title': '日默瓦',
          'text': '复古知名忘记朝拜'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .pinbai-page{
    width:100%; 
    display:flex;  
    flex-wrap:wrap;
    dl{
      width:33.3%;     
      dt{
        img{
          width:100%;
        }
      }
      dd{
        text-align:center;
        p{
          font-size:0.15rem;
        }
      }
    }
  }
</style>