<template>
    <div>
        <product-header @tabchange="tab"></product-header>
        <product-list v-if="show" :productsList="productsList"></product-list>
        <other-list v-else :productsList="productsList"></other-list>
    </div>
</template>

<script>
import ProductHeader from './components/Header'
import ProductList from './components/List'
import OtherList from './components/OtherList'
export default {
    name:'ProductsList',
    components: {
        ProductHeader,
        ProductList,
        OtherList
    },
    data () {
        return {
            show:true,
            productsList:[{
                id:"001",
                imgurl:"//gw3.alicdn.com/bao/uploaded/i1/1114511827/O1CN011PMo4t3noTrM4nv_!!0-item_pic.jpg_210x210.jpg",
                title:"【低至2299元】华为honor/荣耀 荣耀10GT游戏全面屏全网通双卡双待手机官方旗舰店magic2荣耀9v10购机赢8X",
                price:2299
            },{
                id:"002",
                imgurl:"//gw3.alicdn.com/bao/uploaded/i1/1114511827/O1CN011PMo4t3noTrM4nv_!!0-item_pic.jpg_210x210.jpg",
                title:"【低至2299元】华为honor/荣耀 荣耀10GT游戏全面屏全网通双卡双待手机官方旗舰店magic2荣耀9v10购机赢8X",
                price:2299
            },{
                id:"003",
                imgurl:"//gw3.alicdn.com/bao/uploaded/i1/1114511827/O1CN011PMo4t3noTrM4nv_!!0-item_pic.jpg_210x210.jpg",
                title:"【低至2299元】华为honor/荣耀 荣耀10GT游戏全面屏全网通双卡双待手机官方旗舰店magic2荣耀9v10购机赢8X",
                price:2299
            },{
                id:"004",
                imgurl:"",
                title:"【低至2299元】华为honor/荣耀 荣耀10GT游戏全面屏全网通双卡双待手机官方旗舰店magic2荣耀9v10购机赢8X",
                price:2299
            }]
        }
    },
    methods: {
        tab () {
            this.show=!this.show
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
