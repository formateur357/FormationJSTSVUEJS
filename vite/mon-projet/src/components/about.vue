<template>
  <div class="about"> 
      <h1>aboutComponent</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class AboutComponent extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

<style scoped lang="scss">
  .about {

  }
</style>
