let defaultProducts = []
let defaultUser ={}
let product = JSON.parse(localStorage.getItem('product'));
try{
    if(product){
        for (var i in product){
            defaultProducts[i] = product[i]
        }
       
    }
} catch (e) {}

try{
    if(localStorage.user){
        defaultUser = localStorage.user
    }
} catch (e) {}

export default{
    productList:defaultProducts,
    user:{
        userName:"张三",
        phoneNum:13126408888,
        address:'广东省揭阳市'
    },
    addressList:[{
        id:'001',
        userName:'同恒',
        phoneNumber:13000000000,
        address:'广东省揭阳市榕城区渔湖镇嘉盛华府B栋13楼'
    },{
        id:'002',
        userName:'胜博',
        phoneNumber:13126400000,
        address:'广东省揭阳市榕城区渔湖镇嘉盛华府B栋13楼'
    }]
       
    
}