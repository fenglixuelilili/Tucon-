<template>
    <div>
          <div class="lunbo">
                <mt-swipe :auto="4000" class="h">
                    <mt-swipe-item v-for="(item,index) in swipers" :key="index"><img :src="item" alt=""></mt-swipe-item>
                    <!-- <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item> -->
                </mt-swipe>
            </div>
            
    </div>
</template>

<script>
export default {
    data(){
        return {
            swiperlist: []
        }
    },
    methods(){

    },
    props:['swipers']
}
</script>

<style lang="scss" scoped>

.lunbo .h {
    img{
        // width: 100%;
        height: 100%;
    }
    text-align: center;
  height: 200px;
  .mint-swipe-items-wrap div {
    // &:nth-child(1) {
    //   background-color: aqua;
    // }
    // &:nth-child(2) {
    //   background-color: red;
    // }
    // &:nth-child(3) {
    //   background-color: blue;
    // }
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
