<template>
    <div>
        <category-header></category-header>
        <div class="tab">
            <ul class="tab-items">
                <li class="tab-item" :class="{active:isactive==index}" v-for="(item,index) of tabs" :key="index"
                    @click="tabChange(index)"
                >{{item}}</li>
            </ul>
            <category-phone v-show="show===0" :phoneBrand="phoneBrand" :phoneList="phoneList"></category-phone>
            <category-headset v-show="show===1" :earBrand="earBrand" :earList="earList"></category-headset>
        </div>
    </div>
    
</template>

<script>
import CategoryHeader from "./components/Header"
import CategoryPhone from "./components/Phone"
import CategoryHeadset from "./components/Headset"

export default {
    name:'Category',
    components: {
        CategoryHeader,
        CategoryPhone,
        CategoryHeadset
    },
    data () {
        return {
            tabView:'select0',
            tabs:["手机","耳机"],
            isactive:0,
            show:0,
            phoneBrand:[{
                id:"001",
                imgurl:"img/apple.jpg",
                name:"phone"
            },{
                id:"002",
                imgurl:"img/apple.jpg",
                name:"phone"
            },{
                id:"003",
                imgurl:"img/apple.jpg",
                name:"phone"
            },{
                id:"004",
                imgurl:"img/apple.jpg",
                name:"phone"
            },{
                id:"005",
                imgurl:"img/apple.jpg",
                name:"phone"
            }],
            phoneList:[{
                id:"001",
                imgurl:"img/iphone.jpg",
                name:"iphone 6s"
            },{
                id:"002",
                imgurl:"img/iphone.jpg",
                name:"iphone 6s"
            },{
                id:"003",
                imgurl:"img/iphone.jpg",
                name:"iphone 6s"
            }],
            earBrand:[{
                id:"001",
                imgurl:"img/beats.jpg",
                name:"beats"
            },{
                id:"002",
                imgurl:"img/beats.jpg",
                name:"beats"
            },{
                id:"003",
                imgurl:"img/beats.jpg",
                name:"beats"
            }],
            earList:[{
                id:"001",
                imgurl:"img/beat.jpg",
                name:"头戴式耳机"
            },{
                id:"002",
                imgurl:"img/beat.jpg",
                name:"头戴式耳机"
            },{
                id:"003",
                imgurl:"img/beat.jpg",
                name:"头戴式耳机"
            }]
        }
    },
    methods: {
        tabChange(index){
            this.show=index
            this.isactive=index
        }
    },
    // beforeCreate () {
    //     document.querySelector('body').setAttribute('style', 'background-color:#f2f2f2')
    // },
    // beforeDestroy () {
    //     document.querySelector('body').removeAttribute('style')
    // }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .tab
        margin-top px2rem(46)
        display flex
        width 100%
    
        .tab-items
        
            width px2rem(110)
            background #fff
           
            .tab-item
                width px2rem(100)
                line-height px2rem(30)
                font-size px2rem(14)
                background #fff
                text-align center
            .active
                background #f2f2f2

</style>

