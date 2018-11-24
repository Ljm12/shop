export default{
    addProduct (state,data){
        state.productList.push(data)
        localStorage.setItem("product",JSON.stringify(state.productList));
    },
    deleteProduct(state,index){
        state.productList.splice(index,1)
        localStorage.setItem("product",JSON.stringify(state.productList));       
    },
    deleteProductAll(state,data){
        state.productList=[]
        for(var i=0; i<data.length;i++){
            state.productList[i]=data[i]
        }
        localStorage.setItem("product",JSON.stringify(state.productList));  
    },
    userChange(state,userInfo){
        state.user = userInfo
    },
    deleteAddress(state,index){
        state.addressList.splice(index,1)
    },
    addAddress(state,data){
        state.addressList.push(data)
    }
}