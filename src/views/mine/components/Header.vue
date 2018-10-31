<template>
    <div class="box">
         <div class="wrapper"> 
            <div class="tximg">
                <img src="img/tx.jpg" alt="">
            </div>
            <div class="username">
                <p class="name">小明</p>
                <p class="phone">13126408888</p>
            </div>
            <div class="iconfont icon-jt">
                &#xe62d;
            </div>
        </div>
    </div>
   
    
</template>

<script>
export default {
    name:'MineHeader',
    data () {
        return {
            
        }
    },
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
.box
    height px2rem(98)
    background #017cc9
    .wrapper
        height px2rem(105)
        overflow hidden
        background #017cc9
        display flex
        justify-content space-between
        padding 0 px2rem(18)
        align-items center
        padding-bottom px2rem(8)
        .tximg
            border 2px solid #08b8f9
            width px2rem(64)
            height px2rem(64)
            overflow hidden
            border-radius 50%
            flex-shrink 0
        .username
            width 61%
            color #ffffff
            font-size px2rem(16)
            .name
                line-height px2rem(30)
            .phone
                font-size px2rem(12)
                display block
                background-color rgba(0,0,0,0.3)
                line-height px2rem(18)
                width px2rem(90)
                text-align center
                border-radius px2rem(8)
                opacity 0.7
        .icon-jt
            color #ffffff
            font-size px2rem(20)

</style>

