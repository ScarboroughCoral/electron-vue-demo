<template>
  <div class="page-container">
    <el-page-header @back="$router.push('/')" content="真机模拟"></el-page-header>
    <div class="simulator-container">
      <simulator></simulator>
    </div>
  </div>
</template>

<script>
import Simulator from '@/components/Simulator';
export default {
  components:{
    Simulator
  },
  mounted() {


  }
};
</script>

<style scoped>
.page-container,.simulator-container{
  width: 100%;
  height: 100%;
}
</style>