<template>
    <div>   
        <h1>Login contador {{contador}}</h1>
        <NavBar />
        <button @click="exampleMoment()">Moment</button>
    </div>
</template>


<script>

import NavBar from '@/components/NavBar.vue';
import moment from 'moment';

export default {
  components: {
    NavBar
  },
  computed: {
    contador() {
      // return this.$store.state.count;
      return this.$store.getters.count;
    }
  },
  methods:{
    exampleMoment() {
      var date = moment("12-25-1995", "MM-DD-YYYY");

      return date;
    }
  }
};
</script>