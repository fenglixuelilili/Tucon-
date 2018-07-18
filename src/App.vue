<template>
  <div id="index">
    <!-- 顶部 -->
			<div class="back" @tap="backL" v-show="flag">&nbsp;返回</div>
      <mt-header fixed title="Tucon 商城">
					
			</mt-header>
    <!-- 路由部分的区域 -->
		<transition>
				  <router-view></router-view>
		</transition>

    <!-- 底部 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item1" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item1" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item1" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item1" >
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
	export default {
			data(){
				return{
					flag:false
				}
			},
			methods:{
				backL(){
					this.$router.go(-1);
				}
			},
			watch:{
				"$route.path":function(newpath,oldpath){
					
						if(newpath==="/home"){
							this.flag=false;
						}else{
							this.flag=true;
						}
				}
			},
			created(){
				// alert(111)
				if(this.$route.path!=="/home"){
					this.flag=true;
				}else{
					this.flag=false;
				}
			}
	}
</script>

<style lang="scss" scoped>
	.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
	.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
  #index{
    padding-top: 40px;
		overflow-x: hidden;
  }
	.v-enter{
			opacity: 0;
			transform: translateX(100%);
	}
	.v-leave-to{
			opacity: 0;
			transform: translateX(-100%);
			position: absolute;
	}
	.v-enter-active,.v-leave-active{
		transition: all 0.6s;
	}
	 .mint-header,.mint-header-button{
        z-index: 9999999;
    }
		.back{
			position: fixed;
			top:0;
			left:0;
			z-index: 999999999999999999999999999;
			width: 70px;
			height: 40px;
			color: #fff;
			text-align: center;
			line-height: 40px;
		}
</style>