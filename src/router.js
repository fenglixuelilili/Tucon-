import VueRouter from 'vue-router';
// 3. 创建路由对象
import home from "./components/tabbars/home.vue";
import search from "./components/tabbars/search.vue";
import member from "./components/tabbars/member.vue";
import cart from "./components/tabbars/cart.vue";
import newsList from "./components/news/newsList.vue";
import newsXQ from "./components/news/newsXQ.vue";
import phtoto from "./components/photos/photoList.vue";
import phtotoInfo from "./components/photos/photoInfo.vue";
import product from "./components/products/products.vue";
import productList from "./components/products/productList.vue";
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:"/home",component:home},
    {path:"/member",component:search},
    {path:"/cart",component:member},
    {path:"/search",component:cart},
    {path:"/home/newsList",component:newsList},
    {name:'newsXQ',path:"/home/newsXQ/:name",component:newsXQ},
    {name:'phtoto',path:"/home/photoLis",component:phtoto},
    {name:'phtotoInfo',path:"/photoList/info/:idname",component:phtotoInfo},
    {name:'product',path:"/products",component:product},
    {name:'productList',path:"/products/:Dname",component:productList}
  ],
  linkActiveClass:"mui-active"
})
// 把路由对象暴露出去
export default router