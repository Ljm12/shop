<template>
    <div>
     
        <div>
            <div class="items" v-for="(item,index) of carList" :key="item.id">
                <div class="item-checkbox"><van-checkbox v-model="item.checked"> </van-checkbox></div>
                <div class="item-img">
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="item-desc">
                    <p><van-stepper v-model="item.number" integer/></p> 
                    <ul class="info">
                        <li>{{item.difference}}</li>
                        <li>
                            <span class="price">￥{{item.price}}</span>
                        </li>
                    </ul>
                </div>
                <div class="iconfont delete" @click="delect(index)">
                    &#xe645;
                </div>
                
            </div>
            <div class="footer">
                <div class="submit" @click="handleDelete">
                    删 除
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'EditList',
    props: {
        carList:Array
    },
    data () {
        return {
            checked:true
        }
    },
    methods: {
        delect (index) {
            this.$emit("delete",index)
        },
        handleDelete(){
            this.$emit("allDelete")
                
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .items
        padding px2rem(10)
        background #f7f7f7
        display flex
        justify-content space-between
        align-items center
        margin-top px2rem(10)
        .item-checkbox
            width 6%
            flex-shrink 0
        .item-img
            width 22%
            flex-shrink 0
        .item-desc
            width 50%
            padding-left 2%
            .info
                color #999
                line-height px2rem(24)
                .price
                    color $priceRed
                    font-weight bold
                    width 88%
                    display inline-block
        .delete
            color #999;
            font-size px2rem(24)
    .footer
        position fixed
        bottom 50px
        left 0
        right 0
        display flex
        height px2rem(50)
        line-height px2rem(50)
        justify-content flex-end
        background #f7f7f7
        font-size px2rem(14)
        .submit
            background #ff0036
            color #fff
            padding 0 px2rem(16)
           
</style>
