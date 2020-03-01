<template>
  <div id="app">
    <router-view class="main-view" v-if="indexShow"></router-view>
    <Loading v-else />
  </div>
</template>

<script>
import Loading from "@/components/AnimateLoading";
export default {
  name: "App",
  components: {
    Loading
  },
  data() {
    return {
      indexShow: false
    };
  },
  mounted() {
    this.indexShow = false;
    setTimeout(() => {
      this.indexShow = true;
    }, 2000);
  }
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>