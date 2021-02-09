const finalPosition = function (moves) {
  let xCoordinate = 0;
  let yCoordinate = 0;
  for (const move of moves) {
    if (move === 'north') {
      yCoordinate = yCoordinate + 1;
    } else if (move === 'east') {
      xCoordinate = xCoordinate + 1;
    } else if (move === 'west') {
      xCoordinate = xCoordinate - 1;
    } else if (move === 'south') {
      yCoordinate = yCoordinate - 1;
    }
  }
  return [xCoordinate, yCoordinate];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

console.log(finalPosition(moves));
