//******************** */ Item array removal****************************

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const indexToRemove = names.indexOf(nameToRemove);

// Write some code here
if (indexToRemove !== -1) {
  names.splice(indexToRemove, 1);
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//************************** */ When will we be there??********************************
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
  const speedKmPerHour = travelInformation.speed;
  const distanceKm = travelInformation.destinationDistance;

  // Calculate the total time in hours
  const totalTimeHours = distanceKm / speedKmPerHour;

  // Calculate the hours and minutes separately
  const hours = Math.floor(totalTimeHours);
  const minutes = Math.round((totalTimeHours - hours) * 60);

  // Format the time
  const formattedTime = `${hours} hours and ${minutes} minutes`;

  return formattedTime;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // Output: 8 hours and 38 minutes
