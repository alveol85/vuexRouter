<template>
  <div class="about">
    <h1>This is an about page contador: {{contador}}</h1>
  </div>
</template>


<script>

export default {
  computed: {
    contador() {
      return this.$store.state.count;
    }
  }
};
</script>