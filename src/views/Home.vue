<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    contador: {{contador}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    NavBar
  },
  computed: {
    contador() {
      // return this.$store.state.count;
      return this.$store.getters.count;
    }
  }
}
</script>
