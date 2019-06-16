<template>
  <div id="containerChat">
    <h1>Room</h1>
    <p>{{ $route.params.roomName }}</p>
    <router-link to="/">Back Home </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Room'
  }

</script>
