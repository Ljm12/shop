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
import axios from 'axios'
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
            hotProducts:[],
            bannerImg:[],
             productsList:[]
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/mock/index.json').then( res =>{
                var data = res.data
                this.bannerImg=data.bannerImg
                this.hotProducts=data.hotProducts
                this.productsList=data.productsList
            })
        }  
    },
    mounted () {
       
    },
    created () {
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>

   @import '~@/assets/style/global.styl'
    .jg
        height px2rem(10)
        background #f7f7f7
        
</style>

