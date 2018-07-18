<template>
    <div class="newsList-b">
       <ul class="mui-table-view">
				<router-link tag="li" :to="{name:'newsXQ',params:{name:item.directors
[0].name}}" class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.casts[0].avatars.small">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<p class='mui-ellipsis'><span>发表时间 {{new Date()|formData}}</span><span>点击 {{item.collect_count}} 次</span></p>
						</div>
					</a>
				</router-link>
			</ul>
    </div>
</template>

<script>
import $ from "../../../node_modules/jquery/dist/jquery.min.js";
export default {
  methods: {
    getNewList() {
		$.ajax({
			type:'get',
			dataType:'jsonp',
			// jsonp:'cb',
			url:'https://api.douban.com/v2/movie/in_theaters',
			success:(data)=>{
				console.log(data);
				this.list=data.subjects;
			},error(){
				
			}
		});
		}
  },
  data(){
	  return {
			list:[],
			listXQ:[]
	  }
  },
  created(){
	   this.getNewList()
  }
};
</script>

<style scope lang="scss">
.mui-media-body {
  h3 {
    font-size: 14px;
  }
}
.mui-ellipsis {
  color: cyan;
  display: flex;
  justify-content: space-between;
}
.newsList-b{
	padding-bottom: 50px;
}
</style>
