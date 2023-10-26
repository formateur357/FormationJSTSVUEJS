<script lang="ts">
import { defineComponent } from "vue";

// Définition d'un composant Vue nommé "HomeComponent"
export default defineComponent({
  name: "HomeComponent",
});
</script>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import TodoItemComponent from "@/components/TodoItemComponent.vue"; // Import du composant enfant
import { Todo, sortTodos } from "@/services/todoUtils"; // Import des utilitaires
import { store } from "@/services/store";

// Initialisation des propriétés réactives
const msg = ref("Todolist");
const newTodo = ref("");

// Calculs dérivés des propriétés
const totalTasks = computed(() => store.state.todos.length);
const completedTasks = computed(
  () => store.state.todos.filter((todo) => todo.done).length
);
const completionRate = computed(
  () => (completedTasks.value / totalTasks.value) * 100 || 0
);

// Tri des tâches
const sortedTodos = computed(() => sortTodos(store.state.todos));

// Surveillance des changements dans la liste des tâches
watch(store.state.todos, (newTodos) => {
  const inProgressTasks = newTodos.filter((todo) => !todo.done).length;
  if (inProgressTasks > 10) {
    alert("Vous avez plus de 10 taches non terminees!");
  }
});

// Fonctions pour manipuler les tâches
const addTodo = () => {
  if (newTodo.value.trim()) {
    store.addTodo({
      id: Date.now(),
      title: newTodo.value.trim(),
      tempText: "",
      done: false,
      editing: false,
      priority: "low",
    });
    newTodo.value = "";
  }
};

const deleteTodo = (id: number) => {
  store.removeTodo(id);
};
</script>

<!-- Code HTML du composant, incluant le sous-composant et les statistiques -->
<template>
  <div class="homes">
    <h1>{{ msg }}</h1>

    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Ajouter une tache..."
    />
    <button @click="addTodo">Ajouter</button>

    <ul v-for="(todo, index) in sortedTodos" :key="todo.id">
      <TodoItemComponent :id="todo.id" :index="index" @delete="deleteTodo" />
    </ul>
    <section>
      <h2>Statistiques</h2>
      <p>Total des taches : {{ totalTasks }}</p>
      <p>Taches Terminees : {{ completedTasks }}</p>
      <p>Pourcentage des taches terminees : {{ completionRate }}</p>
    </section>
  </div>
</template>

<!-- Styles propres à ce composant-->
<style scoped></style>
