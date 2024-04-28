//********************************************************** */
/* Step 2: Javascript warm up part one
              --FreeCodeCamp--
      https://www.freecodecamp.org/BogdyAlex87*/

//*************************************************************/

/*Step 3: Smart-ease
          Age-ify (A future age calculator)*/
//******************************************************************

const yearOfBirth = 1987;
const yearFuture = 2059;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

/*Goodboy-Oldboy (A dog age calculator)*/

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const humanAge = dogYearFuture - dogYearOfBirth;

const dogAge = humanAge * 7



const shouldShowResultInDogYears = true;

const dogYear = shouldShowResultInDogYears ? dogAge + ' dog' : humanAge + ' human';
console.log("Your dog will be " + dogYear + " years old in " + dogYearFuture);

/*Housey pricey (A house price estimator)*/

// Peter's house details
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterGardenSize = 100;
const peterActualHousePrice = 2500000;

// Calculate Peter's estimated price
const peterHouseVolumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHeight;
const peterEstimatedHousePrice =
  peterHouseVolumeInMeters * 2.5 * 1000 + peterGardenSize * 300;

// Output Peter's result
if (peterActualHousePrice > peterEstimatedHousePrice) {
  console.log(
    "Peter is paying too much. Estimated price is $" + peterEstimatedHousePrice
  );
} else if (peterActualHousePrice < peterEstimatedHousePrice) {
  console.log(
    "Peter is paying too little. Estimated price is $" + peterEstimatedHousePrice
  );
} else {
  console.log(
    "Peter is paying the right amount. Estimated price is $" +
      peterEstimatedHousePrice
  );
}

// Julia's house details
const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaGardenSize = 70;
const juliaActualPrice = 1000000;

// Calculate Julia's estimated price
const juliaHouseVolumeInMeters = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;
const juliaHouseEstimatedPrice =
  juliaHouseVolumeInMeters * 2.5 * 1000 + juliaGardenSize * 300;

// Output Julia's result
if (juliaActualPrice > juliaHouseEstimatedPrice) {
  console.log(
    "Julia is paying too much. Estimated price is $" + juliaHouseEstimatedPrice
  );
} else if (juliaActualPrice < juliaHouseEstimatedPrice) {
  console.log(
    "Julia is paying too little. Estimated price is $" + juliaHouseEstimatedPrice
  );
} else {
  console.log(
    "Julia is paying the right amount. Estimated price is $" +
      juliaHouseEstimatedPrice
  );
}

// Ez Namey (Startup name generator) Optional

const firstWords = [
  "HealthPulse",
  "Analytics",
  "QuantumSecure",
  "UrbanRoot",
  "Skyline",
  "NeuroFlux",
  "GenesisTech",
  "CogniChild",
  "Energy",
  "BlueWave",
];
const secondWords = [
  "Brightly",
  "Sparkling",
  "Radiant",
  "Shining",
  "Beautiful",
  "Lovely",
  "Glimmer",
  "Twinkle",
  "Flux",
  "Forge",
];
              // Generate a random startup name
const randomStartupName =
  firstWords[Math.floor(Math.random() * 10)] +
  " " +
  secondWords[Math.floor(Math.random() * 10)];

console.log(
  "RANDOM -The startup: " +
    randomStartupName +
    " contains " +
    randomStartupName.length +
    " characters."
);
                  //  Generate a fixed startup name by given a index number for each array
const startupName = firstWords[1] + " " + secondWords[6];

console.log(
  `FIXED-The startup: ${startupName} contains ${startupName.length} characters.`)
