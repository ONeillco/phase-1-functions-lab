//Code your solution in this file!
//
function distanceFromHqInBlocks(pickup) {
    const headQuarters = 42;
  if(pickup > headQuarters) {
   return pickup - headQuarters
  } else {
   return headQuarters - pickup
}
   }

//distanceFronHqInBlocks(43)
//distanceFromHqInBlocks(50)
//distanceFromHqInBlocks(34)

function distanceFromHqInFeet(pickup) {
    const block = 264;
    const headQuarters = 42
  if( pickup > headQuarters) {
   return (pickup - headQuarters) * block
  } else { return (headQuarters - pickup) * block
  }
}

function distanceTravelledInFeet(pickup, dropoff) {
    const block = 264;
    
    if(pickup > dropoff) {
        return (pickup - dropoff) * block 
    } else { return (dropoff - pickup) * block 

    }
}

function calculatesFarePrice(pickup, dropoff) {
    const feet = distanceTravelledInFeet(pickup, dropoff);
    //console.log('feet', feet)
    if(feet < 400 ) {
        return 0;
     } else if  (feet > 400 && feet < 2000 ) {
     return ((feet - 400) * .02)
     } else if (feet < 2500) {
         return 25;
     }  else (feet > 2500)
     return 'cannot travel that far'
}         
















