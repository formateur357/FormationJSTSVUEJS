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
      <li v-for="todo in todos" :key="todo.id">
        <span>{{ todo.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Homes",
  setup() {
    // declaration de la propriete reactive msg
    const msg = ref("Todolist");
    const newTodo = ref("");
    const todos = ref<Array<{ id: number; title: string }>>([]);

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push({
          id: Date.now(),
          title: newTodo.value.trim(),
        });
        newTodo.value = "";
      }
    };

    // // Fonction executee apres le montage du composant
    // onMounted(() => {
    //   setTimeout(() => {
    //     msg.value = "Message modifie apres 3 secondes.";
    //   }, 3000);
    // });

    return {
      msg,
      newTodo,
      todos,
      addTodo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
