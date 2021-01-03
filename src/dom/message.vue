<template>
    <div>
        <h2>message提示</h2>
        <tButton class="btn" type='info' @click="info">info提示</tButton>
        <tButton class="btn" type='error' @click="error">error提示</tButton>
        <tButton class="btn" type='success' @click="success">success提示</tButton>
        <tButton class="btn" type='warning' @click="warning">warning提示</tButton>
        <tButton class="btn" @click="loading">loading提示,需要手动关闭</tButton>
        </div>
        <div class="settings" style="margin-top: 50px;">
        <tButton class="show-close" @click="show">显示关闭按钮</tButton>
        <tButton class="hide-close" @click="hidel">不显示关闭按钮</tButton>
        <tButton class="close-all"  @click="closeAll">立即关闭全部</tButton>
        <tButton class="create-loading"  @click="showLoading">创建一个loading</tButton>
        </div>
        <div class="position" style="margin-top: 50px;">
        <tButton class="set-position" data-position="left"  @click="left">左边显示</tButton>
        <tButton class="set-position" data-position="center"  @click="center">中间显示</tButton>
        <tButton class="set-position" data-position="right"  @click="right">右边显示</tButton>
        <tButton class="set-alone"  @click="alone">单独的右边</tButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tButton from '../packges/button'
import Message from '../packges/message/message'
export default defineComponent({
    components:{
        tButton
    },
    setup () {
       
        const methods = {
            info(){
                Message({
                    type: 'info',
                    content: 'info'
                })
            },
            error(){
                 Message({
                    type: 'error'
                })
            },
            success(){
                 Message({
                    type: 'success'
                })
            },
            warning(){
                 Message({
                    type: 'warning'
                })
            },
            show(){
                Message({
                    type: 'info',
                    content: '显示关闭按钮',
                    showClose: true
                })
            },
            hidel(){
                Message({
                    type: 'info',
                    content: '不显示关闭按钮',
                    showClose: false
                })
            },
            loading(){
                Message({
                    type: 'loading',
                    content: 'loading提示,需要手动关闭',
                    showClose: true
                })
            },
            showLoading(){
                Message({
                    type: 'loading',
                    content: '创建一个loading',
                    showClose: false
                })  
            },
            closeAll(){
                console.log('closeAll')
                Message({
                    closeAll: true
                })
            },
            left(){
                 Message({
                    type: 'info',
                    position:'left',
                    content: 'left'
                })
            },
            center(){
                  Message({
                    type: 'info',
                    position:'center',
                    content: 'center'
                })
            },
            right(){
                  Message({
                    type: 'info',
                    position:'right',
                    content: 'right'
                })
            },
            alone(){
                  Message({
                    type: 'info',
                    right: true
                })
            }
        }
        return {
            ...methods
        }
    }
})
</script>

<style scoped lang="scss">
.btn{
    margin: 10px;
}
.settings,.position{
    button{
        margin:10px;
    }
}
</style>