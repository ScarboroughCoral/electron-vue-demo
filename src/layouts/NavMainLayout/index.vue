<template>
  <div>
    <el-page-header class="has-background-primary" @back="$router.push('/')" content="content"></el-page-header>
    <div class="nav-main-is-main"></div>
  </div>
</template>

<script>
  export default {
    props:{
      content:String
    }
  }
</script>

<style scoped>

</style>