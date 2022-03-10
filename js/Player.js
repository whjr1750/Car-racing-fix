class Player {
  constructor() {
    this.name = null
    this.distance = 0
    this.index = null
    this.rank = 0
  }

  // getCarsAtEnd(){
  //   database.ref('CarsAtEnd').on("value",function(data){
  //     this.rank = data.val()
  //   })
  // }
  getCarsAtEnd() {
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd: rank,
  
    })
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    })
  }
  removePlayers() {
    database.ref('/').update({
      players: null,
      
    });
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count,
      
    });
  }

  update() {
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
      // rank: this.rank   commented this line
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('players')
    playerInfoRef.on('value', (data) => {
      allPlayers = data.val()
    })
  }
}
