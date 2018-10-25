<template>
    <div>
        <div class="indextitle">
            精选好货
        </div>
        <div class="products">
            <div class="item" v-for="item of productsList" :key="item.id">
                <div class="item-img">
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="item-desc">
                    <p class="title">{{item.productName}}</p>
                    <p class="price">{{item.price}}</p>
                </div>
            </div>
           
            
        </div>
    </div>
</template>

<script>

export default {
    name:'HomeFeatured',
    props: {
        productsList:Array
    },
    data () {
        return {
           
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .indextitle
        indexTitle()
    .products
        display flex
        flex-wrap wrap
        
        justify-content center
        .item
            width 47%
            height 0
            padding-bottom 70%
            overflow hidden
            margin px2rem(4) 
            background #fff
            border-radius px2rem(5)
            box-shadow 0px 0px px2rem(8) #ccc
            .item-img
                width 100%
                height 0
                padding-bottom 100%
                overflow hidden
                padding-top px2rem(10) 
            .title
                padding px2rem(8) px2rem(8) 0 px2rem(8)
                line-height px2rem(18)
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            .price
                color $priceRed
                font-size px2rem(14)
                line-height px2rem(18)
                padding px2rem(8)

</style>

