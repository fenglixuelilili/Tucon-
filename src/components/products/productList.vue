<template>
    <div>
	
		<transition  	@beforeEnter="beforeenter"
								@enter="enter"
								@afterEnter="afterenter">
			<div class="box" v-show="flag" ref="ball">

		</div>
		</transition>
		
		<div class="product-card">
		
        <div class="mui-card">
			<swiper :swipers="list"></swiper>		
		</div>
        <div class="mui-card">
				<div class="mui-card-header">商品的名称和标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>市场价 <del>￥2999</del> &nbsp;&nbsp; 销售价: <span class="red">$2199</span></p>
						购买数量<counts @countcahngge="countchan"></counts>
						<div>
								<div class="mui-btn mui-btn-primary">购买</div>
								<div class="mui-btn mui-btn-primary" 
								@click="addCart">加入购物车</div>
						</div>
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
		</div>
          <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
		</div>
          <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
		</div>
    </div>
	</div>
</template>

<script>
import swiper from "../../comments/swiper.vue";
import $ from "../../../node_modules/jquery/dist/jquery.min.js";
import count from "../../comments/count.vue";
export default {
	data(){
		return {
			list:[],
			name:this.$route.params.Dname,
			flag:false,
			countnum:1
		}

	},
	methods:{
		getlist(){
			 $.ajax({
                    type:'get',
                    url:`https://api.douban.com/v2/movie/search?q=${this.name}`,
                    dataType:'jsonp',
                    success:(data)=>{
                        console.log(data);
                        data.subjects.forEach(element => {
							this.list.push(element.images.medium);
						});
						console.log(this.list);
                    }
				});
		},
		addCart(){
			// this.flag=true;
			this.flag=!this.flag;
		},
		beforeenter(el){
			// this.
			el.style.transform="translate(0,0)";
			
		},
		enter(el,done){
			el.offsetLeft;
			topObj=this.$refs.ball.getBoundingClientRect();
			bottomObj=document.querySelector('#badge').getBoundingClientRect();
			const leftjl=bottomObj.left-topObj.left;	
			const topjl=bottomObj.top-topObj.top;
			// console.log(topObj,bottomObj);	
			el.style.transform=`translate(${leftjl}px,${topjl}px)`;
			el.style.transition="all 0.6s cubic-bezier(.17,.67,.83,.67)";
			done();
		},
		afterenter(){
			this.flag=!this.flag;
		},
		countchan(val){
			this.countnum=val;
			console.log(val);
		}
	},
	
	components:{
		swiper,
		"counts":count
	},
	created(){
		this.getlist();
	}


}
</script>

<style>

    .product-card{
        background-color: #ccc;
    }
	.red{
		color: red;
	}
	.box{
		background-color: red;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		z-index: 9999;
		position: absolute;
		left: 133px;
		top:357px;
	}
</style>
