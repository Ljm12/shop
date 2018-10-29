<template>
    <div class="wrapper">
        <div class="title border-bottom">
            <div class="tit-left">我的订单</div>
            <div class="tit-right">查看全部订单 <span class="iconfont icont-jt">&#xe62d;</span> </div>
        </div>
        <ul class="items">
            <li>
                <span class="iconfont">&#xe6d0;</span>
                <p>待付款</p>
            </li>
            <li>
                <span class="iconfont">&#xe642;</span>
                <p>待发货</p>
            </li>
            <li>
                <span class="iconfont">&#xe641;</span>
                <p>待收货</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
    .wrapper
        background #fff
        border-radius px2rem(8) 
        .title
            color #999
            display flex
            justify-content space-between
            padding px2rem(10) 
            .tit-left
                color #000
                font-size px2rem(14)
            .icont-jt
                font-size px2rem(12)
        .items
            display flex
            justify-content space-around
            align-items center
            line-height px2rem(22)
            color #017cc9
            margin px2rem(14) 0
            .iconfont
                font-size px2rem(26)
                padding-left px2rem(5)
                
                
                
</style>

