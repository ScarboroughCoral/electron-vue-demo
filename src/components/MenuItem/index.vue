<template>
  <div class="menu-item-container" :style="{'background-color':color}">
    <h2 class="menu-title title"><i :class="icon"></i><br>{{title}}</h2>
  </div>
</template>

<script>
  export default {
    props:{
      color: String,
      title: String,
      icon : String
    },
    data(){
      return {
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>
.menu-item-container{
  width: 100%;
  height: 100%;
  box-shadow: 20px 20px 50px grey; 
  transition: all 500ms ease-in-out;
  position: relative;
}
.menu-item-container:hover{
  transform: scale(1.2);
  z-index: 1;
}
.menu-item-container>.menu-title{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  z-index: 0;
  line-height: 1.8;
}
</style>