export default{
    addProduct (state,data){
        state.productList.push(data)
        localStorage.setItem("product",JSON.stringify(state.productList));
    },
    deleteProduct(state,index){
        state.productList.splice(index,1)
        localStorage.setItem("product",JSON.stringify(state.productList));       
    },
}