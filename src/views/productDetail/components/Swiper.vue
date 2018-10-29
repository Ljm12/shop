<template>
        <div class="swiper-wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of productSwiper" :key="item.index">
                    <img :src="item" alt="">
                </swiper-slide>
            </swiper>
        </div>
</template>

<script>
export default {
    name:"ProductSwiper" ,
    data () {
        return {
             swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                }
              
            },
            productSwiper:[
                "//img.alicdn.com/imgextra/i1/1714128138/O1CN0129zFeD62zVKwBT1_!!0-item_pic.jpg_2200x2200Q50s50.jpg_.webp",
                "//img.alicdn.com/imgextra/i2/1714128138/TB2fHtMFFuWBuNjSszbXXcS7FXa_!!1714128138-0-item_pic.jpg_2200x2200Q50s50.jpg_.webp",
                "//img.alicdn.com/imgextra/i4/1714128138/TB2YBWWoiOYBuNjSsD4XXbSkFXa_!!1714128138.jpg_2200x2200Q50s50.jpg_.webp"
            ]
            
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

    .swiper-wrapper
        width 100%
        height 100%
        overflow hidden
    

</style>
