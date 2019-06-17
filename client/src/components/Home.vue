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
              <div>
              <input type="range" name="rangeInput" min="0" max="100" onchange="updateTextInput(this.value);">
<input type="text" id="textInput" value="15">
</div>
            </div>
            <div class="form-group">
              <label for="customRange3">Durée du salon (en jours)</label>
              <input type="range" v-model="value" class="custom-range" min="0" max="30" step="1" value="15" id="customRange3">
              <input id="rangeValue" type="number" v-model="value"/>
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
      newRoomEvent: null,
      value: 0
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
    },updateTextInput(val) {
          document.getElementById('textInput').value=val; 
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
