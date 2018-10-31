<template>
    <div>
        <van-tabs v-model="active" swipeable sticky>
            <van-tab title="全部">
                <all-orders :allOrders="allOrders"></all-orders>
            </van-tab>
            <van-tab title="待付款">
                <unpaid-orders :allOrders="allOrders"></unpaid-orders>
            </van-tab>
            <van-tab title="待发货">
                <unship-orders :allOrders="allOrders"></unship-orders>
            </van-tab>
            <van-tab title="待收货">
                内容 4
            </van-tab>
        </van-tabs>
    </div>    
</template>

<script>
import AllOrders from "./components/AllOrders"
import UnpaidOrders from "./components/Unpaid"
import UnshipOrders from "./components/Unship"
export default {
    name:'Order',
    components: {
        AllOrders,
        UnpaidOrders,
        UnshipOrders
    },
    data () {
        return {
            active:0,
            allOrders:[{
                id:"001",
                imgurl:"//img10.360buyimg.com/n7/jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg!q70.dpg",
                productName:"荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
                specification:"黑色,4G",
                price:"2499.00",
                number:1,
                status:"交易成功",
                sum:"2499.00"
            },{
                id:"002",
                imgurl:"//img10.360buyimg.com/n7/jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg!q70.dpg",
                productName:"荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
                specification:"黑色,4G",
                price:"2499.00",
                number:1,
                status:"交易成功",
                sum:"2499.00"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
