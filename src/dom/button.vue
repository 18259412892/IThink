<template>
    <div style="background:#ccc;padding:20px; ">
        <tButton @click="btns" >默认 {{d}}</tButton>
        <tButton type="success">success</tButton>
        <tButton type="error" loading>error</tButton>
        <tButton type="info">info</tButton>
        <tButton type="warning">warning</tButton>
        <tButton type="dark">dark</tButton>
        <tButton type="danger">danger</tButton>
        <tButton disabled>disabled</tButton>
        <br/>
        <br/>
        <br/>
       <hr/>
       <b>大小</b>
       large | middle | small
        <tButton type="success" size="large">大</tButton>
        <tButton type="success" size="middle">默认</tButton>
        <tButton type="success" size="small">小</tButton>
        <br/>
        <br/>
        <br/>
        <b>图标</b>
         <tButton type="success" size="small" icon="tuite">小</tButton>
         <tButton type="success" size="middle"  icon="lianshu">小</tButton>
         <tButton type="success" size="large" icon="ins" num="24">大</tButton>
         <tButton type="success" size="large" loading>大</tButton>
       <hr/>
         <br/>
        <br/>
          <br/>
        <br/>
        <h2>packges/styles/fonts 字体图标库  iconfontwpk wpk-ui-icon-xxx 输入xxx的标注即可</h2>
       <Icon num="40" icon="tuite"/>
       <Icon num="30" icon="burenshini"/>
       <Icon num="50" icon="dianhua1"/>
       <Icon num="20" icon="lianshu"/>
        <br/>
        <br/>
        <Loading/>
        <Loading num="2"/>
        <Loading  num="3"/>
        <Loading  num="4"/>
        <Loading num="5"/>
        <Loading num="6"/>
        <Loading num="7"/>
        <Loading num="8"/>
    </div>
</template>
<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
import tButton from '../packges/button'
import Icon from '../packges/Icon/icon'
import Loading from '../packges/Loading/loading'
export default defineComponent({
     name: 'iTButton',
    components:{
        tButton,
        Icon,
        Loading
    },
    setup () {
        const state = reactive({
            d:1
        })
        const methods1  = {
            btns: function(){
                alert(2)
            }
        }
        return {
            ...toRefs(state),
            ...methods1
        }
    }
})
</script>

<style scoped lang="scss">

button{
    margin:0 10px;
}
</style>