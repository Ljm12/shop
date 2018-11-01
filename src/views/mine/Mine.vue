<template>
    <div >
        <mine-header></mine-header>
        <mine-orders></mine-orders>
        <mine-list></mine-list>
    </div>        
</template>

<script>
import MineHeader from "./components/Header"
import MineOrders from "./components/Orders"
import MineList from "./components/List"
export default {
    name:"Mine",
    components: {
        MineHeader,
        MineOrders,
        MineList
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
