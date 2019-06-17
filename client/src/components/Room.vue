<template>
  <div id="containerChat">
    <h1>Salon {{ $route.params.roomName }}</h1>
    <p>Bienvenue<i> {{ user }}</i></p>

    <!--<div class="form-group">
      <label for="user">Utilisateur:</label>
      <input type="text" v-model="user" class="form-control" style="width: unset; margin: auto;">
    </div>-->
    <div class="row">
      <div class="col-2">
        <b>Utilisateurs connectés</b>
        <ul id="userList">
          <div v-for="(user, index) in connectedUsers" :key="index">
            <li  v-if="user.roomName === $route.params.roomName">
                {{user.userName}}

            </li>
          </div>
        </ul>
      </div>
      <div class="col-9">
        <div id="chat-content">
          <div id="card-body">
            <div v-for="(msg, index) in messages" :key="index">
              <div v-if="msg.room === $route.params.roomName">
                <div class="messagesUser" v-if="msg.user === user">
                  <p><span class="font-weight-bold"></span>{{ msg.message }}</p>
                </div>
                <div class="messagesOther" v-else >
                  <p><span class="font-weight-bold">[{{ msg.user }}] : </span>{{ msg.message }}</p>
                </div>
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
    </div>
  </div>
</template>

<script>
  import * as io from 'socket.io-client';

  let pseudo = prompt("Veuillez entrer votre pseudo");
  while(pseudo.length < 1){
    pseudo = prompt('Votre pseudo est trop court!');
  }
  
  export default {
    name: 'Room',
    data() {
        return {
            user: pseudo,
            connectedUsers: [],
            message: '',
            messages: [],
            room: this.$route.params.roomName,
            socket : io(window.location.hostname+':3000')
        }
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();
            this.socket.emit('send_message', {
                user: this.user,
                message: this.message,
                room: this.room
            });
            this.message = '';
        },
        //add user to connected list
        addUser(user, room){
          this.socket.emit('add_user', {
            userName: user,
            roomName: room
          });
        },
        
    },
    mounted() {
      this.socket.on('send_message', (data) => {
        this.messages = [...this.messages, data];
        this.$nextTick(function () {
          let msgBox = document.getElementById("chat-content");
          msgBox.scrollTop = msgBox.scrollHeight;
        })
      });

      this.socket.on('add_user', (users) => {
        this.connectedUsers = users;
      })
    },
    beforeMount() {
      this.addUser(this.user, this.room);
    }
  }

</script>
