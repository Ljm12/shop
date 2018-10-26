<template>
    <div>
        <p class="title">精选品牌</p>
        <div class="grid"> 
            <div class="item" v-for="item of phoneBrand" :key="item.id">
                <div class="item-img" >
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="item-name">
                    {{item.name}}
                </div>
            </div>
        </div>
        <p class="title" style="padding-top:20px">热销单品</p>
        <div class="grid"> 
            <div class="item" v-for="item of phoneList" :key="item.id">
                <div class="item-img" >
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="item-name">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Phone',
    props: {
        phoneBrand:Array,
        phoneList:Array
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .title
        font-size px2rem(14)
        color #000000
        font-weight bold
        padding px2rem(10)
    .grid
        display grid
        grid-template-columns 34% 33% 33%
        
        .item
            width 100%
            padding-left px2rem(16)
            .item-img
                padding px2rem(10)
                width 100%
                height 0
                padding-bottom 80%
                overflow hidden
            .item-name
                text-align center
                font-size px2rem(14)
                color #000
           
</style>

