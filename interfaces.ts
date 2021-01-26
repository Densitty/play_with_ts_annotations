interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(
    `My vehicle is an old ${vehicle.name}, manufactured in ${vehicle.year} and it is ${vehicle.broken} it is broken.`
  );
};

printVehicle(oldCivic);

// we don't need to print our
const logVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

logVehicle({
  name: "Corolla",
  year: 2005,
  broken: false,
  summary() {
    return `My vehicle's name is${this.name}`;
  },
});
