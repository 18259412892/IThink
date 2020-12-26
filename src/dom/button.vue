<template>
    <div>
        <tButton>默认</tButton>
        <tButton type="success">success</tButton>
        <tButton type="error">error</tButton>
        <tButton type="info">info</tButton>
        <tButton disabled>disabled</tButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tButton from '../packges/button'
export default defineComponent({
    components:{
        tButton
    },
    setup () {
        return {}
    }
})
</script>

<style scoped lang="scss">
@import '@/packges/styles/index.scss';
button{
    margin:0 10px;
}
</style>