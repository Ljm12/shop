<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide><img src="//oss.static.nubia.cn/blockimage/153992932088.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="//oss.static.nubia.cn/blockimage/153933635050.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="//oss.static.nubia.cn/blockimage/153785721420.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
export default {
    name:'HomeSweiper',
    data () {
        return {
             swiperOption: {
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:3000
            }
        }
    },
    computed: {
         swiper() {
            return this.$refs.mySwiper.swiper
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .wrapper>>>.swiper-pagination-bullet-active
        background-color #fff
    .wrapper
        margin-top: $headerHeight
        width 100%
        height 0
        padding-bottom 42%
        overflow hidden
</style>

