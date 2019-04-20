<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/stepone">Paso 1</router-link> |
      <router-link to="/steptwo">Paso 2</router-link> |
      <router-link to="/stepthree">Paso 3</router-link> |
      <router-link to="/stepfour">Paso 4</router-link> |
      <router-link to="/stepfive">Paso 5</router-link> |
      <router-link to="/stepsix">Paso 6</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
