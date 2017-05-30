class Animal {
    // Fields
    breed: string;
    weight: number;
    has_fur: boolean;
    speed: number;
    companion: Animal;

    // Special method *NEW*
    constructor(breed: string, weight: number, has_fur: boolean, speed: number){
       this.breed = breed;
       this.weight = weight;
       this.has_fur = has_fur;
       this.speed = speed;
    }

    // Rest of functions
    run_for_seconds(seconds: number) {
        console.log("I have run " + seconds * this.speed + " meters");
    }

    procreate(partner: Animal = null){
      if (partner == null){
        partner = this.companion;
      }

      var new_animal_breed;
      var new_animal_weight;
      var new_animal_has_fur;
      var new_animal_speed;

      if(this.breed == partner.breed){
        new_animal_breed = this.breed;
      } else {
        new_animal_breed = this.breed + partner.breed;
      }

      new_animal_weight = (this.weight + partner.weight) / 2;
      new_animal_speed = (this.speed + partner.speed) / 2;
      new_animal_has_fur = this.has_fur;
      return new Animal(new_animal_breed, new_animal_weight, new_animal_has_fur, new_animal_speed);
    }
}

var myanimal = new Animal('cat', 1, true, 1);
var myanimal2 = new Animal('dog', 5, true, 4);
var myanimal3 = new Animal('snake', 0.1, false,0.1);

// scenario 1
myanimal.companion = myanimal2;
var offspring = myanimal.procreate();
console.log(offspring)

// scenario 2
var offspring2 = myanimal3.procreate(myanimal2);

