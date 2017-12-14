<template>
  <div class="fen">
    <div>
      <NavBar :tabs="tabs" @setTemplate="setTemplate" v-pin="0"></NavBar>
      <transition>
        <component :is="isTemplate" :pageId="pageId"></component>
      </transition> 
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import footerBar from '@/components/footerBar'
import banner from './children/banner'
import pinpai from './children/pinpai'
import NavBar from './component/NavBar'
export default {
  data () {
    return {
      tabs: [
        {
          'text': '分类',
          'type': 1,
          'id': 0
        },
        {
          'text': '品牌',
          'type': 2,
          'id': 1
        }
      ],
      isTemplate: 'banner',
      pageId: 0
    }
  },
  components: {
    footerBar,
    banner,
    pinpai,
    NavBar
  },
  methods: {
    setTemplate (typeStr, pageId) {
      this.isTemplate = typeStr
      this.pageId = pageId
    }
  }
}
</script>