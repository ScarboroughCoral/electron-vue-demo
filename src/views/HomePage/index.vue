<template>
  <div class="is-grid has-text-centered">
    <router-link
      v-for="(item,index) in menuConfig"
      :to="item.route"
      :key="index" 
    >
      <menu-item 
        :title="item.title" 
        :color="item.color"
        :icon="item.icon"
      >
      </menu-item>
    </router-link>
  </div>
</template>

<script>
  import MenuItem from '@/components/MenuItem';
  import menuConfig from '@/config/menuConfig.js';
  export default {
    components:{
      MenuItem
    },
    data(){
      return {
        menuConfig
      }
    }
  }
</script>

<style scoped>
  .is-grid{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    grid-gap: 10px;
    padding: 100px;
    background-color: antiquewhite;
  }
  
</style>