<template>
  <div class="hello">
    <input v-model="text">
    <p>{{ text }}</p>
    <button @click="toggleSeen">Toggle</button>
    <h1 v-if="text === 'if'">{{ msg }}</h1>
    <h1 v-else-if="text === 'elseif'">{{ msg }} !</h1>
    <h1 v-else>{{ msg }} !!</h1>
    <ul v-show="seen">
      <!-- <li v-for="item in items">{{ item.text }}</li> -->
      <div v-for="{name, id, color} in items" :key="id">
        <p>Name: {{ name }}</p>
        <p>Color: {{ color }}</p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: {
    items: [
      {name: "Apple", id: 0, color: "red"},
      {name: "Banana", id: 1, color: "yellow"},
      {name: "Peach", id: 2, color: "pink"},
    ],
    seen: true,
    text: "Texte"
  },
  methods: {
    toggleSeen() {
      this.seen = !this.seen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
