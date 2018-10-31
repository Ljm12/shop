<template>
    <div class="wrapper">
        <home-header></home-header>
        <home-swiper :bannerImg="bannerImg"></home-swiper>
        <div class="jg"></div>
        <home-popular :hotProducts="hotProducts"></home-popular>
        <div class="jg"></div>
        <home-find></home-find>
        <div class="jg"></div>
        <home-featured :productsList="productsList"></home-featured>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomePopular from './components/Popular'
import HomeFind from './components/Find'
import HomeFeatured from './components/Featured'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomePopular,
        HomeFind,
        HomeFeatured
    },
    data () {
        return {
            hotProducts:[{
                id:'001',
                imgurl:'//gw3.alicdn.com/bao/uploaded/i3/1917047079/TB1RxS.XpzqK1RjSZFzXXXjrpXa_!!0-item_pic.jpg_210x210.jpg',
                productName:'ipone 8 plus 64G ipone 8 plus 64G',
                price:9999
            },{
                id:'002',
                imgurl:'//gw3.alicdn.com/bao/uploaded/i3/1917047079/TB1RxS.XpzqK1RjSZFzXXXjrpXa_!!0-item_pic.jpg_210x210.jpg',
                 productName:'ipone 8 plus 64G',
                price:9999
            },{
                id:'003',
                imgurl:'//gw3.alicdn.com/bao/uploaded/i3/1917047079/TB1RxS.XpzqK1RjSZFzXXXjrpXa_!!0-item_pic.jpg_210x210.jpg',
                productName:'ipone 8 plus 64G',
                price:9999
            },{
                id:'004',
                imgurl:'//gw1.alicdn.com/bao/uploaded/i1/2616970884/O1CN011IOuaD1Qu6P1Er3_!!0-item_pic.jpg_210x210.jpg',
                productName:'ipone 8 plus 128G',
                price:9999
            },{
                id:'005',
                imgurl:'//gw3.alicdn.com/bao/uploaded/i3/1917047079/TB1RxS.XpzqK1RjSZFzXXXjrpXa_!!0-item_pic.jpg_210x210.jpg',
                productName:'ipone 8 plus',
                price:9999
            },{
                id:'006',
                imgurl:'//gw1.alicdn.com/bao/uploaded/i1/2616970884/O1CN011IOuaD1Qu6P1Er3_!!0-item_pic.jpg_210x210.jpg',
                productName:'ipone 8 plus',
                price:9999
            }],
            bannerImg:[
                '//oss.static.nubia.cn/blockimage/153992932088.jpg',
                '//oss.static.nubia.cn/blockimage/153933635050.jpg',
                '//oss.static.nubia.cn/blockimage/153785721420.jpg'
            ],
             productsList:[{
                id:"001",
                imgurl:"//img10.360buyimg.com/n7/jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg!q70.dpg",
                productName:"荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
                price:2799
            },{
                id:"002",
                imgurl:"//img10.360buyimg.com/n7/jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg!q70.dpg",
                productName:"荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
                price:2799
            },{
                id:"003",
                imgurl:"//img10.360buyimg.com/n7/jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg!q70.dpg",
                productName:"荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
                price:2799
            },{
                id:"004",
                imgurl:"//img10.360buyimg.com/n7/jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg!q70.dpg",
                productName:"荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
                price:2799
            }]
        }
    },
    mounted () {
       
    }
}
</script>

<style lang="stylus" scoped>

   @import '~@/assets/style/global.styl'
    .jg
        height px2rem(10)
        background #f7f7f7
        
</style>

