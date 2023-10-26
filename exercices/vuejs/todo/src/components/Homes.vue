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
          return a.priority - b.priority;
        })"
        :key="todo.id"
      >
        <select v-model="todo.priority">
          <option value="0">Basse</option>
          <option value="1">Moyenne</option>
          <option value="2">Haute</option>
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
        <label for="{{ todo.id }}" v-if="!todo.editing"
          >{{ todo.title }}
        </label>
        <button @click="startEdit(todo)">Modifier</button>
        <button @click="toggleDone(todo)">Termine</button>
        <button @click="deleteTodo(todo)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeComponent",
});
</script>

<script setup lang="ts">
import { ref } from "vue";

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
    priority: number;
  }>
>([]);

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      title: newTodo.value.trim(),
      tempText: "",
      done: false,
      editing: false,
      priority: 0,
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
  priority: number;
}) => {
  todo.done = !todo.done;
};

const deleteTodo = (todo: {
  id: number;
  title: string;
  tempText: string;
  done: boolean;
  editing: boolean;
  priority: number;
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
  priority: number;
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
  priority: number;
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
</style>
