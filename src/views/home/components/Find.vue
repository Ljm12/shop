<template>
    <div>
        <div class="title "> 
            发现
        </div>
        <div class="wrapper">
            <div class="item1">
                <img src="img/find0.jpg" alt="">
            </div>
            <div class="item2"><img src="img/find01.jpg" alt=""></div>
            <div><img src="img/find02.jpg" alt=""></div>
        </div>
        
    </div>
    
</template>

<script>
export default {
    name:'indexFind',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'

    .title
        indexTitle()
    .wrapper
        width 100%
        height 0
        padding-bottom 60%
        display: grid;
        grid-template-columns: 50% 50% 
        grid-template-rows: px2rem(112)
        .item1
            grid-row:1/3
            border-right 1px solid #eee
          
        .item2
            border-bottom 1px solid #eee
            overflow hidden
        
            
</style>

