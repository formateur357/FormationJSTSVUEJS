
<template>
  <!-- 
  - Une div racine qui utilise une liaison de classe pour appliquer soit la classe "light", soit "dark" en fonction de la valeur de la variable réactive "theme".
  -->
  <div :class="theme">
      <!-- Un bouton qui, lorsqu'il est cliqué, exécute la fonction "toggleTheme" pour basculer le thème entre "light" et "dark". -->
      <button @click="toggleTheme">Toggle theme</button>
      
      <!-- Inclut le composant ThemeDisplay qui affiche le thème actuel. -->
      <ThemeDisplay></ThemeDisplay>
  </div>
</template>

<script setup lang="ts">
// Importations nécessaires pour la logique de ce composant
import { ref, provide } from "vue"
import ThemeDisplay from "./ThemeDisplay.vue"

// Initialisation de la propriété réactive "theme" avec la valeur initiale "light"
const theme = ref("light")

// Utilise la fonction "provide" pour rendre la référence "theme" disponible pour injection dans les composants descendants.
provide("theme", theme)

// Une fonction qui bascule la valeur de "theme" entre "light" et "dark"
const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light"
}
</script>

<!-- Styles spécifiques pour les thèmes "light" et "dark". Ils définissent les couleurs de fond et de texte. -->
<style scoped lang="scss">
.light {
  background-color: white;
  color: black;
}
.dark { 
  background-color: black;
  color: white;
}
</style>