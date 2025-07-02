let raceNumber = Math.floor(Math.random() * 1000);
let earlyAdult = true;
let runnerAge = 20;

// Check if runner is early adult
if (earlyAdult === true && runnerAge > 18) {
  console.log(`${raceNumber += 1000} is your race number. You start at 9:30 a.m.`);
} 
  // Check if runner is late adult
  else if (earlyAdult === false && runnerAge > 18) {
  console.log(`${raceNumber} is your race number. You start at 11:00 a.m.`);
} 
  // Check if runner is youth
  else if (runnerAge < 18) {
  console.log(`${raceNumber} is your race number. All youths under 18 will race at 12:30 p.m.`);
} 
  // Check if runner is exactly 18
  else {
  console.log(`${raceNumber} is your race number. See registration desk.`);
}