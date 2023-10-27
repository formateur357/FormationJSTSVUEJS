"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.store = void 0;
// Importation de la méthode reactive depuis Vue 3
var vue_1 = require("vue");
// État global de l'application, stocké sous forme réactive
var state = vue_1.reactive({
    todos: []
});
// Actions et sélecteurs pour manipuler l'état
exports.store = vue_1.reactive({
    state: state,
    // Ajout d'une nouvelle tâche à la liste
    addTodo: function (todo) {
        state.todos.push(todo);
    },
    // Recherche une tâche par son ID
    getTodo: function (id) {
        return (state.todos.find(function (todo) { return todo.id === id; }) || {
            // Si introuvable, renvoie une tâche par défaut
            id: Date.now(),
            title: "tache introuvable",
            tempText: "",
            done: false,
            editing: false,
            priority: "low"
        });
    },
    // Suppression d'une tâche par son ID
    removeTodo: function (id) {
        var index = state.todos.findIndex(function (todo) { return todo.id === id; });
        if (index !== -1) {
            state.todos.splice(index, 1);
        }
    },
    // Basculer la complétude d'une tâche
    toggleTodo: function (id) {
        var todo = state.todos.find(function (t) { return t.id === id; });
        if (todo) {
            todo.done = !todo.done;
        }
    },
    // Éditer une tâche existante
    editTodo: function (id, updatedTodo) {
        var index = state.todos.findIndex(function (todo) { return todo.id === id; });
        if (index !== -1) {
            state.todos[index] = __assign(__assign({}, state.todos[index]), updatedTodo);
        }
    }
});
