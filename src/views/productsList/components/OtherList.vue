<template>
    <div >
         <div class="wrapper">
            <div class="items" v-for="item of productsList " :key="item.id">
                <div class="item-img" >
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="item-desc">
                    <p class="title">{{item.title}}</p>
                    <p class="price">￥{{item.price}}</p>
                </div>  
            </div>
        </div>
    </div>
   
</template>

<script>
export default {
    name:'OtherList',
    props: {
        productsList:Array
    },
    data () {
        return {
            
        }
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f2f2f2')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .wrapper
        margin-top px2rem(50)
        display grid 
        grid-template-columns 46% 46%
        grid-column-gap: 4%;
        grid-row-gap: 15px;
        margin-left 4%
        justify-items center
        margin-bottom 55px
        .items
            background #fff
            border-radius px2rem(5)
            overflow hidden
            .item-img
                width 100%
                height 0 
                padding-bottom 100%
                background #ccc
                overflow hidden
            .item-desc
                padding px2rem(7)
                .title
                    ellipsisTwo()
                .price
                    color $priceRed
                    font-size px2rem(14)
                    padding-top px2rem(5)
            
            
          
</style>
