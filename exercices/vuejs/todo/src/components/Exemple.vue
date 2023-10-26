<script setup lang="ts">
import { ref } from "vue";

const value = ref("HelloWorld");
</script>

<template>
  <div id="helloworld">
    <input v-model="value" type="text" />
    <p>{{ value }}</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#helloworld {
  text-align: center;
  text-decoration: underline;
}
</style>
