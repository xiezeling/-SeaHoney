<template>
  <swiper :options="swiperOption">
      <swiper-slide v-for="val in brr"><img :src="val.msg"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1000
      },
      brr: [
        {
          msg: '//img.haimi.com/Fm3ZK_jNvRsKLfj_mUMh2QyqCGHw'
        },
        {
          msg: '//img.haimi.com/FpGvMWcCqx1epESoEZsnPhkJ1uIF'
        },
        {
          msg: '//img.haimi.com/FjWQkON-KFjakzJjiTe63AaUA8-l'
        },
        {
          msg: '//img.haimi.com/FpzEfBA56Z9PDD39jK4zUU8XCs9a'
        },
        {
          msg: '//img.haimi.com/FlMjoZI2DHhNfpXy8LDmrGZOa4L0'
        }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="" scoped>
    img{
      width:100%;
    }
</style>