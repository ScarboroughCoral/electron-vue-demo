<template>
  <v-container class="fill-height">
    <v-snackbar
      v-model="logShow"
    >
    缓慢任务队列加载中。。。（加载完毕后提示关闭）
    </v-snackbar>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">衡量属性</th>
            <th class="text-left">JavaScript</th>
            <th class="text-left">WebAssembly</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.type }}</td>
            <td>{{ item.js }}ms</td>
            <td>{{ item.wasm }}ms</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import makeFactorial from "./test.wasm";
import TaskQueue from "@/tools/TaskQueue";
export default {
  data() {
    return {
      items: [],
      logShow:true,
    };
  },
  methods: {
    wasmTest() {
      let q = new TaskQueue();
      let num = 15;
      let count = 10e6;
      makeFactorial().then(m => {
        let wasmFact = m.instance.exports._Z4facti;
        const delay = 500;
        while (num < 20) {
          q.task(delay, () => {
            let wasm = Date.now();
            for (let i = 0; i < count; i++) wasmFact(num);
            wasm = Date.now() - wasm;
            let js = Date.now();
            for(let i=0;i<count;i++) fact(num);
            js = Date.now() - js;
            this.items.push({
              type: `${num}!`,
              wasm,
              js
            });
          });
          num++;
        }
        q.start().then(()=>{
          this.logShow=false;
        })
      });
      function fact(n) {
        if (n < 2) return 1;
        return fact(n - 1) * n;
      }
    }
  },
  mounted() {
    this.wasmTest()
    // new TaskQueue()
    // .task(1000, () => {
    //     console.log(1);
    // })
    // .task(2000, () => {
    //     console.log(2);
    // })
    // .task(3000, () => {
    //     console.log(3);
    // })
    // .start();
  }
};
</script>

<style scoped>
</style>