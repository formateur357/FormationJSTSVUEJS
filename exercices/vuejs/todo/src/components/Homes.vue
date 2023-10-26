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

    <ul>
      <li
        v-for="todo in todos.sort((a, b) => {
          const priorityOrder: Record<Priority, number> = { high: 2, medium: 1, low: 0 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        })"
        :key="todo.id"
      >
        <select v-model="todo.priority">
          <option value="low">Basse</option>
          <option value="medium">Moyenne</option>
          <option value="high">Haute</option>
        </select>
        <input
          type="checkbox"
          name="todo.id"
          :class="{ done: todo.done }"
          :checked="todo.done"
          v-if="!todo.editing"
        />
        <input
          v-if="todo.editing"
          v-model="todo.tempText"
          @keyup.enter="finishEdit(todo)"
          @blur="finishEdit(todo)"
        />
        <label :class="todo.priority" for="{{ todo.id }}" v-if="!todo.editing"
          >{{ todo.title }}
        </label>
        <button @click="startEdit(todo)">Modifier</button>
        <button @click="toggleDone(todo)">Termine</button>
        <button @click="deleteTodo(todo)">Supprimer</button>
      </li>
    </ul>
    <section>
      <h2>Statistiques</h2>
      <p>Total des taches : {{ totalTasks }}</p>
      <p>Taches Terminees : {{ completedTasks }}</p>
      <p>Pourcentage des taches terminees : {{ completionRate }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeComponent",
});
</script>

<script setup lang="ts">
import { computed, ref } from "vue";

type Priority = "high" | "medium" | "low";

// declaration de la propriete reactive msg
const msg = ref("Todolist");
const newTodo = ref("");
const todos = ref<
  Array<{
    id: number;
    title: string;
    tempText: string;
    done: boolean;
    editing: boolean;
    priority: Priority;
  }>
>([]);

const totalTasks = computed(() => todos.value.length);
const completedTasks = computed(
  () => todos.value.filter((todo) => todo.done).length
);
const completionRate = computed(
  () => (completedTasks.value / totalTasks.value) * 100 || 0
);

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

const toggleDone = (todo: {
  id: number;
  title: string;
  tempText: string;
  done: boolean;
  editing: boolean;
  priority: Priority;
}) => {
  todo.done = !todo.done;
};

const deleteTodo = (todo: {
  id: number;
  title: string;
  tempText: string;
  done: boolean;
  editing: boolean;
  priority: Priority;
}) => {
  const index = todos.value.indexOf(todo);
  if (index !== -1) {
    todos.value.splice(index, 1);
  }
};

const startEdit = (todo: {
  id: number;
  title: string;
  tempText: string;
  done: boolean;
  editing: boolean;
  priority: Priority;
}) => {
  todo.editing = true;
  todo.tempText = todo.title;
};

const finishEdit = (todo: {
  id: number;
  title: string;
  tempText: string;
  done: boolean;
  editing: boolean;
  priority: Priority;
}) => {
  if (todo.tempText.trim()) {
    todo.title = todo.tempText;
    todo.editing = false;
  }
};
// // Fonction executee apres le montage du composant
// onMounted(() => {
//   setTimeout(() => {
//     msg.value = "Message modifie apres 3 secondes.";
//   }, 3000);
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
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
