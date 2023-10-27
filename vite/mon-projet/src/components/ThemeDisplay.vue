<template>
  <!-- Une div qui affiche le thème actuel en utilisant la propriété injectée "theme". -->
  <div class="theme-display">
      <p>Current Theme: {{ theme }}</p>
  </div>
</template>

<script setup lang="ts">
// Importe la fonction "inject" pour récupérer les propriétés fournies par un composant parent.
import { inject } from "vue"

// Injecte la référence "theme" fournie par le composant parent (probablement ThemeProvider).
const theme = inject("theme")

</script>

<!-- Ce composant n'a pas de styles spécifiques, donc la section <style> est vide. -->
<style scoped lang="scss">
</style>