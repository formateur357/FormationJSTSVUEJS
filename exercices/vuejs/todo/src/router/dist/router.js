"use strict";
exports.__esModule = true;
// Importation des méthodes nécessaires pour créer un routeur et utiliser l'historique web
var vue_router_1 = require("vue-router");
// Importation des composants qui seront affichés selon les différentes routes
var Homes_vue_1 = require("../components/Homes.vue"); // Composant pour la page d'accueil
var Exemple_vue_1 = require("@/components/Exemple.vue"); // Composant d'exemple
// Définition des différentes routes de l'application
var routes = [
    {
        path: "/exemple/:id",
        name: "exemple",
        component: Exemple_vue_1["default"]
    },
    {
        path: "/",
        name: "homes",
        component: Homes_vue_1["default"]
    },
];
// Création de l'instance du routeur en utilisant les routes définies ci-dessus
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(),
    routes: routes
});
// Exportation de l'instance du routeur pour être utilisée dans l'application principale
exports["default"] = router;
