<template>
    <div>
        <div class="iconfont header" @click="routerback">
            &#xe624;
        </div>
        <product-swiper :productSwiper="productSwiper"></product-swiper>
        <product-desc :price="defaultPrice" :info="info" :title="title" @selectbox="selectbox"></product-desc>
        <van-actionsheet v-model="show" title="产品规格选择">
            <div class="product-box">
                <div>
                    <span class="unit">单价</span>
                    <span class="price">￥{{defaultPrice}}</span>
                    <span class="unit">库存</span>
                    <span >{{defaultstock}} </span>
                </div>
                <div class="product-content"  v-for="(ProductItem,n) in simulatedDATA.specifications">
                    <p>{{ProductItem.name}}</p>
                    <ul class="product-list">
                        <li v-for="(oItem,index) in ProductItem.item" v-on:click="specificationBtn(oItem.name,n,$event,index)" v-bind:class="[oItem.isShow?'':'noneActive',subIndex[n] == index?'productActive':'']">{{oItem.name}}</li>
                    </ul>
                </div>
                <p class="unit">数量</p>
                <div class="stepper">
                    <van-stepper  v-model="value" integer :min="1" :max="defaultstock"/>
                </div>
                
                <div class="buy-btn" @click="submit">
                    确定
                </div>
            </div>
        </van-actionsheet>
        <graphic-details :message="message"></graphic-details>
        <product-footer @handleAdd="handleAdd" @handleBuy="handleBuy"></product-footer>
    </div>
</template>

<script>
import ProductSwiper from "./components/Swiper"
import ProductDesc from "./components/Desc"
import ProductGuige from "./components/Guige"
import GraphicDetails from "./components/GraphicDetails"
import ProductFooter from "./components/Footer.vue"
import {  mapMutations } from 'vuex'
import { Toast } from 'vant'
import Vue from "vue"
import axios from "axios"
Vue.use(Toast);
export default {
    name: "ProductDetail",
    components: {
        ProductSwiper,
        ProductDesc,
        ProductGuige,
        GraphicDetails,
        ProductFooter
    },
    data () {
        return {
            title:"",
            productSwiper:[],
            value:1,
            defaultstock:'0',//默认库存
            defaultPrice:'请选择规格',//默认价格
            info:"",
            message:'<img src="//img.alicdn.com/imgextra/i3/1714128138/TB2XMI2miCYBuNkSnaVXXcMsVXa_!!1714128138.jpg_760x760Q50s50.jpg_.webp">',//图文详情图片
            show:false,//上拉菜单
            simulatedDATA: { //模拟后台返回的数据 多规格
            difference: [],
            specifications: []
        },
        selectArr: [], //存放被选中的值
        shopItemInfo: {}, //存放要和选中的值进行匹配的数据
        subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
        b:"" //存放选中的difference
        }
    },
    mounted () {
        
    },
    created () {
        axios.get("/mock/productDetail.json").then(res=>{
                var self = this;
                let data = res.data
                self.productSwiper=data.productSwiper
                self.title = data.title
                self.simulatedDATA.difference = data.difference
                self.simulatedDATA.specifications = data.specifications
                self.$nextTick(()=>{
                     for (var i in self.simulatedDATA.difference) {
                        self.shopItemInfo[self.simulatedDATA.difference[i].difference] = self.simulatedDATA.difference[
                            i]; //修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
                    }
                    self.checkItem();
                })
               
                // console.log(self.simulatedDATA.difference)
            })

        //    *
        // this.getProductDetail()
        // for (var i in self.simulatedDATA.difference) {
        //     self.shopItemInfo[self.simulatedDATA.difference[i].difference] = self.simulatedDATA.difference[
        //         i]; //修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
        // }
        // self.checkItem();
        // console.log(self.simulatedDATA.difference)
    },
    methods: {
        specificationBtn: function (item, n, event, index) {
            var self = this;
            if (self.selectArr[n] != item) {
                self.selectArr[n] = item;
                self.subIndex[n] = index;
 
            } else {
                self.selectArr[n] = "";
                self.subIndex[n] = -1; //去掉选中的颜色 
            }
            self.checkItem();
            if(self.subIndex.length==2){
                self.info=self.shopItemInfo[self.b].difference
                self.defaultPrice=self.shopItemInfo[self.b].price
                self.defaultstock=self.shopItemInfo[self.b].stock
            }
           
        },
        checkItem: function () {
            var self = this;
            var option = self.simulatedDATA.specifications;
            var result = [];  //定义数组存储被选中的值
            for (var i in option) {
                result[i] = self.selectArr[i] ? self.selectArr[i] : '';
            }
            for (var i in option) {
                var last = result[i];  //把选中的值存放到字符串last去
                for (var k in option[i].item) {
                    result[i] = option[i].item[k].name; //赋值，存在直接覆盖，不存在往里面添加name值
                    option[i].item[k].isShow = self.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
                }
                result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
               
            }
            self.$forceUpdate(); //重绘
            // console.log(self.shopItemInfo)
             this.b=result.join(",")
            // console.log(b)
            // if(result.length == 2){
            //     this.price=self.shopItemInfo[b].price
            // }
            
        },
        isMay (result) {
            for (var i in result) { 
                if (result[i] == '') {
                    return true; //如果数组里有为空的值，那直接返回true
                }
            }
             return this.shopItemInfo[result].stock == 0 ? false : true; //匹配选中的数据的库存，若不为空返回true反之返回false
             
        },

        submit(){
            this.show=false
        },
        selectbox(){
            this.show=true
        },
        routerback(){
            this.$router.go(-1);
        },
        handleAdd (){
            if(this.info.length == 0 ){
                Toast('请选择规格')
            }else{
                Toast('已成功加入购物车')
                var data={
                    id:"003",
                    checked:true,
                    imgurl:this.productSwiper[0],
                    name:this.title,
                    price:this.defaultPrice,
                    difference:this.info,
                    number:this.value,
                }
                this.addProduct(data)
               
            }
        },
        handleBuy (){
            if(this.info.length == 0 ){
                Toast('请选择规格')
            }else{
              
            }
            
            
        },
         ...mapMutations(['addProduct']) 
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
    .header
        width px2rem(44)
        height px2rem(44)
        border-radius 50%
        background rgba(0,0,0,0.6)
        color #ffffff
        font-size px2rem(18)
        text-align center
        line-height px2rem(44)
        font-weight bold
        position fixed
        top px2rem(10)
        left px2rem(10)
        z-index 2000  
    .product-box
        color #666
        padding-top px2rem(8)
        .unit
            padding px2rem(10)
            font-size px2rem(14)
        .price
            color #ff4a52
            font-size px2rem(14)
        .product-content
            border-bottom 1px solid #eee
            padding px2rem(10)
            .product-list
                display flex
                padding px2rem(5)
                li
                    background #f2f2f2
                    padding px2rem(6) px2rem(10)
                    border-radius px2rem(5) 
                    margin px2rem(5) px2rem(10)
                .noneActive
                    background #ccc
                .productActive
                    background #FF0036
                    color #fff
        .stepper
            padding-left px2rem(10)
            padding-bottom px2rem(10)
        .buy-btn
            width 100%
            line-height px2rem(40)
            color #ffffff
            background #FF0036
            text-align center 
            font-size px2rem(14)
        

</style>
