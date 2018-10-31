export default{
    sum (state) {
        var total = 0;
        state.productList.forEach(item => {
            if(item.checked){
                total+=item.price*item.number
            }
        })
        return total
    }
}