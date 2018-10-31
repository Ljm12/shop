<template>
    <div> 
        <car-header @tabview="tabview" @selectAll="selectAll"></car-header>
        <car-list v-show="show" :carList="productList"></car-list>
        <edit-list v-show="!show" :carList="productList" @delete="handleDelete" @allDelete="allDelete"></edit-list>
    </div>
</template>

<script>
import CarHeader from "./components/Header"
import CarList from "./components/List"
import EditList from "./components/EditList"
import { Dialog } from 'vant'
import Vue from "vue"
import { mapState,mapMutations} from 'vuex'
Vue.use(Dialog);
export default {
    components: {
        CarHeader,
        CarList,
        EditList
    },
    data () {
        return {
            show: true
        }
    },
    computed: {
        ...mapState(['productList'])  
    },
    methods: {
        tabview(){
            this.show=!this.show
        },
        handleDelete(index){
            Dialog.confirm({
                title: '标题',
                message: '确定删除该商品吗'
                }).then(() => {
                    this.deleteProduct(index)
                // on confirm
                }).catch(() => {
                // on cancel
            });
            
        },
        // 批量删除
        allDelete(){
            
        },
        selectAll(check){
            
            for (var i in this.productList){
                if(check==true){
                     this.productList[i].checked=true
                }else{
                    this.productList[i].checked=false
                }
            }
        },
        ...mapMutations(['deleteProduct'])
    }
}
</script>

<style lang="stylus" scoped>

</style>
