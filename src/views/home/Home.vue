<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
    components: {
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .a
        height $headerHeight
        background #eee
        
</style>

