<template>
  <div id="containerHome">
    <div class="row">
      <div class="col-1">
      </div>
      <div class="col-4 divHomeForm">
        <h2>Créer un salon</h2>
        <form>
          <div class="form-group">
            <input type="text" class="form-control"  name="newRoomName" v-model="newRoomName" id="inputIdSalon" placeholder="Nom du salon">
            <div class="form-row">
              <div class="col">
                <input type="text" name="newRoomDescription" v-model="newRoomDescription" class="form-control" placeholder="Description">
              </div>
              <div class="col">
                <select name="newRoomCategory" v-model="newRoomCategory" class="form-control" id="exampleFormControlSelect1">
                  <option>Sport</option>
                  <option>Musique</option>
                  <option>Cinéma</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit"  @click.stop.prevent="createRoom()" class="btn btn-primary">C'est parti !</button>
        </form>
      </div>
      <div class="col-2">
      </div>
      <div class="col-4 divHomeForm">
        <h2>Rejoindre un salon</h2>
        <form id="joinRoom" >
          <div class="form-group">
            <input type="text" class="form-control" name="roomName" v-model="roomName" placeholder="Nom du salon">
            <small id="nomSalonHelp" class="form-text text-muted">Entrez ci-dessus le nom du salon que vous souhaitez rejoindre.</small>
          </div>
          <button type="submit" @click.stop.prevent="joinRoom()" class="btn btn-primary">Rejoindre !</button>
        </form>
      </div>
      <div class="col-1">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      //errors:[],
      roomName: null,
      newRoomName: null,
      newRoomDescription: null,
      newRoomEvent: null
    }
  },
  methods:{
    createRoom(){
      if(!this.newRoomName && !this.newRoomEvent) return true;
      this.$router.push("/room/"+ this.newRoomName);
    },
    joinRoom() {
      //add if room exists statement
      if(!this.roomName) return true;
      this.$router.push("/room/"+ this.roomName);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
