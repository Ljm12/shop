<template>
    <div class="header border-bottom">
       
        <router-link tag="div" to="/" class="iconfont return-icon">
            &#xe624;
        </router-link>
        <router-link tag="div" to="/search" class="inputbox">
            <span class="iconfont search-icon">&#xe632;</span>
            手机
        </router-link>
        <div class="btn-search" @click="tab">
           切换
        </div>
    </div>
</template>

<script>
export default {
    name:'ProductHeader',
    data () {
        return {
            inputValue:'手机'
        }
    },
    methods: {
        tab () {
            this.$emit('tabchange')
        }
    }
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
            input
                padding 0 px2rem(2)
                font-size px2rem(14)
                border 0
                background #f7f7f7
            .search-icon
                padding 0 px2rem(2)
        .btn-search
            font-size px2rem(14)
            color #999
            padding px2rem(5) px2rem(5)
            border-radius px2rem(10)

</style>


