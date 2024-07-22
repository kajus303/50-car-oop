export class Car {
  constructor(name, model, color, fuelTankCapacity, averageFuelConsumption) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.fuelTankCapacity = fuelTankCapacity;
    this.averageFuelConsumption = averageFuelConsumption;
    this.fuelRemaining = fuelTankCapacity;
    this.engineOn = false;
    this.speed = 0;
  }

  startEngine() {
    if (this.engineOn) {
      console.log("Variklis jau įjungtas, sugadinsite starterį!");
    } else {
      this.engineOn = true;
      console.log("Variklis įjungtas.");
    }
  }

  stopEngine() {
    if (!this.engineOn) {
      console.log("Variklis jau išjungtas.");
    } else {
      this.engineOn = false;
      console.log("Variklis išjungtas.");
    }
  }

  startDriving() {
    if (!this.engineOn) {
      console.log("Pirma įjunkite variklį.");
    } else if (this.fuelRemaining < (this.averageFuelConsumption * 2) / 100) {
      console.log("Nepakanka kuro pradėti važiuoti.");
    } else {
      this.speed = 50;
      this.fuelRemaining -= (this.averageFuelConsumption * 2) / 100;
      console.log("Pradėjote važiuoti.");
    }
  }

  drive(km) {
    if (!this.engineOn) {
      console.log("Pirma įjunkite variklį.");
    } else if (this.speed === 0) {
      console.log("Pirma pradėkite važiuoti.");
    } else {
      let fuelNeeded = (this.averageFuelConsumption / 100) * km;
      if (this.fuelRemaining < fuelNeeded) {
        console.log("Nepakanka kuro važiuoti " + km + " km.");
      } else {
        this.fuelRemaining -= fuelNeeded;
        console.log("Važiuojate " + km + " km.");
      }
    }
  }

  stop() {
    this.speed = 0;
    console.log("Sustojote.");
  }

  checkFuel() {
    console.log("Liko " + this.fuelRemaining.toFixed(2) + " litrų kuro.");
    return this.fuelRemaining;
  }

  refuel(liters) {
    if (this.fuelRemaining + liters > this.fuelTankCapacity) {
      console.log("Negalima užpildyti tiek kuro, viršys bako talpą.");
    } else {
      this.fuelRemaining += liters;
      console.log(
        "Įpylėte " +
          liters +
          " litrų kuro. Dabar likutis yra " +
          this.fuelRemaining.toFixed(2) +
          " litrų."
      );
    }
  }
}
