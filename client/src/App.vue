<template>
  <div id="app">
    <img id="TeaTimeLogo" alt="Vue logo" src="./assets/logo_TeaTime.png">
    <Home/>
    <router-view/><router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Room from './components/Room.vue'

export default {
  name: 'app',
  components: {
    Home,
    Room
  }
}
</script>

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
