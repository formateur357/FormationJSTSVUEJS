<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";
import { Todo } from "@/services/todoUtils";
const props = withDefaults(defineProps<{ todo: Todo; index: number }>(), {
  todo: Object,
  index: Number,
});

const emit = defineEmits(["delete", "edit", "finishEdit", "toggleDone"]);

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

<template>
  <li>
    <select v-model="props.todo.priority">
      <option value="low">Basse</option>
      <option value="medium">Moyenne</option>
      <option value="high">Haute</option>
    </select>
    <input
      type="checkbox"
      name="todo.id"
      :class="{ done: props.todo.done }"
      :checked="props.todo.done"
      v-if="!props.todo.editing"
    />
    <input
      v-if="props.todo.editing"
      v-model="props.todo.tempText"
      @keyup.enter="finishEdit(props.todo)"
      @blur="finishEdit(props.todo)"
    />
    <label
      :class="props.todo.priority"
      for="{{ todo.id }}"
      v-if="!props.todo.editing"
      >{{ props.todo.title }}
    </label>
    <button @click="startEdit(props.todo)">Modifier</button>
    <button @click="toggleDone(props.todo)">Termine</button>
    <button @click="deleteTodo(props.todo)">Supprimer</button>
  </li>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
