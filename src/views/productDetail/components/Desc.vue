<template>
    <div>
        <div class="price">￥{{price}}</div>
        <div class="name">
            【全版本直降200元】Xiaomi/小米 小米8年度旗舰全面屏骁龙845双频GPS 智能拍照游戏手机 旗舰官方正品现货
        </div>
        <div class="jg"></div>
        <div class="select" @click="selectbox">
            <div class="title">规格</div>
            <div class="info">{{info}}...</div>
            <div class="iconfont">&#xe62d;</div>
        </div>
        <div class="select">
            <div class="title">参数</div>
            <div class="info">款式 操作系统...</div>
            <div class="iconfont">&#xe62d;</div>
        </div>
        <div class="jg"></div>
    </div>
    
</template>

<script>
export default {
    props: {
        price:String,
        info:String
    },
    data () {
        return {
            
        }
    },
    methods: {
        selectbox () {
            this.$emit('selectbox')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .price
        color $priceRed
        font-size px2rem(16)
        line-height px2rem(32)
        padding-left px2rem(10)
    .name
        font-size px2rem(14)
        line-height px2rem(22)
        padding  0 px2rem(10) px2rem(10) px2rem(10)
        ellipsisTwo()
    .jg
        height px2rem(10)
        background #f7f7f7
    .select
        display flex
        line-height px2rem(32)
        padding 0 px2rem(14)
        .title
            color #999
            padding-right px2rem(20)
        .info 
            width 80%
        .iconfont
            color #999
            font-size px2rem(14)
</style>


