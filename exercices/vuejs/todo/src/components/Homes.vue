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
        <input
          type="checkbox"
          :class="{ done: todo.done }"
          name="todo.id"
          :checked="todo.done"
        />
        <label for="{{ todo.id }}">{{ todo.title }}</label>
        <button @click="toggleDone(todo)">Termine</button>
        <button @click="deleteTodo(todo)">Supprimer</button>
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
    const todos = ref<Array<{ id: number; title: string; done: boolean }>>([]);

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push({
          id: Date.now(),
          title: newTodo.value.trim(),
          done: false,
        });
        newTodo.value = "";
      }
    };

    const toggleDone = (todo: { id: number; title: string; done: boolean }) => {
      todo.done = !todo.done;
    };

    const deleteTodo = (todo: { id: number; title: string; done: boolean }) => {
      const index = todos.value.indexOf(todo);
      if (index !== -1) {
        todos.value.splice(index, 1);
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
      toggleDone,
      deleteTodo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
