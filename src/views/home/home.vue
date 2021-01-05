<template>
    <div class="text">
        <h2>欢迎来到~IThink (我思 故我在) vue3.0+ts 组件库</h2>
        <h4>正在全力奔跑中...</h4>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {

        return {}
    }
})
</script>

<style scoped lang="scss">
    @import '../../packges/styles/_var.scss';
    .text{
        text-align: center;
        h2{
            color:$primary;
        }
        h4{
            margin-top:10+$px;
            color:$warning;
        }
    }
</style>