import { reactive } from "vue";
import { Todo } from "@/services/todoUtils";

const state = reactive<{
  todos: Todo[];
}>({
  todos: [],
});

export const store = reactive({
  state,

  addTodo(todo: Todo) {
    state.todos.push(todo);
  },

  getTodo(id: number) {
    return (
      state.todos.find((todo) => todo.id === id) || {
        id: Date.now(),
        title: "tache introuvable",
        tempText: "",
        done: false,
        editing: false,
        priority: "low",
      }
    );
  },

  removeTodo(id: number) {
    const index: number = state.todos.findIndex((todo: Todo) => todo.id === id);
    if (index !== -1) {
      state.todos.splice(index, 1);
    }
  },

  toggleTodo(id: number) {
    const todo = state.todos.find((t) => t.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  },

  editTodo(id: number, updatedTodo: Todo) {
    const index: number = state.todos.findIndex((todo: Todo) => todo.id === id);
    if (index !== -1) {
      state.todos[index] = { ...state.todos[index], ...updatedTodo };
    }
  },
});
