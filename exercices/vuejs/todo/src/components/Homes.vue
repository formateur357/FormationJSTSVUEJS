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

// Initialisation des propriétés réactives
const msg = ref("Todolist");
const newTodo = ref("");
const todos = ref<Array<Todo>>([]);

// Calculs dérivés des propriétés
const totalTasks = computed(() => todos.value.length);
const completedTasks = computed(
  () => todos.value.filter((todo) => todo.done).length
);
const completionRate = computed(
  () => (completedTasks.value / totalTasks.value) * 100 || 0
);

// Tri des tâches
const sortedTodos = computed(() => sortTodos(todos.value));

// Surveillance des changements dans la liste des tâches
watch(todos, (newTodos) => {
  const inProgressTasks = newTodos.filter((todo) => !todo.done).length;
  if (inProgressTasks > 10) {
    alert("Vous avez plus de 10 taches non terminees!");
  }
});

// Fonctions pour manipuler les tâches
const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
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

const toggleDone = (index: number) => {
  todos.value[index].done = !todos.value[index].done;
};

const deleteTodo = (index: number) => {
  todos.value.splice(index, 1);
};

const startEditTodo = (index: number) => {
  todos.value[index].editing = true;
  todos.value[index].tempText = todos.value[index].title;
};

const finishEditTodo = (index: number) => {
  if (todos.value[index].tempText.trim()) {
    todos.value[index].title = todos.value[index].tempText;
    todos.value[index].editing = false;
  }
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
      <TodoItemComponent
        :todo="todo"
        :index="index"
        @delete="deleteTodo"
        @edit="startEditTodo"
        @finishEdit="finishEditTodo"
        @toggleDone="toggleDone"
      />
    </ul>
    <section>
      <h2>Statistiques</h2>
      <p>Total des taches : {{ totalTasks }}</p>
      <p>Taches Terminees : {{ completedTasks }}</p>
      <p>Pourcentage des taches terminees : {{ completionRate }}</p>
    </section>
  </div>
</template>

<!-- Styles propres à ce composant, avec des styles pour chaque niveau de priorité -->
<style scoped>
.high {
  color: red;
}
.medium {
  color: orange;
}
.low {
  color: green;
}
</style>
