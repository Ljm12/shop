<template>
    <div class="footer">
        <div class="car" @click="selectbox">加入购物车</div>
        <div class="buy"  @click="selectbox">立即购买</div>
    </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
    .footer
        height px2rem(52)
        display flex
        z-index 1000
        position fixed
        bottom 0
        left 0
        right 0
        line-height px2rem(52)
        font-size px2rem(16)
        text-align center
        color #fff
        .car
            background #FF9500
            width 50%
        .buy
            background #FF0036
            width 50%

</style>

<script>
export default {
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
