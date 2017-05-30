class Vehicle {
  name: string;
  owner: string;
  wheel_nb: number;
  has_fuel: boolean;
  age: number;
  milage: number;

  constructor(name: string, owner: string, wheel_nb: number, has_fuel: boolean, age: number, milage: number,){
    this.name = name;
    this.owner = owner;
    this.wheel_nb = wheel_nb;
    this. has_fuel = has_fuel;
    this.age = age;
    this.milage = milage;
  }

  fuel_check( ) {
    if ( this.has_fuel){
      console.log('I have fuel');
    } else{
      console.log("I don't not have fuel");
    }
  }

}

  var bus = new Vehicle ('VolvoX', 'John', 4, true, 2, 2000);
  bus.fuel_check();
