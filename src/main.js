import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  if ( to.name == 'home' ) {

    store.state.count = 1;
    // console.log(from);
    // console.log(to);
    // console.log(next);
    // next(false);
    // next({ path: '/' });
    next();
  } else if(to.name == 'about') {

    store.state.count = 2;
    // console.log(from);
    // console.log(to);
    // console.log(next);
    next();
  } else {
    store.state.count = 3;
    next();
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


// Here goes my logic
