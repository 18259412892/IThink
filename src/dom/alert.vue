<template>
    <div  style="padding:20px;">
        <h2>alert弹窗</h2>
        <div style="margin-top:300px">
            <tButton   @click="success('primary ')">alert弹窗</tButton>
        <tButton type="success"  @click="success('success')">success alert弹窗</tButton>
        <tButton type="error"  @click="success('error')">error alert弹窗</tButton>
        <tButton type="info"  @click="success('info')">info alert弹窗</tButton>
        <tButton type="warning"  @click="success('warning')">warning alert弹窗</tButton>
        <tButton type="dark"  @click="success('dark')">dark alert弹窗</tButton>
        <tButton type="danger"  @click="success('danger')">danger alert弹窗</tButton>
        <tButton disabled>disabled</tButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tAlert from '../packges/Alert/alert'
import tButton from '../packges/button'
export default defineComponent({
    components:{
        tButton
    },
    setup () {
        const _methods = {
            success(type:string){
                tAlert({
                    type,
                    message:`<div>提示弹窗 ${type}</div>`
                })
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