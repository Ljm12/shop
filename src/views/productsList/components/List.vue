<template>
    <div >
        <scroll :data="productsList" :pulldown="pulldown" @pulldown="loadData" class="wrapper">
            <div>
                <router-link tag="div" :to="'/productDetail/'+item.id"  class="item" v-for="item of productsList" :key="item.id">
                    <div class="item-img">
                        <img :src="item.imgurl">
                    </div>
                    <div class="item-desc border-bottom">
                        <div class="title">{{item.title}}</div>
                        <div class="sell-point">
                            <div class="sell-item" v-for="childItem of item.sellpoint" :key="childItem.index">{{childItem}}</div>
                        </div>
                        <div class="price">￥{{item.price}}</div>
                    </div>
                </router-link>
                <div v-if="show" style="height: 0;  margin-top: 10px">
                    <van-loading type="spinner" style="margin: 0 auto"  ></van-loading>
                </div>
                <div v-else class="nomore">
                    加载完成
                </div>
            </div>
            
        </scroll>
    </div>
</template>

<script>
import axios from "axios"
import Bscroll from 'better-scroll'
import scroll from "./Scroll"
export default {
    name:'ProductList',
    props: {
        
    },
    components: {
        scroll  
    },
    data () {
        return {
            allProducts:[], //后台获取的数据
            productsList:[],//页面显示的数据
            pulldown:true,//控制上拉
            pageNum:0,//当前页数
            pageSize:5,//页面显示个数
            show:true
        }
    },
    created () {
        axios.get("/mock/productList.json").then((res)=>{
            let data = res.data
            this.allProducts = data.productsList
            this.$nextTick(()=>{
                this.loadData()
            })
      
        })

    },
    mounted () {
          
    },
    methods: {
         loadData() {
            // axios.get("/mock/productList.json").then((res) => {
            //     // this.productsList=res.data.productsList.concat(this.productsList)
            //     let data = res.data
            //     this.allProducts = data.productsList //获取数据
                //  for (var i = 0; i <this.allProducts.length; i++) {
                //     if ( i%4 == 0 ) {
                //         // this.productsList.push(this.upload[i]);
                //         console.log(this.allProducts[i])
                //          this.productsList=this.productsList.concat(this.allProducts[i])
                //     }
                //     if(this.productsList.length>this.allProducts.length){
                //         this.pulldown=false
                //     }
                // }
                
                let front = this.pageNum * this.pageSize // 0 5 10 
                let behind = front + this.pageSize  //5 10 15
                let upList = [] //从后台截取的数据
                upList = this.allProducts.slice(front,behind) //(0,5),(5,10),(10,15)
                // console.log(upList)
                this.productsList=this.productsList.concat(upList) //渲染数据
                this.pageNum++
                
                // this.productsList= this.productsList.concat(res.data.productsList);
                // this.$nextTick(() => {
                //     if (!this.scroll) {
                //     this.scroll = new Bscroll(this.$refs.wrapper, {})
                //     this.scroll.on('touchend', (pos) => {
                //         // 下拉动作
                //         if (pos.y > 50) {
                //         this.loadData()
                //         }
                //     })
                //     } else {
                //     this.scroll.refresh()
                //     }
                // })
            // })


        }

    },
    updated () {
        let count =Math.ceil(this.allProducts.length/4) //总页数
        console.log(count)
        if(this.pageNum>count){
            console.log("数据加载完成")
            this.show=false
            this.pulldown==false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/global.styl'
@import '~@/assets/style/varibles.styl'
    .wrapper
        overflow hidden
        position absolute
        top px2rem(50)
        left 0
        right 0
        bottom 50px
        padding-bottom px2rem(33)
        .item
            width 100%
            display flex
            margin px2rem(5) 0
            .item-img
                width px2rem(120)
                height px2rem(120)
                border-radius px2rem(5)
                overflow hidden 
                flex-shrink 0
                margin-left px2rem(10)
            .item-desc
                font-size px2rem(14)
                padding  px2rem(5) px2rem(12)  
                display flex
                flex-direction column
                justify-content space-between
                .title
                    ellipsisTwo()
                .sell-point
                    display flex
                    flex-wrap wrap
                    .sell-item
                        background #f2f2f2
                        margin px2rem(5)
                        font-size px2rem(10)
                        padding px2rem(3) px2rem(6)
                        border-radius px2rem(5) 
                .price
                    color $priceRed
        .nomore
            color #999
            text-align center
            line-height px2rem(28)
</style>
