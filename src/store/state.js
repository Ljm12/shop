let defaultProducts = []
let product = JSON.parse(localStorage.getItem('product'));
try{
    if(product){
        for (var i in product){
            defaultProducts[i] = product[i]
        }
       
    }
} catch (e) {}

export default{
    productList:defaultProducts
}