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

const dogYearOfBirth = 2020;
const dogYearFuture = 2024;
const humanAge = dogYearFuture - dogYearOfBirth;

let dogAge;

if (humanAge === 1) {
  dogAge = 15;
} else if (humanAge === 2) {
  dogAge = 24;
} else {
  dogAge = 24 + (humanAge - 2) * 5;
}

const shouldShowResultInDogYears = true;

const dogYear = shouldShowResultInDogYears ? dogAge : humanAge;
console.log(
  "Your dog will be ",
  dogYear,
  shouldShowResultInDogYears
    ? " dog years old in " + dogYearFuture
    : "human year old in " + dogYearFuture
);

/*Housey pricey (A house price estimator)*/

// Peter's house details
const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSize = 100;
const peterActualPrice = 2500000;

// Calculate Peter's estimated price
const peterVolumeInMeters = peterWidth * peterDepth * peterHeight;
const peterEstimatedPrice =
  peterVolumeInMeters * 2.5 * 1000 + peterGardenSize * 300;

// Output Peter's result
if (peterActualPrice > peterEstimatedPrice) {
  console.log(
    "Peter is paying too much. Estimated price is $" + peterEstimatedPrice
  );
} else if (peterActualPrice < peterEstimatedPrice) {
  console.log(
    "Peter is paying too little. Estimated price is $" + peterEstimatedPrice
  );
} else {
  console.log(
    "Peter is paying the right amount. Estimated price is $" +
      peterEstimatedPrice
  );
}

// Julia's house details
const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGardenSize = 70;
const juliaActualPrice = 1000000;

// Calculate Julia's estimated price
const juliaVolumeInMeters = juliaWidth * juliaDepth * juliaHeight;
const juliaEstimatedPrice =
  juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSize * 300;

// Output Julia's result
if (juliaActualPrice > juliaEstimatedPrice) {
  console.log(
    "Julia is paying too much. Estimated price is $" + juliaEstimatedPrice
  );
} else if (juliaActualPrice < juliaEstimatedPrice) {
  console.log(
    "Julia is paying too little. Estimated price is $" + juliaEstimatedPrice
  );
} else {
  console.log(
    "Julia is paying the right amount. Estimated price is $" +
      juliaEstimatedPrice
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
  `FIXED-The startup: ${startupName} contains ${startupName.length} characters.`);
