<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Home",
  data() {
    return {
      msg: "Hello from vue",
    };
  },
  mounted() {
    setTimeout(() => {
      this.msg = "Message modifie apres 3 secondes.";
    }, 3000);
  },
})
export default class Home extends Vue {
  msg!: string;

  //   constructor() {
  //     super();

  //     setTimeout(() => {
  //       this.msg = "Message modifie apres 3 secondes.";
  //     }, 3000);
  //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
