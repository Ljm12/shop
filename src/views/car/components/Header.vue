<template>
    <div class="header">
        <div >
            <van-checkbox v-model="checked" @change="selectAll()">{{select}}</van-checkbox>
        </div>
        <div class="edit" @click="edit">
            {{message}}
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            checked:true,
            message:'编辑',
            select:'全不选'
        }
    },
    methods: {
        edit () {
           this.message = this.message=='编辑'?'完成':'编辑'
           this.$emit("tabview")
        },
        selectAll(){
            this.$emit("selectAll",this.checked)
            this.select = this.select == '全选'?'全不选':'全选'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .header
        display flex
        justify-content space-between
        padding px2rem(10)
        font-size px2rem(14)
        .edit
            color #29a3f1
</style>
