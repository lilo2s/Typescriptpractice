var Vehicle = (function () {
    function Vehicle(name, owner, wheel_nb, has_fuel, age, milage) {
        this.name = name;
        this.owner = owner;
        this.wheel_nb = wheel_nb;
        this.has_fuel = has_fuel;
        this.age = age;
        this.milage = milage;
    }
    Vehicle.prototype.fuel_check = function () {
        if (this.has_fuel) {
            console.log('I have fuel');
        }
        else {
            console.log("I don't not have fuel");
        }
    };
    return Vehicle;
}());
var bus = new Vehicle('VolvoX', 'John', 4, true, 2, 2000);
bus.fuel_check();
