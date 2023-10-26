<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Todo } from "@/services/todoUtils";

// Définition des propriétés du composant
const props = defineProps<{ todo: Todo; index: number }>();

// Événements émis par le composant
const emit = defineEmits(["delete", "update:todo"]);

const updateTodoProperty = (property: keyof Todo, value: any) => {
  emit("update:todo", { ...props.todo, [property]: value });
};

const updateTodoPriority = (event: any) => {
  const updatedTodo = { ...props.todo, priority: event.target.value };
  emit("update:todo", updatedTodo);
};

const updateTodoTempText = (event: any) => {
  const updatedTodo = { ...props.todo, tempText: event.target.value };
  emit("update:todo", updatedTodo);
};

// Fonctions pour émettre des événements
const deleteTodo = () => {
  emit("delete", props.index);
};

const startEdit = () => {
  const updatedTodo = {
    ...props.todo,
    editing: true,
    tempText: props.todo.title,
  };
  emit("update:todo", updatedTodo);
};

const finishEdit = () => {
  // emit("finishEdit", props.index);
  if (props.todo.tempText.trim()) {
    const updatedTodo = {
      ...props.todo,
      editing: false,
      title: props.todo.tempText,
    };
    emit("update:todo", updatedTodo);
  }
};

const toggleDone = () => {
  // emit("toggleDone", props.index);
  updateTodoProperty("done", !props.todo.done);
};
</script>

<!-- Code HTML du sous-composant pour afficher une tâche -->
<template>
  <li>
    <select :value="props.todo.priority" @input="updateTodoPriority($event)">
      <option value="low">Basse</option>
      <option value="medium">Moyenne</option>
      <option value="high">Haute</option>
    </select>
    <input
      type="checkbox"
      name="props.todo.id"
      :class="{ done: props.todo.done }"
      :checked="props.todo.done"
      v-if="!props.todo.editing"
    />
    <input
      v-if="props.todo.editing"
      :value="props.todo.tempText"
      @input="updateTodoTempText($event)"
      @keyup.enter="finishEdit()"
      @blur="finishEdit()"
    />
    <label
      :class="props.todo.priority"
      for="{{ props.todo.id }}"
      v-if="!props.todo.editing"
      >{{ props.todo.title }}
    </label>
    <button @click="startEdit()">Modifier</button>
    <button @click="toggleDone()">Termine</button>
    <button @click="deleteTodo()">Supprimer</button>
  </li>
</template>

<!-- Styles propres à ce sous-composant, y compris le style pour une tâche terminée, avec des styles pour chaque niveau de priorité
 -->
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
