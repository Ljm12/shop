<template>
    <div>
        <div class="jg"></div>
        <div class="item">
            <div class="left">我的资产</div>
            <div class="right iconfont">&#xe62d;</div>
        </div>
        <div class="item">
            <div class="left">提现记录</div>
            <div class=" iconfont right">&#xe62d;</div>
        </div>
    </div>
    
    
</template>

<script>
export default {
    name:'MineList'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
    .jg
        height px2rem(10)
        background #f7f7f7
        
    .item
        display flex
        justify-content space-between
        padding px2rem(0) px2rem(18)
        font-size px2rem(14)
        line-height px2rem(40)
        border-bottom 1px solid #f2f2f2
        .right
            font-size px2rem(14) !important
            color #999

</style>
