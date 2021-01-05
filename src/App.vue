<template>
  <div id="nav">
    <router-link to="/button" class="btns">button</router-link>
    <router-link  to="/message" class="btns">message</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
  #nav{
      margin: 10px;
    .btns{
      margin: 5px;
    }
  }
</style>
