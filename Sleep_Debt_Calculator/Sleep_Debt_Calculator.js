// User inserts amount of sleep for each day in the return for given day
const getSleepHours = (day) => {
   switch (day) {
    case 'monday':
    return 8;
    case 'tuesday':
    return 8;
    case 'wednesday':
    return 9;
    case 'thursday':
    return 8;
    case 'friday':
    return 8;
    case 'saturday':
    return 8;
    case 'sunday':
    return 8;
    // Other cases
    default:
    throw new Error('Invalid day input');
  }
} 

// Adds sleep hours from the week and sums it up
const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') 
 + getSleepHours('saturday') + getSleepHours('sunday');


// Allows user to insert their ideal weekly amount of sleep 
const getIdealSleepHours = (idealHours) => idealHours;


/* Calculates the amount of sleep and calculates sleep needed or hours overslept. User can input their ideal amount of sleep
   into the idealSleepHours parameter */
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(58);
  const amountNeeded = idealSleepHours - actualSleepHours;
  const amountOverslept = actualSleepHours - idealSleepHours;
  console.log('The ideal amount of sleep for the average human is 56 hours per week.')
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep! You got ${actualSleepHours} hours`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more than enough sleep :O You got ${amountOverslept} hours more than needed!!`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You need more sleep :/ You needed ${amountNeeded} more hours`);
  }
}


calculateSleepDebt();