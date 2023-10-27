<!-- Child Component -->
<template>
  <!-- Racine du composant enfant -->
  <div class="child-component">
    <!-- Slot par défaut pour insérer un contenu depuis le composant parent -->
    <slot />
    <!-- Titre indiquant que c'est le composant enfant -->
    <h1>child-componentComponent</h1>
    <!-- Bouton qui, lorsqu'il est cliqué, déclenche une fonction pour mettre à jour le composant parent -->
    <button @click="updateParent">Trigger Parent</button>
  </div>
</template>

<script setup lang="ts">
// Import de la fonction getCurrentInstance de Vue pour obtenir l'instance actuelle du composant
import { getCurrentInstance } from "vue"

// Récupération de l'instance actuelle du composant
const instance = getCurrentInstance()

// Fonction pour afficher une alerte depuis le composant enfant
const sayHello = () => {
  alert("Hello from the child component !")
}

// Fonction pour mettre à jour le composant parent
const updateParent = () => {
  // Vérification si l'instance est définie et si le composant parent a une méthode handleUpdate
  instance?.proxy?.$parent?.handleUpdate("Updated by the child")
}

// Exposition de la fonction sayHello pour qu'elle soit accessible depuis le composant parent
defineExpose({
  sayHello
})
</script>

<style scoped lang="scss">
  // Ici, vous pouvez ajouter des styles spécifiques pour le composant enfant.
</style>