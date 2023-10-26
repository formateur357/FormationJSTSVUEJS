<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeComponent",
});
</script>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import TodoItemComponent from "@/components/TodoItemComponent.vue";
import { Todo, sortTodos } from "@/services/todoUtils";

// declaration de la propriete reactive msg
const msg = ref("Todolist");
const newTodo = ref("");
const todos = ref<Array<Todo>>([]);

const totalTasks = computed(() => todos.value.length);
const completedTasks = computed(
  () => todos.value.filter((todo) => todo.done).length
);
const completionRate = computed(
  () => (completedTasks.value / totalTasks.value) * 100 || 0
);

const sortedTodos = computed(() => sortTodos(todos.value));

watch(todos, (newTodos) => {
  const inProgressTasks = newTodos.filter((todo) => !todo.done).length;
  if (inProgressTasks > 10) {
    alert("Vous avez plus de 10 taches non terminees!");
  }
});

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
