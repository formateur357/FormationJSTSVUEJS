<script setup lang="ts">
import { computed, defineProps } from "vue";
import { Todo } from "@/services/todoUtils";
import { store } from "@/services/store";

// Définition des propriétés du composant
const props = defineProps<{ id: number; index: number }>();
const todo = computed(() => {
  return store.getTodo(props.id);
});

// Événements émis par le composant
// const emit = defineEmits(["delete", "update:todo"]);

const updateTodoProperty = (property: keyof Todo, value: any) => {
  store.editTodo(todo.value.id, { ...todo.value, [property]: value });
};

const updateTodoPropertyInput = (property: keyof Todo, event: any) => {
  store.editTodo(todo.value.id, {
    ...todo.value,
    [property]: event.target.value,
  });
};

// Fonctions pour émettre des événements
const deleteTodo = () => {
  store.removeTodo(todo.value.id);
};

const startEdit = () => {
  const updatedTodo = {
    ...todo.value,
    editing: true,
    tempText: todo.value.title,
  };
  store.editTodo(todo.value.id, updatedTodo);
};

const finishEdit = () => {
  // emit("finishEdit", props.index);
  if (todo.value.tempText.trim()) {
    const updatedTodo = {
      ...todo.value,
      editing: false,
      title: todo.value.tempText,
    };
    store.editTodo(todo.value.id, updatedTodo);
  }
};

const toggleDone = () => {
  // emit("toggleDone", props.index);
  updateTodoProperty("done", !todo.value.done);
};
</script>

<!-- Code HTML du sous-composant pour afficher une tâche -->
<template>
  <li>
    <input
      type="checkbox"
      name="todo.id"
      :class="{ done: todo.done }"
      :checked="todo.done"
      v-if="!todo.editing"
    />
    <input
      v-if="todo.editing"
      :value="todo.tempText"
      @input="updateTodoPropertyInput('tempText', $event)"
      @keyup.enter="finishEdit()"
      @blur="finishEdit()"
    />
    <label
      :class="todo.done ? todo.priority + ' done' : todo.priority + ''"
      for="{{ todo.id }}"
      v-if="!todo.editing"
      >{{ todo.title }}
    </label>

    <div>
      <button @click="startEdit()">Modifier</button>
      <button @click="toggleDone()">Termine</button>
      <button @click="deleteTodo()">Supprimer</button>
      <select
        :value="todo.priority"
        @input="updateTodoPropertyInput('priority', $event)"
      >
        <option value="low">Basse</option>
        <option value="medium">Moyenne</option>
        <option value="high">Haute</option>
      </select>
    </div>
  </li>
</template>

<!-- Styles propres à ce sous-composant, y compris le style pour une tâche terminée, avec des styles pour chaque niveau de priorité
 -->
<style scoped>
li {
  list-style-type: none;
}

select,
input,
button {
  margin: 2px;
}
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
