class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200)
    car1.addImage(car1Image)
    car2 = createSprite(300,200)
    car2.addImage(car2Image)
    car3 = createSprite(500,200)
    car3.addImage(car3Image)
    car4 = createSprite(700,200)
    car4.addImage(car4Image)

    cars = [car1, car2, car3, car4]
  
  }
  play() {
    form.hide()

    player.getCarsAtEnd()
    textSize(30)
    text('Game Starts', 120, 100)
    Player.getPlayerInfo()
    if (allPlayers !== undefined) {
      background('#c68767')
      image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5)
      var index = 0
      var x = 250
      var y;

      //var yPosition = 130
      for (var plr in allPlayers) {
        index = index+1
        x = x+300
        y = displayHeight - allPlayers[plr].distance
        cars[index-1].x = x
        cars[index-1].y = y
        if(index === player.index){
          stroke(10)
          fill('RED')
          ellipse(cars[index-1].x, cars[index-1].y,60,60)
          camera.position.x = displayWidth/2
          camera.position.y = cars[index-1].y
        }
        //yPosition = yPosition + 20
        fill('WHITE')
        text(allPlayers[plr].name, cars[index-1].x-35, cars[index-1].y+80)
      }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance = player.distance + 20
      player.update()
    }
    if(player.distance > 5000){
      gameState = 2
      // game.update(2)   commented this line
      player.rank += 1
      Player.updateCarsAtEnd(player.rank)
    }
    drawSprites()
  }
  end(){
    console.log('game ended')
    var text1 = createElement('h2')
    text1.html("Game Over");
    text1.position(displayWidth/2, 50)
  }
}

