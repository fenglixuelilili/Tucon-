<template>
    <div class="newsList">
       <h3>{{list.title}}</h3>
       <p class="auther">
           <span>发表时间：2015-4-5</span>
           <span>点击次数</span>
       </p>
       <hr>
       <div class="content">
           <p v-for="lis in list.subjects" :key="lis.id">
               {{lis.title}} <br>
               <img :src="lis.images.medium">
           </p>
       </div>
       <cmt-box :name="name"></cmt-box>
    </div>
</template>

<script>
    import $ from "../../../node_modules/jquery/dist/jquery.min.js";
    import comment from "../../comments/cmt.vue";
    export default {
        data(){
            return {
                list:null,
                 name:this.$route.params.name
            }
        },
        methods:{
            getNews(){
                var name=this.$route.params.name;
                $.ajax({
                    type:'get',
                    url:`https://api.douban.com/v2/movie/search?q=${name}`,
                    dataType:'jsonp',
                    success:(data)=>{
                       console.log(data);
                        this.list=data;
                    }
                });
            }
        },
        created(){
            this.getNews();
        },
        components:{
            "cmt-box":comment
        }
    }
</script>
    
<style>

        h3{
            text-align: center;
            font-size: 14px;
            font-weight: normal;
            color: red;
        }
        .auther{
            display: flex;
            justify-content:space-between;
            padding: 0 20px;
        }
        .content{
            padding-left: 20px;
        }
        .content p{
            color:black;

        }
        .newsList{
            padding-bottom: 50px;
        }
</style>
