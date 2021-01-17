<template>
    <div  style="padding:20px;">
        <h2>alert弹窗 tip = '1' 默认</h2>
        <div style="margin-top:100px">
        <tButton   @click="success('primary')">alert弹窗</tButton>
        <tButton type="success"  @click="success('success')">success alert弹窗</tButton>
        <tButton type="error"  @click="success('error')">error alert弹窗</tButton>
        <tButton type="info"  @click="success('info')">info alert弹窗</tButton>
        <tButton type="warning"  @click="success('warning')">warning alert弹窗</tButton>
        <tButton type="dark"  @click="success('dark')">dark alert弹窗</tButton>
        <tButton type="danger"  @click="success('danger')">danger alert弹窗</tButton>
        <tButton disabled>disabled</tButton>
        </div>
        <h2>alert弹窗 tip = '2'</h2>
        <div>
            <tButton @click="success('primary',1)">alert弹窗</tButton>
            <tButton type="success"  @click="success('success',1)">success alert弹窗</tButton>
            <tButton type="error"  @click="success('error',1)">error alert弹窗</tButton>
            <tButton type="info"  @click="success('info',1)">info alert弹窗</tButton>
            <tButton type="warning"  @click="success('warning',1)">warning alert弹窗</tButton>
            <tButton type="dark"  @click="success('dark',1)">dark alert弹窗</tButton>
            <tButton type="danger"  @click="success('danger',1)">danger alert弹窗</tButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tAlert from '../packges/Alert/alert'
import tButton from '../packges/button'
export default defineComponent({
    components:{
        tButton,
    },
    setup () {
        const _methods = {
            success(type:string,index:number){
                if(index == 1){
                    let _parms = {};
                    tAlert({
                        tip: '2',
                        type,
                        message:`提示弹窗`,
                        ..._parms
                    })
                } else {
                    tAlert({
                        type,
                        message:`<div>提示弹窗 ${type}</div>`
                    })
                }
               
            }
        }
        return{
            ..._methods
        }
    }
})
</script>

<style scoped>
    button{
        margin:10px;
    }
</style>