import axios from "axios";
var myaxios={};
myaxios.install=function(Vue){
    Vue.prototype.$axios=axios;
}
export default myaxios;