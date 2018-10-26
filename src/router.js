import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import Search from "./views/search/Search.vue";
import ProductsList from "./views/productsList/ProductsList.vue"
import Category from "./views/category/Category.vue"
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
