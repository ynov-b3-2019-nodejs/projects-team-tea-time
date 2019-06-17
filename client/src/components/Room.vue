<template>
  <div id="containerChat">
    <h1>Room</h1>
    <p>{{ $route.params.roomName }}</p>
    <form @submit.prevent="sendMessage">
      <div class="gorm-group">
        <label for="user">Utilisateur:</label>
        <input type="text" v-model="user" class="form-control" style="width: unset; margin: auto;">
      </div>
      <div class="gorm-group pb-3">
        <label for="message">Message:</label>
        <input type="text" v-model="message" class="form-control" style="width: unset; margin: auto;">
      </div>
      <button type="submit" class="btn btn-success">Send</button>
    </form>
    <div class="card-body">
      <div class="messages" v-for="(msg, index) in messages" :key="index">
        <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
      </div>
    </div>
    <router-link to="/">Accueil</router-link>
  </div>
</template>

<script>
  import * as io from 'socket.io-client';

  export default {
    name: 'Room',
    data() {
        return {
            user: '',
            message: '',
            messages: [{user: "t1", message: 'm1'}],
            socket : io('localhost:3000')
        }
    },
    methods: {
        sendMessage(e) {
          console.log(this.message);
            e.preventDefault();
            this.socket.emit('send_message', {
                user: this.user,
                message: this.message
            });
            this.message = '';
        }
    },
    mounted() {
      this.socket.on('send_message', (data) => {
        console.log(data);
        this.messages = [...this.messages, data];
      });
    }
  }

</script>
