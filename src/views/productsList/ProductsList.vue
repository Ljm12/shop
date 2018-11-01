<template>
    <div>
        <product-header @tabchange="tab"></product-header>
        <product-list v-if="show" :productsList="productsList"></product-list>
        <other-list v-else :productsList="productsList"></other-list>
    </div>
</template>

<script>
import ProductHeader from './components/Header'
import ProductList from './components/List'
import OtherList from './components/OtherList'
import axios from "axios"
export default {
    name:'ProductsList',
    components: {
        ProductHeader,
        ProductList,
        OtherList
    },
    data () {
        return {
            show:true,
            productsList:[]
        }
    },
    methods: {
        tab () {
            this.show=!this.show
        },
        getProductInfo () {
            axios.get("/mock/productList.json").then(res=>{
                let data = res.data
                this.productsList=data.productsList
            })
        }
    },
    created () {
        this.getProductInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
