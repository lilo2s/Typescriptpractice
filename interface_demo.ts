interface IVehicle {
    name: string;

    drive(): void;
    measureFuel(): number;
    foo(i:number): boolean;
}

class Bike implements IVehicle{
  drive(){

  }

  measureFuel(){
    return 2
  }

  foo(a:number){
    return true;
  }
}
