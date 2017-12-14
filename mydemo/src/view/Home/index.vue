<template>
  <div class="home-page">
    <HeaderBar></HeaderBar>
    <NavBar :navList="navList" @setTemplate="setTemplate" v-pin="0"></NavBar>
    <transition>
      <component :is="isTemplate" :pageId="pageId"></component>
    </transition>
    <footerBar></footerBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import footerBar from '@/components/footerBar'
import NavBar from './component/NavBar'
import LablePage from './children/Label'
import HotPage from './children/Hot'
export default {
  data () {
    return {
      navList: [
        {
          text: '推荐',
          type: 1,
          id: 0
        },
        {
          text: '居家',
          type: 2,
          id: 1
        },
        {
          text: '美妆',
          type: 3,
          id: 2
        },
        {
          text: '个护',
          type: 2,
          id: 3
        },
        {
          text: '箱包',
          type: 2,
          id: 4
        },
        {
          text: '家电',
          type: 2,
          id: 5
        },
        {
          text: '厨房',
          type: 2,
          id: 6
        },
        {
          text: '配饰',
          type: 2,
          id: 7
        },
        {
          text: '零食',
          type: 2,
          id: 8
        },
        {
          text: '母婴',
          type: 2,
          id: 9
        },
        {
          text: '家具',
          type: 2,
          id: 10
        }
      ],
      isTemplate: 'HotPage',
      pageId: 0
    }
  },
  components: {
    HeaderBar,
    HotPage,
    NavBar,
    LablePage,
    footerBar
  },
  methods: {
    setTemplate (typeStr, pageId) {
      this.isTemplate = typeStr
      this.pageId = pageId
    }
  },
  created () {
    this.$http.get('/api/homeNav').then(res => {
      console.log(res)
      this.navList = res.data
    }, error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
</style>