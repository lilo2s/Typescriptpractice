import {Pet} from './pets';
import {Owner} from './owner';

var person1 = new Owner('Sarah', 80, 70, 5, true, 50);
var person2 = new Owner('Bill', 100, 100, 2, false, 50);
var person3 = new Owner('Mike', 55, 50, 5, true, 50);
var person4 = new Owner('Jessika', 300, 250, 5, true, 50);

// var pet1 = new Pet ('cat', 'Tom', 'Sarah', 60, 2, false, 100 );
// var pet2 = new Pet ('dog', 'Barky', 'Sarah', 100, 5, true, 200 );
// var pet3 = new Pet ('hamster', 'Crispy', 'Sarah', 2, 1, false, 50 );
// var pet3 = new Pet ('parrot', 'Chocho', 'Sarah', 5, 3, false, 60 );


let pets : Array<Pet> = [
  new Pet ('cat', 'Tom', 'Sarah', 60, 2, false, 100 ),
  new Pet ('dog', 'Barky', 'Sarah', 100, 5, true, 200 ),
  new Pet ('hamster', 'Crispy', 'Sarah', 2, 1, false, 50 ),
  new Pet ('parrot', 'Chocho', 'Sarah', 5, 3, false, 60 )
];
