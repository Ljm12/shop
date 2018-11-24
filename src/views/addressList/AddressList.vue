<template>
    <div class="wrapper">
        <div class="header">
            <span class="iconfont return" @click="handleReturn">&#xe624;</span>
            <span class="title">地址管理</span>
        </div>
        <div class="item border-bottom  " v-for="(item,index) of addressList" :key="item.id">
            <div class="info">
                <div class="desc">
                    <span class="name">{{item.userName}}</span>
                    <span class="phone-number">{{item.phoneNumber}}</span>
                </div>
                <div class="address">
                    {{item.address}}
                </div>
            </div>
            <div class="edit-item">
                <div class="iconfont clear" @click="handleClick(index)">
                    &#xe645;
                </div>
                <router-link tag="div" :to="'/addressEdit/'+index" class="edit">编辑</router-link>
            </div>
        </div>
        <router-link tag="div" to="/addressAdd" class="footer">
            <span class="iconfont add">&#xe64d;</span>
            新增地址
        </router-link>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex'
import { Dialog } from 'vant'

export default {
    name:"AddressList",
    data () {
        return {
        }
    },
    computed: {
        ...mapState(['addressList'])
    },
    methods: {
        // 返回上一页
        handleReturn () {
            this.$router.go(-1)
        },
        handleClick (index) {
            Dialog.confirm({
                    title: '地址删除',
                    message: '确定从列表中移除该条地址'
                }).then(() => {
                    this.deleteAddress(index)  
                }).catch(() => {
                // on cancel
            });
            
        },
        ...mapMutations(['deleteAddress'])
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
    background #f7f7f7
    z-index 200
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
        display flex
        justify-content space-between
        padding px2rem(8) px2rem(14)
        background #fff
        .info 
            width 90%
            flex-shrink 0
            line-height px2rem(26)
            .desc
                font-size px2rem(14)
                .name
                    padding-right  px2rem(24)
            .address
                color #999
        .edit-item
            text-align center
            color #999
            line-height px2rem(26)
            .clear 
                font-size px2rem(18)
            .edit
                color $blue
    .footer
        font-size px2rem(16)
        line-height px2rem(50)
        text-align center
        color #fff
        background $blue
        position fixed
        left 0
        right 0
        bottom 0
        .add
            padding-right px2rem(5)
</style>
