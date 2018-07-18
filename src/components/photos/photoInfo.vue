<template>
    <div>
        <h1>我是详情图片组件</h1>
        <p><span>发表时间：2015</span><span>点击次数</span></p>
        <div>我是发表的内容</div>
        <div class="img-view">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        
        <!-- <img src="../../imgs/menu1.png" alt=""> -->
        <cmt ></cmt>
    </div>
</template>

<script>
import cmt from "../../comments/cmt.vue";
export default {
    data(){
        return {
            slide1: [
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            },
            {
                src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                alt: 'picture2',
                title: 'Image Caption 2',
                w: 1200,
                h: 900
            }
        ]
        }
    },
    methods:{

    },
    created(){

    },
    components:{
        "cmt":cmt
    }

}
</script>

<style>
    figure{
        padding: 0;
        margin: 0;
        display: inline;
        margin-right: 5px;
        margin-left: 12px;
    }
</style>
