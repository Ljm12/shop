<template>
    <div>
        <product-header></product-header>
        <product-list :productsList="productsList"></product-list>
    </div>
</template>

<script>
import ProductHeader from './components/Header'
import ProductList from './components/List'
export default {
    name:'ProductsList',
    components: {
        ProductHeader,
        ProductList
    },
    data () {
        return {
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
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
