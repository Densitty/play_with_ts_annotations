class MotorVehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log("driving my vehicle");
  }

  private honk(): void {
    console.log("beep beep");
  }

  protected fuelType(): void {
    console.log("I run with fuel only");
  }

  public logFuelType(): void {
    this.fuelType();
  }

  public raiseAlarm() {
    this.honk();
  }
}

class Car extends MotorVehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("vroom vroom");
  }

  fuelType(): void {
    console.log(
      "I majorly use petrol while I have other variants now using electricity or solar to power me"
    );
  }

  logFuelType(): void {
    this.fuelType();
  }
}

const car = new Car(4, "red");
// drive is public so we can access it outside of the class
car.drive();

// we cannot have access to honk because it's a private method only accessed within MotorVehicle class
// car.honk();

// fuelType too is not accessible outside but can be accessed or totally redefined inside the child class or accessed inside the parent class by other methods
// car.fuelType();
