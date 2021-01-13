<template>
 <div>
  <div id="nav" >
    <router-link to="/" class="btns">home</router-link>
    <router-link to="/button" class="btns">button</router-link>
    <router-link  to="/icon" class="btns">icon</router-link>
    <router-link  to="/message" class="btns">message</router-link>
    <router-link  to="/alert" class="btns">alert</router-link>
  </div>
  <router-view/>
 </div>
</template>

<style lang="scss">
  #nav{
      margin: 10px;
    .btns{
      margin: 5px;
    }
  }
</style>
