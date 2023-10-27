<!-- Parent Component -->
<template>
  <!-- Racine du composant parent -->
  <div class="parent-component"> 
    <!-- Affichage du message du composant parent -->
    <p>{{ parentMessage }}</p>
    <!-- Utilisation du composant enfant avec un ref pour pouvoir y accéder depuis le script -->
    <ChildComponentComponent ref="childRef">
      <!-- Contenu à insérer dans le slot par défaut du composant enfant -->
      <p>Bonjour from template</p>
    </ChildComponentComponent>
    <!-- Bouton qui, lorsqu'il est cliqué, déclenche la fonction sayHello du composant enfant -->
    <button @click="childRef?.sayHello()">Trigger Child</button>
  </div>
</template>

<script setup lang="ts">
// Importation des fonctionnalités nécessaires de Vue
import { ref } from "vue"
// Importation du composant enfant
import ChildComponentComponent from "./ChildComponent.vue";

// Initialisation du message du composant parent
const parentMessage = ref("Initial parent message");
// Définition de la référence pour le composant enfant afin d'y accéder depuis le script
const childRef = ref<InstanceType<typeof ChildComponentComponent>>();

// Fonction pour gérer les mises à jour provenant du composant enfant
const handleUpdate = (message: string) => {
  parentMessage.value = message;
}

// Exposition de la fonction handleUpdate pour qu'elle soit accessible depuis le composant enfant
defineExpose({
  handleUpdate
})
</script>

<style scoped>
  /* Ici, vous pouvez ajouter des styles */
</style>