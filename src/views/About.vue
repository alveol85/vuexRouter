<template>
  <div class="about">
    <NavBar />
    <h1>This is an about page contador: {{contador}}</h1>
  </div>
</template>


<script>

import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  computed: {
    contador() {
      // return this.$store.state.count;
      return this.$store.getters.count;
    }
  }
};
</script>