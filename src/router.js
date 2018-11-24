import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import Search from "./views/search/Search.vue";
import ProductsList from "./views/productsList/ProductsList.vue"
import Category from "./views/category/Category.vue"
import Mine from "./views/mine/Mine.vue"
import ProductDetail from "./views/productDetail/ProductDetail"
import Car from "./views/car/Car"
import Orders from "./views/orders/Orders"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },{
      path: "/search",
      name: "search",
      component: Search
    },{
      path: "/productsList",
      name: "productsList",
      component: ProductsList
    },{
      path: "/category",
      name: "category",
      component: Category
    },{
      path: "/mine",
      name: "mine",
      component: Mine
    },{
      path: "/productDetail/:id",
      name: "productDetail",
      component: ProductDetail
    },{
      path: "/car",
      name: "Car",
      component: Car
    },{
      path: "/orders",
      name: "Orders",
      component: Orders
    },{
      path: "/addressList",
      name: "AddressList",
      component: () => import("@/views/addressList/AddressList"),
      meta: { 
          title:'商品列表',
          keepAlive:true
       }
    },{
      path: "/addressEdit/:id",
      name: "AddressEdit",
      component: () => import("@/views/addressList/AddressEdit")
    },{
      path: "/addressAdd",
      name: "AddressAdd",
      component: () => import("@/views/addressList/AddressAdd")
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
