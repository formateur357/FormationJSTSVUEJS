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
var vue_1 = require("vue");
var state = vue_1.reactive({
    todos: []
});
exports.store = vue_1.reactive({
    state: state,
    addTodo: function (todo) {
        state.todos.push(todo);
    },
    getTodo: function (id) {
        return (state.todos.find(function (todo) { return todo.id === id; }) || {
            id: Date.now(),
            title: "tache introuvable",
            tempText: "",
            done: false,
            editing: false,
            priority: "low"
        });
    },
    removeTodo: function (id) {
        var index = state.todos.findIndex(function (todo) { return todo.id === id; });
        if (index !== -1) {
            state.todos.splice(index, 1);
        }
    },
    toggleTodo: function (id) {
        var todo = state.todos.find(function (t) { return t.id === id; });
        if (todo) {
            todo.done = !todo.done;
        }
    },
    editTodo: function (id, updatedTodo) {
        var index = state.todos.findIndex(function (todo) { return todo.id === id; });
        if (index !== -1) {
            state.todos[index] = __assign(__assign({}, state.todos[index]), updatedTodo);
        }
    }
});
