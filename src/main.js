import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false;

var navBar = new Map(
  [['login', {
    imageOne: "oneBlack.png",
    imageTwo: "two.png",
    imageThree: "three.png",
    imageFour: "four.png",
    imageFive: "five.png",
    imageSix: "six.png",
    activeLineOne: false,
    activeLineTwo: false,
    activeLineThree: false,
    activeLineFour: false,
    activeLineFive: false,
    activeLineSix: false
  }],
    ['stepone', {
    imageOne: "oneBlack.png",
    imageTwo: "two.png",
    imageThree: "three.png",
    imageFour: "four.png",
    imageFive: "five.png",
    imageSix: "six.png",
    activeLineOne: false,
    activeLineTwo: false,
    activeLineThree: false,
    activeLineFour: false,
    activeLineFive: false,
    activeLineSix: false
  }],
  ['steptwo', {
    imageOne: "oneBlack.png",
    imageTwo: "twoBlack.png",
    imageThree: "three.png",
    imageFour: "four.png",
    imageFive: "five.png",
    imageSix: "six.png",
    activeLineOne: true,
    activeLineTwo: false,
    activeLineThree: false,
    activeLineFour: false,
    activeLineFive: false,
    activeLineSix: false
  }],
  ['stepthree', {
    imageOne: "oneBlack.png",
    imageTwo: "twoBlack.png",
    imageThree: "threeBlack.png",
    imageFour: "four.png",
    imageFive: "five.png",
    imageSix: "six.png",
    activeLineOne: true,
    activeLineTwo: true,
    activeLineThree: false,
    activeLineFour: false,
    activeLineFive: false,
    activeLineSix: false
  }],
  ['stepfour', {
    imageOne: "oneBlack.png",
    imageTwo: "twoBlack.png",
    imageThree: "threeBlack.png",
    imageFour: "fourBlack.png",
    imageFive: "five.png",
    imageSix: "six.png",
    activeLineOne: true,
    activeLineTwo: true,
    activeLineThree: true,
    activeLineFour: false,
    activeLineFive: false,
    activeLineSix: false
  }],
  ['stepfive', {
    imageOne: "oneBlack.png",
    imageTwo: "twoBlack.png",
    imageThree: "threeBlack.png",
    imageFour: "fourBlack.png",
    imageFive: "fiveBlack.png",
    imageSix: "six.png",
    activeLineOne: true,
    activeLineTwo: true,
    activeLineThree: true,
    activeLineFour: true,
    activeLineFive: false,
    activeLineSix: false
  }],
  ['stepsix', {
    imageOne: "oneBlack.png",
    imageTwo: "twoBlack.png",
    imageThree: "threeBlack.png",
    imageFour: "fourBlack.png",
    imageFive: "fiveBlack.png",
    imageSix: "sixBlack.png",
    activeLineOne: true,
    activeLineTwo: true,
    activeLineThree: true,
    activeLineFour: true,
    activeLineFive: true,
    activeLineSix: true
  }]]);


router.beforeResolve((to, from, next) => {
    // if ( to.name == 'home' ) {

    //   store.state.count = 1;
    //   // console.log(from);
    //   // console.log(to);
    //   // console.log(next);
    //   // next(false);
    //   // next({ path: '/' });
    //   next();
    // } else if(to.name == 'about') {

    //   store.state.count = 2;
    //   // console.log(from);
    //   // console.log(to);
    //   // console.log(next);
    //   next();
    // } else {
    //   store.state.count = 3;
    //   next();
    // }
    
    var exist = navBar.has(to.name);
    if(exist){
      store.state.navBar = navBar.get(to.name);
      next(exist);
    }else{
      next('/');
    }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


// Here goes my logic
