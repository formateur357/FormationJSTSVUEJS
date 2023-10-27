"use strict";
// Types et fonctions utilitaires pour gérer les tâches
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.sortTodos = exports.priorityOrder = exports.Category = void 0;
// definition de l'enum des categories
var Category;
(function (Category) {
    Category["TRAVAIL"] = "travail";
    Category["PERSONNEL"] = "personnel";
    Category["MAISON"] = "maison";
})(Category = exports.Category || (exports.Category = {}));
// Objet associant chaque priorité à un ordre numérique pour le tri
exports.priorityOrder = {
    high: 2,
    medium: 1,
    low: 0
};
// Fonction pour trier les tâches par priorité
exports.sortTodos = function (todos) {
    return __spreadArrays(todos).sort(function (a, b) { return exports.priorityOrder[a.priority] - exports.priorityOrder[b.priority]; });
};
