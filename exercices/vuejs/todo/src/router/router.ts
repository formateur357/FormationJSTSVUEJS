// Importation des méthodes nécessaires pour créer un routeur et utiliser l'historique web
import { createRouter, createWebHistory } from "vue-router";

// Importation des composants qui seront affichés selon les différentes routes
import Homes from "../components/Homes.vue"; // Composant pour la page d'accueil
import ExempleVue from "@/components/Exemple.vue"; // Composant d'exemple

// Définition des différentes routes de l'application
const routes = [
  {
    path: "/exemple/:id", // URL avec un paramètre "id"
    name: "exemple", // Nom de la route pour faciliter sa référence
    component: ExempleVue, // Composant qui sera affiché pour cette route
  },
  {
    path: "/", // URL de la page d'accueil
    name: "homes", // Nom de la route pour la page d'accueil
    component: Homes, // Composant pour la page d'accueil
  },
  // Vous pouvez ajouter d'autres routes ici si nécessaire
];

// Création de l'instance du routeur en utilisant les routes définies ci-dessus
const router = createRouter({
  history: createWebHistory(), // Utilisation de l'historique web pour le mode HTML5
  routes, // Routes définies
});

// Exportation de l'instance du routeur pour être utilisée dans l'application principale
export default router;
