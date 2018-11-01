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
import axios from "axios"
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
            allOrders:[]
        }
    },
    created () {
        this.getOrderInfo()
    },
    methods: {
        getOrderInfo () {
            axios.get("./mock/order.json").then(res=>{
                let data =res.data
                this.allOrders=data.allOrders
            })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
