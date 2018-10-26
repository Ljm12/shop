<template>
    <div class="wrapper">
        <div class="title">热销推荐</div>
        <swiper :options="swiperOption" class="swiper-items">
            <swiper-slide class="item" v-for="item of hotProducts" :key="item.id">
                <div class="item-img">
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="item-desc">
                    <p class="name">{{item.productName}}</p>
                    <p class="price">￥{{item.price}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomePopular',
    props: {
            hotProducts:Array
        },
    data () {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 16,
                freeMode: true,
                }
            }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .wrapper
        .title
            indexTitle()
        .swiper-items
            padding-left px2rem(16)
            .item
                width 30% !important
                height 0
                padding-bottom 44%
                overflow hidden
                .item-img
                    width 100%
                    overflow hidden
                    background-color #eee
                .item-desc
                    font-size px2rem(12)
                    padding-top px2rem(4)
                    .name
                        line-height px2rem(20)
                        ellipsis()
                    .price
                        
                        font-size px2rem(14)
                        color $priceRed
                        text-align center  
                    
</style>

