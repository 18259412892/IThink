<template>
    <div  style="padding:20px;">
        <h2>alert弹窗 tip = '1' 默认</h2>
        <div style="margin-top:300px">
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
            <tButton @click="success('alert')">alert弹窗</tButton>
            <tButton @click="success('alert1')">alert弹窗</tButton>
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
            success(type:string){
                if(['alert1','alert'].includes(type)){
                    let _parms = {};
                    if(type == 'alert'){
                        _parms = {
                            message: '<div><b>tip1</b></div>',
                            ok(){
                                alert(2)
                            }
                        }
                    }
                    tAlert({
                        tip: '2',
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