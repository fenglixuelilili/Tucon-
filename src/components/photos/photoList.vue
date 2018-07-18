<template>
    <div>
         <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a href="#" @click="getName(item.directors[0].name)" :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in list" :key="item.id">{{item.directors[0].name}}</a>
        </div>
      </div>
    </div>
        <div>
            <ul class="ul">
                <router-link to="/photoList/info/zhansan" tag="li" v-for="item in listXQ" :key='item.id'>
                    <img v-lazy="item.images.large">
                    <div class="info">
                        <h5>{{item.original_title}}</h5>
                        <p>{{item.images.large}}</p>
                        <p>{{item.images.medium}}</p>
                        <p>{{item.images.small}}</p>
                    </div>
                </router-link>

            </ul>
        </div>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import $ from "../../../node_modules/jquery/dist/jquery.min.js";
export default {
    data(){
        return {
            list:[],
            listXQ:[]
        }
    },
    methods:{
        getAllList(){
            $.ajax({
                type:'get',
                dataType:'jsonp',
                // jsonp:'cb',
                url:'https://api.douban.com/v2/movie/in_theaters',
                success:(data)=>{
                    // console.log(data);
                    this.list=data.subjects;
                    var objlist={
                        id:0,
                        directors:[
                            {name:"全部"}
                        ]
                    };
                    this.list.unshift(objlist);
                },error(){
                        
                }
            });
        },
		  getName(name){
                $.ajax({
                    type:'get',
                    url:`https://api.douban.com/v2/movie/search?q=${name}`,
                    dataType:'jsonp',
                    success:(data)=>{
                        console.log(data.subjects);
                        this.listXQ=data.subjects;
                    }
				});
			}
    },
    created(){
        this.getAllList();
        this.getName("徐峥");
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style >
    .ul{
        padding: 10px 20px;
        margin: 0;
       list-style: none;  
       background-color: #fff; 
    }
    .ul li{
       position: relative;
        margin-bottom: 10px;
        text-align: center;
        width: 100%;
        background-color:#ccc;
         box-shadow: 0 0 15px #999; 
    }
     .ul li img{
         width:100%;
         display: block;
    }
   
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }

    .info {
    position: absolute;
    bottom: 0;
    left: 0;
    max-height: 200px;
    background-color: rgba(0,0,0,.5);
    width: 100%;
}
    .info h5,.info p{
        font-size: 14px;
        color: #fff;
        line-height: 25px;
    }
    .info h5{
        font-size: 18px;
    }
</style>
