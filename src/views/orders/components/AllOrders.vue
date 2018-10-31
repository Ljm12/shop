<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <div class="item" v-for="item of allOrders" :key="item.id">
                <div class="item-content">
                    <div class="item-img">
                        <img :src="item.imgurl" alt="">
                    </div>
                    <div class="item-desc">
                        <p class="title">{{item.productName}}</p>
                        <p class="guige">{{item.specification}}</p> 
                    </div>
                    <div class="item-price">
                        <ul>
                            <li>
                                <p class="price-black">￥{{item.price}}</p>
                                <p>x{{item.number}}</p> 
                            </li>
                            <li class="status">{{item.status}}</li>
                        </ul>
                    </div>
                </div>
                <div class="item-footer">
                    <div class="btn">
                        查看物流
                    </div> 
                    <div>合计：￥{{item.sum}}</div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:"AllOrder",
    props: {
        allOrders:Array
    },
    data () {
        return {
            
        }
    },
   
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .wrapper
        background #eee
        height 100vh
        overflow hidden
        .item
            background #fff
            border-radius px2rem(8)
            margin px2rem(10)
            overflow hidden
            .item-content
                display flex
                border-bottom 1px solid #f2f2f2
                padding px2rem(5)
                .item-img
                    width px2rem(80)
                    height px2rem(80)
                    overflow hidden
                    flex-shrink 0
                .item-desc
                    padding-left px2rem(10)
                    .title
                        ellipsisTwo()
                    .guige
                        color #999
                        line-height px2rem(24)
                .item-price
                    padding-left px2rem(10)
                    padding-right  px2rem(8)
                    text-align right
                    display flex
                    align-items flex-end
                    line-height px2rem(26)
                    .price-black
                        color #000
                    .status
                        color $priceRed
            .item-footer
                display flex
                justify-content space-between
                height px2rem(44)
                align-items center
                padding 0 px2rem(10)
                .btn
                    border 1px solid #666
                    padding px2rem(3) px2rem(6)
                    border-radius px2rem(10)
</style>
