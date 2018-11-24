<template>
    <div class="wrapper" >
        <div class="header">
            <span class="iconfont return" @click="handleReturn">&#xe624;</span>
            <span class="title">修改地址</span>
        </div>
        <div class="item">
            <span class="label">联系人</span>
            <input type="text" v-model="userName">
        </div>
        <div class="item">
            <span class="label">手机号</span>
            <input type="text" v-model="phoneNumber">
        </div>
        <div class="item">
            <span class="label">地区</span>
            <span @click="handleShow" style="display:inline-block; width:80%">{{result}}</span>
            <van-actionsheet v-model="show">
                <van-area :area-list="areaList" value="445202"  @confirm="handleConfirm"/>
            </van-actionsheet>
        </div>
        <div class="item">
            <span class="label">详细地址</span>
            <input type="text" v-model="address">
        </div>
        <div class="default-item">
            <span class="default-label">设为默认地址</span>
            <van-switch class="switch" v-model="checked" />
        </div>
        <div class="btn">
            确认修改
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
import areaList from "./ares.js"
export default {
    data () {
        return {
            areaList,
            show:false,
            defaultIndex:'',
            userName:'',
            phoneNumber:'',
            address:'',
            checked:false,
            result:'选择 省 / 市 / 区 '
        }
    },
    computed: {
        ...mapState(['addressList'])
    },
    methods: {
        handleReturn () {
            this.$router.go(-1)
        },
        getUserInfo () {
            let i = this.$route.params.id
            this.userName = this.addressList[i].userName
            this.phoneNumber = this.addressList[i].phoneNumber
            this.address = this.addressList[i].address
            
        },
        handleShow () {
            this.show = true
        },
        handleConfirm (AreaInfo) {
            this.result = ''
            for(let i=0; i<AreaInfo.length; i++){
                this.result+=AreaInfo[i].name + ' / '
                this.show = false
            }
        }
    },
    mounted () {
        this.getUserInfo(),
        this.defaultIndex = this.$route.params.id
    },
    activated () {
        if(this.defaultIndex !== this.$route.params.id){
            this.getUserInfo()
            this.defaultIndex = this.$route.params.id
        }
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
            width 20%
            color #999
        input 
            border 0
            width 78%
    .default-item
        padding px2rem(10) px2rem(14)
        font-size px2rem(14)
        background #fff
        line-height px2rem(20)
        display flex
        justify-content space-between
        margin-top px2rem(14)
        .default-label
            display inline-block
            width 30%
            color #999
        .switch
            font-size px2rem(22) !important
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
