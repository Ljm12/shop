<template>
    <div>
        <div class="header ">
            <router-link to="/" tag="div" class="iconfont return-icon">
                &#xe624;
            </router-link>
            <div class="inputbox">
                <input type="text" placeholder="手机" v-model="inputValue">
            </div>
            <router-link tag="div" to="/productsList" class=" btn-search">
                搜 索
            </router-link>
        </div>
        <div class="hot-search">
            热搜
        </div>
        <ul class="hot-list">
            <li class="item" v-for="(item,index) of list" :key="index">{{item}}</li>
            
        </ul>
    </div>
    
</template>

<script>
export default {
    name:'Search',
    data () {
        return {
            inputValue:'手机',
            list:['iphone','华为','小米','苹果手机数据线','type-c数据线','华为耳机','智能蓝牙耳机']
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
        padding  0 px2rem(8)
        overflow hidden
        background #fff
        .return-icon
            font-size px2rem(20)
            color  #999
            font-weight bold  
        .inputbox
            width 78%
            background #f7f7f7
            line-height px2rem(32)
            border-radius px2rem(16)
            padding-left px2rem(10)
            font-size px2rem(14)
            color #999
            input
                padding 0 px2rem(2)
                font-size px2rem(14)
                border 0
                background #f7f7f7
        .btn-search
            font-size px2rem(14)
            color #999
            padding px2rem(5) px2rem(5)
            border-radius px2rem(10)
    .hot-search
        font-size px2rem(16)
        padding-left px2rem(10)
        color #000
        line-height px2rem(32)
        padding-top px2rem(5)
    .hot-list
        display flex
        flex-wrap wrap
        .item
            padding px2rem(6) px2rem(10)
            background #f7f7f7
            border-radius px2rem(10)
            margin px2rem(8)  px2rem(16)
</style>


