class BiteFish extends Fish {
  constructor(options) {
    super(options); // Call super to run code inside Fish's consttructor
    this.imageUri = '/images/bitefish.gif' //Set image
    this.isTasty = false; // carnivorous fish aren't tasty!
  }

  update(t) {
    if(this.isNearTasyFish()) {
      this.eatFish(this.isNearTasyFish())
    }

    super.update(t);
  }

  // return id of fish if near a "tasty" fish
  isNearTasyFish() {
    console.log(this.tank.denizens);
  }

  eatFish(id) {
    // TODO: KILL FISH!!!
  }
}
