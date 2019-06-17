<template>
  <div id="app">
    <div id="header">
      <router-link to="/"><img id="TeaTimeLogo" alt="Vue logo" src="./assets/logo_TeaTime.png"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
  /*margin-top: 60px;*/
}
</style>
