<template>
    <div class="wrapper">
        <div class="header">
            <span class="iconfont return" @click="handleReturn" >&#xe624;</span>
            <span class="title">添加地址</span>
        </div>
        <div class="item">
            <span class="label">联系人</span>
            <input type="text" v-model="userName" placeholder="请输入姓名">
        </div>
        <div class="item">
            <span class="label">手机号</span>
            <input type="text" v-model="phoneNumber" placeholder="请输入手机号">
        </div>
        <div class="item">
            <span class="label">收货地址</span>
            <input type="text" v-model="address" placeholder="请输入具体地址">
        </div>
        <div class="btn" @click="handleAdd">
            添加
        </div>
       
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data () {
        return {
            userName:'',
            phoneNumber:'',
            address:''
        }
    },
    methods: {
        
        handleReturn () {
            this.$router.go(-1)
        },
        handleAdd () {
            var data = {
                userName:this.userName,
                phoneNumber:this.phoneNumber,
                address:this.address
            }
            this.addAddress(data)
        },
        ...mapMutations(['addAddress'])
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
.wrapper
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-color #f7f7f7
    .header
        header()
        .return
            font-weight bold
            position absolute
            left px2rem(16)
        .title
            width 100%
            display inline-block
            text-align center
    .item
        padding px2rem(10) px2rem(14)
        line-height px2rem(20)
        border-bottom 1px solid #eee
        font-size px2rem(12)
        background #fff
        .label
            display inline-block
            width px2rem(64)
            color #999
        input 
            border 0
    .btn,.cancel
        width 90%
        line-height px2rem(40)
        font-size px2rem(14)
        margin px2rem(18) auto
        text-align center
        color #ffffff
        background $blue
        border-radius px2rem(5)
    .btn 
        margin-top px2rem(28)
  
     
</style>
