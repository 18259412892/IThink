<template>
    <div  style="padding:20px;">
        <h2>icon 默认类型</h2>
        <div style="margin-top:30px" class="icon-types">
            <tIcon/>
            <tIcon  icon="fahuochengnuo" color="blue"/>
            <tIcon  size="30" icon="hebing" color="#ff4056"/>
            <tIcon  size="30" icon="tuikuan" color="#ef5b9c"/>
            <tIcon  size="30" icon="yingshe" color="#f05b72"/>
            <tIcon  size="30" icon="zhongji" color="#b7ba6b"/>
            <tIcon  size="30" icon="chaifen" color="#2a5caa"/>
            <tIcon  size="30" icon="yewubiaoji" color="#bed742"/>
            <tIcon  size="30" icon="zidongpaidan" color="#6a6da9"/>
            <tIcon  size="30" icon="baohanquehuodingdan" color="#d64f44"/>
            <tIcon  size="30" icon="baohanjiufendingdan" color="#ed1941"/>
            <tIcon  size="30" icon="daishendan" color="#fab27b"/>
            <tIcon  size="30" icon="daifahuo" color="#9b95c9"/>
            <tIcon  size="30" icon="fahuowancheng" color="#6950a1"/>
            <tIcon  size="30" icon="fahuozhong" color="#444693"/>
            <tIcon  size="30" icon="dingdanquxiao" color="#769149"/>
            <tIcon  size="30" icon="lishidingdan" color="#7fb80e"/>
            <tIcon  size="30" icon="weibiaoti-2" color="#905d1d"/>
            <tIcon  size="30" icon="fulirundingdan" color="#f58220"/>
            <tIcon  size="30" icon="quanbu" color="#b2d235"/>
            <tIcon  size="30" icon="yizuofei" color="#45b97c"/>
            <tIcon  size="30" icon="youliuyan" color="#ffc20e"/>
            <tIcon  size="30" icon="yichang" color="#8552a1"/>
            <tIcon  size="30" icon="weishengcheng" color="#f173ac"/>
            <tIcon  size="30" icon="shouye" color="#008792"/>
            <tIcon  size="40" icon="chulizhong" color="#009ad6"/>
            <tIcon  size="50" icon="guanbi" color="#2585a6"/>
        </div>
        <h2>icon svg 类型</h2>
        <div style="margin-top:30px">
            <tIcon type="svg"/>
            <tIcon type="svg" icon="fahuochengnuo"/>
            <tIcon type="svg" size="30" icon="hebing"/>
            <tIcon type="svg" size="30" icon="tuikuan"/>
            <tIcon type="svg" size="30" icon="yingshe"/>
            <tIcon type="svg" size="30" icon="zhongji"/>
            <tIcon type="svg" size="30" icon="chaifen"/>
            <tIcon type="svg" size="30" icon="yewubiaoji"/>
            <tIcon type="svg" size="30" icon="zidongpaidan"/>
            <tIcon type="svg" size="30" icon="baohanquehuodingdan"/>
            <tIcon type="svg" size="30" icon="baohanjiufendingdan"/>
            <tIcon type="svg" size="30" icon="daishendan"/>
            <tIcon type="svg" size="30" icon="daifahuo"/>
            <tIcon type="svg" size="30" icon="fahuowancheng"/>
            <tIcon type="svg" size="30" icon="fahuozhong"/>
            <tIcon type="svg" size="30" icon="dingdanquxiao"/>
            <tIcon type="svg" size="30" icon="lishidingdan"/>
            <tIcon type="svg" size="30" icon="weibiaoti-2"/>
            <tIcon type="svg" size="30" icon="fulirundingdan"/>
            <tIcon type="svg" size="30" icon="quanbu"/>
            <tIcon type="svg" size="30" icon="yizuofei"/>
            <tIcon type="svg" size="30" icon="youliuyan"/>
            <tIcon type="svg" size="30" icon="yichang"/>
            <tIcon type="svg" size="30" icon="weishengcheng"/>
            <tIcon type="svg" size="30" icon="shouye"/>
            <tIcon type="svg" size="40" icon="chulizhong"/>
            <tIcon type="svg"  size="50" icon="guanbi"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tIcon from '../packges/Icon/icon'
export default defineComponent({
    components:{
        tIcon
    },
    setup () {
        const _methods = {
           
        }
        return{
            ..._methods
        }
    }
})
</script>

<style scoped>

.icon-types .i-think-icon{
    margin:10px;
}
    buttong,svg{
        margin:10px;
    }
    
</style>