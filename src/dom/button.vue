<template>
    <div>
        <tButton @click="btns">默认 {{d}}</tButton>
        <tButton type="success">success</tButton>
        <tButton type="error">error</tButton>
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
       <hr/>
    </div>
</template>
<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
import tButton from '../packges/button'
export default defineComponent({
    components:{
        tButton
    },
    setup () {
        const state = reactive({
            d:1
        })
        const methods  = {
            btns(){
                alert(2)
            }
        }
        return {
            ...toRefs(state),
            ...methods
        }
    }
})
</script>

<style scoped lang="scss">
@import '@/packges/styles/index.scss';
button{
    margin:0 10px;
}
</style>