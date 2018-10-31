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
    props: {
        productSwiper:Array
    },
    data () {
        return {
             swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                }
              
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

    .swiper-wrapper
        width 100%
        height 100%
        overflow hidden
    

</style>
