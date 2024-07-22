import { Car } from "./js/Car.js";

const audiWhite = new Car("Audi", "80", "Balta", 66, 8);

audiWhite.startEngine();
audiWhite.startDriving();
audiWhite.drive(200);
audiWhite.stop();
audiWhite.checkFuel();
audiWhite.refuel(10);
audiWhite.stopEngine();

console.log("------------------------------------------");

const audiRed = new Car("Audi", "80", "Raudona", 60, 7);

audiRed.startDriving();
audiRed.drive(10);
audiRed.startEngine();
audiRed.startEngine();
audiRed.drive(10);
audiRed.startDriving();
audiRed.drive(20);
audiRed.checkFuel();
audiRed.stop();
audiRed.stopEngine();
audiRed.stopEngine();
audiRed.drive(10);
audiRed.startEngine();
audiRed.startDriving();
audiRed.drive(500);
audiRed.checkFuel();
audiRed.refuel(100);
audiRed.refuel(30);
audiRed.checkFuel();
