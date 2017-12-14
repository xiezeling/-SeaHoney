<template>
  <div class="search-page">
   <HeaderBar theme="white" :defaultVal="$route.params.searchVal"></HeaderBar>
    <div>
      <NavBar :aaa="aaa" @setTemplate="setTemplate" v-pin="0"></NavBar>
      <transition>
        <component :is="isTemplate" :pageId="pageId"></component>
      </transition> 
    </div>
    <add></add>
    <paixu></paixu>
  </div>
</template>
<script>
  import HeaderBar from '@/components/HeaderBar'
  import NavBar from './component/NavBar'
  import add from './children/add'
  import paixu from './children/paixu'
  export default {
    data () {
      return {
        aaa: [
          {
            'text': '综合排序',
            'type': 1,
            'id': 0
          },
          {
            'text': '销量优先',
            'type': 2,
            'id': 1
          },
          {
            'text': '价格排序',
            'type': 3,
            'id': 2
          }
        ],
        isTemplate: 'add',
        pageId: 0
      }
    },
    components: {
      HeaderBar,
      NavBar,
      add,
      paixu
    },
    methods: {
      setTemplate (typeStr, pageId) {
        this.isTemplate = typeStr
        this.pageId = pageId
      }
    }
  }
</script>
<style lang="" scoped>
  
</style>