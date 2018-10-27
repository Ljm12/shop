<template>
    <div >
        <mine-header></mine-header>
        <mine-orders></mine-orders>
        <div>
            11
        </div>
    </div>        
</template>

<script>
import MineHeader from "./components/Header"
import MineOrders from "./components/Orders"
export default {
    name:"Mine",
    components: {
        MineHeader,
        MineOrders
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
