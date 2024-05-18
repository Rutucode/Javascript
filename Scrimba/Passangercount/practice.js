let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function lapTime(){
//   let  laps = lap1 + lap2 + lap3;
//     console.log(laps)
// }

// lapTime()

function lapTime(){
    console.log(lap1 + lap2 + lap3);
    //method 2
    //    let totalTime = lap1 + lap2 + lap3
   // console.log(totalTime)
}
lapTime()
//---------------------------------------------------------------------------------------
//Sol 1
let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
function laps(){
  lapsCompleted  = lapsCompleted + 1;
    
}
laps()
laps()
laps()


console.log(lapsCompleted)
//_________________________________________________________________
//Sol 2
//let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
function increment(){
 lapsCompleted = lapsCompleted + 1;
 // no need for this console.log(lapsCompleted)  
}

increment()
increment()
increment()

console.log(lapsCompleted)
//New ---------------------------------------------------------------------------------------