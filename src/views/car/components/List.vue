<template>
    <div>
        <div v-show="!carList.length">
            <img :src="empty" alt="">
        </div>
        <div>
            <div class="items" v-for="item of carList" :key="item.id">
                <div class="item-checkbox"><van-checkbox v-model="item.checked"> </van-checkbox></div>
                <div class="item-img">
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="item-desc">
                    <p>{{item.name}}</p> 
                    <ul class="info">
                        <li>{{item.difference}}</li>
                        <li>
                            <span class="price">￥{{item.price}}</span>
                            <span class="number">x{{item.number}}</span>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="count">
                总计 <span>￥0.00</span>
            </div>
            <div class="submit">
                结算(2)
            </div>
        </div>
    </div>
</template>

<script>
import empty from "@/assets/img/empty.jpg"
export default {
    name:'CarList',
    props: {
        carList:Array
    },
    data () {
        return {
            empty:empty,
            checked:true,
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .items
        padding px2rem(10)
        background #f7f7f7
        display flex
        justify-content space-between
        align-items center
        margin-top px2rem(10)
        .item-checkbox
            width 6%
            flex-shrink 0
        .item-img
            width 22%
            flex-shrink 0
        .item-desc
            width 68%
            padding-left 2%
            .info
                color #999
                line-height px2rem(24)
                .price
                    color $priceRed
                    font-weight bold
                    width 88%
                    display inline-block
    .footer
        position fixed
        bottom 50px
        left 0
        right 0
        display flex
        height px2rem(50)
        line-height px2rem(50)
        justify-content flex-end
        background #f7f7f7
        font-size px2rem(14)
        .count
            color #999
            padding-right px2rem(20)
        .submit
            background #ff0036
            color #fff
            padding 0 px2rem(16)
            
</style>
