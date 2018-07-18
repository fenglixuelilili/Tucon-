<template>
<div>
     <div class="lunbo">
        <mt-swipe :auto="4000" class="h">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img src="../../imgs/menu1.png" alt="">
		                    <div class="mui-media-body">新闻</div></router-link></li>
                        
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoLis">
		                   <img src="../../imgs/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/products" href="#">
		                    <img src="../../imgs/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../imgs/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../../imgs/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../imgs/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 请求资源、
  },
  created() {
    // 一上来应该就进行调用
  }
};
</script>

<style lang="scss" scoped>

.lunbo .h {
  height: 200px;
  .mint-swipe-items-wrap div {
    &:nth-child(1) {
      background-color: aqua;
    }
    &:nth-child(2) {
      background-color: red;
    }
    &:nth-child(3) {
      background-color: blue;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-right: 0 none;
  border-bottom: 0 none;
}
ul{
    li.mui-table-view-cell{
        
        img{
            width: 60px;
        }
        .mui-media-body{
font-size: 8px;
        }
    }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 12px;
}
</style>
