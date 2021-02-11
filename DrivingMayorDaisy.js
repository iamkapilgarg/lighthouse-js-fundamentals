const carPassing = function (cars, speed) {
  car = {
    time: Date.now(),
    speed: speed
  }
  cars.push(car);
  return cars;
}