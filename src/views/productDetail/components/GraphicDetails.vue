<template>
    <div>
        <div class="title">
            图文详情
        </div>
        <div v-html="message">
            
        </div>
    </div>
   
</template>

<script>
export default {
    name:'GraphicDetails',
    props: {
        message:String
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
    .title
        padding-left px2rem(10)
        line-height px2rem(30)
        font-size px2rem(14)
        color #000
</style>
