<template>
    <div>   
        <h1>Login contador {{contador}}</h1>
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