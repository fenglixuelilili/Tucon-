import Vue from "vue";
import App from "./App.vue";
// 导出mui框架，直接就行的，所有的模板中都可以使用。在这main.js中引的东西就相当与是全局的东西
import "./lib/mui/css/mui.css";

// 按需导入的mint-ui框架的功能
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);








var vm = new Vue({
    el:"#app",
    data:{

    },
    render:c=>c(App)
});