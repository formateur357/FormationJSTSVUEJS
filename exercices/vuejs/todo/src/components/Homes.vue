<template>
  <div class="homes">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Homes",
  setup() {
    // declaration de la propriete reactive msg
    const msg = ref("Hello from vue !");

    // Fonction executee apres le montage du composant
    onMounted(() => {
      setTimeout(() => {
        msg.value = "Message modifie apres 3 secondes.";
      }, 3000);
    });

    return { msg };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
