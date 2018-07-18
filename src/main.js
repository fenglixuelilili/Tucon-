import Vue from "vue";
import App from "./App.vue";
// 导出mui框架，直接就行的，所有的模板中都可以使用。在这main.js中引的东西就相当与是全局的东西
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";

// 导入路由第三方包
import VueRouter from "vue-router";
Vue.use(VueRouter);

import router from "./router.js";
import myaxios from "./myaxios.js";
Vue.use(myaxios);


import moment from "moment";
Vue.filter("formData",function(datastr,g="YYYY-MM-DD HH:mm:ss"){
    return moment(datastr).format(g);
})


// 按需导入的mint-ui框架的功能
// import { Swipe, SwipeItem,Header,Button,Lazyload } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);

// Vue.use(Lazyload);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import VuePreview from 'vue-preview'
 
Vue.use(VuePreview)
var vm = new Vue({
    el:"#app",
    data:{

    },
    render:c=>c(App),
    router
});