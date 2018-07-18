<template>
    <div>
        <div class="mui-numbox" 
            data-numbox-step='1' 
            data-numbox-min='1' 
            data-numbox-max='100'>
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" @change="countChange" ref="count"/>
                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
		</div>
    </div>
</template>

<script>
import mui from "../lib/mui/js/mui.js";
export default {
    data(){
        return {
            // CountValue:this.$refs.count.value
        }
    },
    methods:{
        countChange(){
            this.$emit("countcahngge",parseInt(this.$refs.count.value));
        }   
    },
    mounted(){
        mui(".mui-numbox").numbox().setOption('step',1)	
    }
}
</script>

<style>
.mui-numbox{
	margin-bottom: 10px;
}
</style>
