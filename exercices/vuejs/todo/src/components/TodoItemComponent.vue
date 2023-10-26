<script setup lang="ts">
import { ref, defineProps, defineEmits, withDefaults, watch } from "vue";
import { Todo } from "@/services/todoUtils";

// Définition des propriétés du composant
const props = withDefaults(defineProps<{ todo: Todo; index: number }>(), {
  todo: Object,
  index: Number,
});

// Référence réactive pour la tâche
const todo = ref({ ...props.todo });

// Surveillance des changements de la tâche
watch(todo, (newVal) => {
  todo.value = { ...newVal };
});

// Événements émis par le composant
const emit = defineEmits(["delete", "edit", "finishEdit", "toggleDone"]);

// Fonctions pour émettre des événements
const deleteTodo = () => {
  emit("delete", props.index);
};

const startEdit = () => {
  emit("edit", props.index);
};

const finishEdit = () => {
  emit("finishEdit", props.index);
};

const toggleDone = () => {
  emit("toggleDone", props.index);
};
</script>

<!-- Code HTML du sous-composant pour afficher une tâche -->
<template>
  <li>
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
      @keyup.enter="finishEdit()"
      @blur="finishEdit()"
    />
    <label :class="todo.priority" for="{{ todo.id }}" v-if="!todo.editing"
      >{{ todo.title }}
    </label>
    <button @click="startEdit()">Modifier</button>
    <button @click="toggleDone()">Termine</button>
    <button @click="deleteTodo()">Supprimer</button>
  </li>
</template>

<!-- Styles propres à ce sous-composant, y compris le style pour une tâche terminée -->
<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
