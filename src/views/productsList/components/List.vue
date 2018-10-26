<template>
    <div class="wrapper">
        <div class="item" v-for="item of productsList" :key="item.id">
            <div class="item-img">
                <img :src="item.imgurl">
            </div>
            <div class="item-desc border-bottom">
                <div class="title">{{item.title}}</div>
                <div class="price">￥{{item.price}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ProductList',
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
    .wrapper
        margin-top px2rem(50)
        display flex
        flex-wrap wrap
        .item
            width 100%
            display flex
            margin px2rem(5) 0
            .item-img
                width px2rem(120)
                height px2rem(120)
                border-radius px2rem(5)
                overflow hidden 
                flex-shrink 0
                margin-left px2rem(10)
            .item-desc
                font-size px2rem(14)
                padding  px2rem(5) px2rem(12)  
                display flex
                flex-direction column
                justify-content space-between
                .title
                    ellipsisTwo()
                .price
                    color $priceRed
</style>
