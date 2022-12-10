// Speed limit =  70
// 5 ->  1 point
// Math.floor
// 12 points -> suspended

function checkSpeed(speed) {
  let speedLimit = 70;
  let points = 5;
  let speedPoints = Math.floor((speed - speedLimit) / 5);

  if (speed < speedLimit + points) {
    console.log("Ok");
  } else {
    if (speedPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points : ", speedPoints);
    }
  }
}

checkSpeed(50);
