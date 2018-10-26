<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="wap-nav" >分类</van-tabbar-item>
      <van-tabbar-item icon="cart" info="0">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" >我的</van-tabbar-item>
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
    font-size px2rem(12)
</style>
