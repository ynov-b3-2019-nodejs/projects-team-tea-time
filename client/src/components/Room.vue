<template>
  <div id="containerChat">
    <h1>{{ $route.params.roomName }}</h1>
    <p>Bonjour {{ user }}</p>

    <!--<div class="form-group">
      <label for="user">Utilisateur:</label>
      <input type="text" v-model="user" class="form-control" style="width: unset; margin: auto;">
    </div>-->
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div id="chat-content">
          <div id="card-body">
            <div v-for="(msg, index) in messages" :key="index">
              <div class="messagesUser" v-if="msg.user === user">
                <p><span class="font-weight-bold"></span>{{ msg.message }}</p>
              </div>
              <div class="messagesOther" v-else>
                <p><span class="font-weight-bold">[{{ msg.user }}] : </span>{{ msg.message }}</p>
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent="sendMessage">
          <div class="form-group" id="envoiMessage">
            <input type="text" v-model="message" class="form-control" id="inputMessage" style="width: unset; margin: auto;" placeholder="Entrez votre message">
            <button type="submit" class="btn btn-success">Envoyer</button>
          </div>
        </form>
      </div>

      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
  import * as io from 'socket.io-client';

  const pseudo = prompt("Veuillez entrer votre pseudo");

  export default {
    name: 'Room',
    data() {
        return {
            user: pseudo,
            message: '',
            messages: [{user: "t1", message: 'm1'}],
            //socket : io('localhost:3000')
            socket : io('10.69.1.202:3000')
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
        this.$nextTick(function () {
          let msgBox = document.getElementById("chat-content");
          msgBox.scrollTop = msgBox.scrollHeight;
        })
      });
    }
  }

</script>
