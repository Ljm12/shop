<template>
    <div class="wrapper">
        <home-header></home-header>
        <home-swiper :bannerImg="bannerImg"></home-swiper>
        <div class="jg"></div>
        <home-popular :hotProducts="hotProducts"></home-popular>
        <div class="jg"></div>
        <home-find></home-find>
        <div class="jg"></div>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomePopular from './components/Popular'
import HomeFind from './components/Find'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomePopular,
        HomeFind
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
                imgurl:'//gw1.alicdn.com/bao/uploaded/i1/2616970884/O1CN011IOuaD1Qu6P1Er3_!!0-item_pic.jpg_210x210.jpg',
                 productName:'ipone 8 plus',
                price:9999
            },{
                id:'003',
                imgurl:'//gw3.alicdn.com/bao/uploaded/i3/1917047079/TB1RxS.XpzqK1RjSZFzXXXjrpXa_!!0-item_pic.jpg_210x210.jpg',
                productName:'ipone 8 plus',
                price:9999
            },{
                id:'004',
                imgurl:'//gw1.alicdn.com/bao/uploaded/i1/2616970884/O1CN011IOuaD1Qu6P1Er3_!!0-item_pic.jpg_210x210.jpg',
                productName:'ipone 8 plus',
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
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    font-size px2rem(12)
    .jg
        height 10px
        background #eee
        
</style>

