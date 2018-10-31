<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" :info="this.$store.state.productList.length" to="/car">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name:'App',
  data () {
    return {
      active:0
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10 
  fontSize = fontSize > 100 ? 100 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>


<style lang="stylus">
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
  body
    width 100%
    height 100%
    font-size px2rem(12)
</style>
