<template>
  <div class="container">
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
  </div>
</template>

<script>
import makeFactorial from "./test.wasm";

export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    wasmTest() {
      let num = 15;
      let count=10e6;
      makeFactorial().then(m => {
        let wasmFact=m.instance.exports._Z4facti;
        while (num < 20) {
          let wasm = Date.now();
          for(let i=0;i<count;i++) wasmFact(num);
          wasm = Date.now() - wasm;
          console.log(wasm)
          let js = Date.now();
          for(let i=0;i<count;i++) fact(num);
          js = Date.now() - js;
          this.items.push({
            type:`${num}!`,
            wasm:wasm,
            js:js
          })
          num++;
        }
      });
      function fact(n) {
        if (n < 2) return 1;
        return fact(n - 1) * n;
      }
    }
  },
  mounted() {
    this.wasmTest();
  }
};
</script>

<style scoped>
</style>