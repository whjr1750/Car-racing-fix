class Form {
  constructor() {
    this.input = createInput('name')
    this.button = createButton('Play')
    this.greeting = createElement('h3');
    this.reset = createButton('Reset')

  }
  hide() {
    this.greeting.hide()
    this.input.hide()
    this.button.hide()
  }
  
  display() {
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 120, 0);

    this.input.position(displayWidth/2 - 100, 160);
    this.button.position(displayWidth/2 - 100, 200);
    this.reset.position(displayWidth-200, 50)

    this.reset.mousePressed(() =>{
      game.update(0)
      player.updateCount(0)
      Player.updateCarsAtEnd(0)
      player.removePlayers()
    })

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount += 1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 100, 160)
    });

  }
}
