<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide v-for="item of bannerImg" :key="item.index"><img :src="item" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
export default {
    name:'HomeSweiper',
    props: {
        bannerImg:Array  
    },
    data () {
        return {
             swiperOption: {
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:3000
            },
            
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
        padding-bottom 41.5%
        overflow hidden
</style>

