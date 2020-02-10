<template>
  <div id="app" class="is-flex">
    <router-view v-if="indexShow"></router-view>
    <Loading id="loading" v-else/>
  </div>
</template>

<script>
import Loading from '@/components/AnimateLoading';

export default {
  name: 'App',
  components: {
    Loading
  },
  data() {
    return {
      indexShow: false
    }
  },
  mounted(){
    setTimeout(() => {
      this.indexShow=true;
    }, 3000);
  }
}
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#loading{
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #ffe196
}

</style>
