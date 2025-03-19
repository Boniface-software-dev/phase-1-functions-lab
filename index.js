// Code your solution in this file!
//Distance in Blocks
function distanceFromHqInBlocks(pickup){
    const hq = 42;
    return Math.abs(pickup - hq);
  }

    //Blocks to Feet
    function distanceFromHqInFeet(pickup) {
        return distanceFromHqInBlocks(pickup) * 264;
      }

        //Distance in Feet
        function distanceTravelledInFeet(start, destination) {
            return Math.abs(start - destination) * 264;
          }

          //Calculates Fare Price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }

  }
    
