<template>
    <div> 
        <car-header @tabview="tabview" @selectAll="selectAll"></car-header>
        <car-list v-show="show" :carList="carList"></car-list>
        <edit-list v-show="!show" :carList="carList" @delete="handleDelete" @allDelete="allDelete"></edit-list>
    </div>
</template>

<script>
import CarHeader from "./components/Header"
import CarList from "./components/List"
import EditList from "./components/EditList"
import { Dialog } from 'vant'
import Vue from "vue"
Vue.use(Dialog);
export default {
    components: {
        CarHeader,
        CarList,
        EditList
    },
    data () {
        return {
            show: true,
            carList:[{
                id:"001",
                checked:true,
                imgurl:"//img10.360buyimg.com/n7/jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg!q70.dpg",
                name:"荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
                difference:"黑色,4G",
                price:'2499.00',
                number:1
            },{
                id:"002",
                checked:true,
                imgurl:"//img10.360buyimg.com/n7/jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg!q70.dpg",
                difference:"黑色,4G",
                name:"荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
                price:'2499.00',
                number:1
            }]
        }
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
                    this.carList.splice(index,1)
                // on confirm
                }).catch(() => {
                // on cancel
            });
            
        },
        // 批量删除
        allDelete(){
            
        },
        selectAll(check){
            
            for (var i in this.carList){
                if(check==true){
                     this.carList[i].checked=true
                }else{
                    this.carList[i].checked=false
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
