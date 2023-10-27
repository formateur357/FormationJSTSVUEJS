<script lang="ts">
// Importation des méthodes nécessaires pour définir un composant
import { defineComponent } from "vue";

// Définition du composant "ExempleComponent"
export default defineComponent({
  name: "ExempleComponent",
});
</script>

<script setup lang="ts">
// Importation des hooks de composition pour la réactivité et le routage
import { ref } from "vue";
import { useRoute } from "vue-router";

// Utilisation du hook useRoute pour accéder aux détails de la route actuelle
const route = useRoute();

// Extraction du paramètre "id" de l'URL
const id = route.params.id;

// Extraction du paramètre de requête "name" de l'URL
const query = route.query.name;

// Initialisation d'une propriété réactive pour stocker une valeur
const value = ref("HelloWorld");
</script>

<template>
  <!-- Structure HTML du composant -->
  <div id="helloworld">
    <!-- Champ de saisie lié à la propriété réactive "value" -->
    <input v-model="value" type="text" />

    <!-- Affichage de la valeur du paramètre "id" -->
    <p>{{ id }}</p>

    <!-- Affichage de la valeur du paramètre de requête "name" -->
    <p>{{ query }}</p>

    <!-- Lien pour naviguer vers une autre route en passant un paramètre "id" -->
    <router-link :to="{ name: 'exemple', params: { id: 3 } }">
      Voir les détails
    </router-link>
  </div>
</template>

<!-- Styles propres à ce composant uniquement grâce à l'attribut "scoped" -->
<style scoped>
#helloworld {
  text-align: center;
  text-decoration: underline;
}
</style>
