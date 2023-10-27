// Importation de la méthode reactive depuis Vue 3
import { reactive } from "vue";
import { Category, Todo } from "@/services/todoUtils";

// État global de l'application, stocké sous forme réactive
const state = reactive<{
  todos: Todo[];
  categories: string[];
}>({
  todos: [],
  categories: Object.values(Category),
});

// Actions et sélecteurs pour manipuler l'état
export const store = reactive({
  state,

  // Ajout d'une nouvelle tâche à la liste
  addTodo(todo: Todo) {
    state.todos.push(todo);
  },

  // Recherche une tâche par son ID
  getTodo(id: number) {
    return (
      state.todos.find((todo) => todo.id === id) || {
        // Si introuvable, renvoie une tâche par défaut
        id: Date.now(),
        title: "tache introuvable",
        tempText: "",
        done: false,
        editing: false,
        priority: "low",
        category: Category.PERSONNEL,
      }
    );
  },

  // Suppression d'une tâche par son ID
  removeTodo(id: number) {
    const index: number = state.todos.findIndex((todo: Todo) => todo.id === id);
    if (index !== -1) {
      state.todos.splice(index, 1);
    }
  },

  // Basculer la complétude d'une tâche
  toggleTodo(id: number) {
    const todo = state.todos.find((t) => t.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  },

  // Éditer une tâche existante
  editTodo(id: number, updatedTodo: Todo) {
    const index: number = state.todos.findIndex((todo: Todo) => todo.id === id);
    if (index !== -1) {
      state.todos[index] = { ...state.todos[index], ...updatedTodo };
    }
  },
});
