<template>
    <div class="header border-bottom">
       
        <div class="iconfont return-icon">
            &#xe624;
        </div>
        <router-link to="/search" class="inputbox">
            <span class="iconfont search-icon">&#xe632;</span>
            手机优惠大酬宾
        </router-link>
        <router-link tag="div" to="/category" class="iconfont category-icon">
            &#xe672;
        </router-link>
    </div>
</template>

<script>
export default {
    name:'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .header
        height $headerHeight
        font-size px2rem(12)
        display flex
        justify-content space-between
        align-items center
        padding  0 px2rem(10)
        overflow hidden
        position fixed
        top 0
        left 0
        right 0
        z-index 100
        background #fff
        .return-icon
            font-size px2rem(20)
            color  #999
            font-weight bold  
        .inputbox
            width 78%
            background #f7f7f7
            line-height px2rem(30)
            border-radius px2rem(16)
            padding-left px2rem(10)
            font-size px2rem(14)
            color #999
            .search-icon
                padding 0 px2rem(2)
        .category-icon
            font-size px2rem(20)
            color #999

</style>


