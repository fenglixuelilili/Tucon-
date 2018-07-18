<template>
    <div class="cmt">
      <h4>发表评论</h4>
       <textarea  placeholder="最多评论120字" maxlength="120" v-model="value"></textarea>
       <mt-button type="primary" class="fcmt" @click="postlist">发表评论</mt-button>

       <div class="cmt-content" v-for="(item,index) in list" :key="item.id">
           <h4>第{{index+1}}楼 &nbsp;&nbsp;{{item.title}}  发表时间： {{item.year}} </h4>
            <span v-for="(list,index) in item.genres" :key="index">
                {{list}}
            </span>
       </div>

       <mt-button type="danger" class="morecmt" plain>加载更多</mt-button>
    </div>
</template>

<script>
 import $ from "../../node_modules/jquery/dist/jquery.min.js";
 import { Toast } from 'mint-ui';

export default  {
    props:['name'],
    data(){
        return {
            list:[],
            value:''
        }
    },  
    methods:{
          getNews(){
                var name=this.name;
                $.ajax({
                    type:'get',
                    url:`https://api.douban.com/v2/movie/search?q=${name}`,
                    dataType:'jsonp',
                    success:(data)=>{
                        Toast('加载成功');
                        console.log(data);
                        this.list=data.subjects;
                    }
                });
            },
            postlist(){
                if(this.value.trim().length===0){
                    return Toast('内容不能为空');
                };
                var cmtobj={
                    year:new Date(),
                    title:'匿名用户',
                    id:Math.random(),
                    genres:[
                        this.value
                    ]
                };
                this.list.unshift(cmtobj);
                this.value="";
            }
    },
    created(){
         this.getNews();
    }
}
</script>

<style scope>
.cmt textarea{
    padding-right: 10px;
    /* width: 90%; */
    margin: 0;
}

.fcmt,.morecmt{
    width: 100%;
}
.cmt-content{
    line-height: 30px;

}
.cmt-content h4{
    line-height: 35px;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    padding: 0;
    margin: 5px 0;
    background-color: rgba(0,0,0,.3);
}
</style>
