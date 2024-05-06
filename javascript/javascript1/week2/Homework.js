/* Step 2: Javascript warm up part one
              --FreeCodeCamp--
      https://www.freecodecamp.org/BogdyAlex87*/

//********* */ Flight booking fullName function*************
//codepen.io/Bogdy-Alex/pen/zYXQxWa

function getFullName(firstName, surname, gender, useFormalName = false) {
  const trimmedFirstName = firstName.trim();
  const trimmedSurname = surname.trim();
  const fullName = `${trimmedFirstName} ${trimmedSurname}`;

  if (trimmedFirstName.length === 0 || trimmedSurname.length === 0) {
    return "Invalid name provided";
  } else if (useFormalName) {
    if (gender === "male") {
      return "Lord " + fullName;
    } else {
      return "Lady " + fullName;
    }
  }
}

console.log(getFullName("Benjamin", "Hughes", "male", true));
console.log(getFullName("Oana", "Loredana", "female", true));
console.log(getFullName(" ", " ", true));

// Event application

function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const today = new Date().getDay();
  const eventDay = (today + daysFromToday) % 7;
  return weekdays[eventDay];
}
console.log(getEventWeekday(5));

//*********** */ Weather wear********

function howIsWeather(temperature) {
  if (temperature >= 25) {
    return `The temperature is ${temperature} degrees, we recommend to wear shorts and t-shirt.`;
  } else if (temperature >= 10 && temperature < 25) {
    return `The temperature is ${temperature} degrees, we recommend to wear pants and blouse.`;
  } else {
    return `The temperature is ${temperature} degrees ,you should wear jacket and gloves.`;
  }
}

const getRandomDegrees = Math.floor(Math.random() * (35 - -10 + 1)) + -10; //return a random nr between -10 and 40.

const clothesToWear = howIsWeather(getRandomDegrees);
console.log(clothesToWear);

// ********** Student manager*************

const class07Students = [];
function addStudentToClass(studentName) {
  // Check if the class has more then 6 students.
  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }
  // Check if the student is already in the class.
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in class`);
    return;
  }

  // If the Queen is being added, always add her to the class
  if (studentName === "Queen") {
    class07Students.push(studentName);
    return;
  }

  // Check if the student name is not an empty string.
  if (studentName.trim() === "" || studentName.trim().length === 0) {
    console.log("You cannot add an empty string to a class");
    return;
  }
  class07Students.push(studentName);
  return;
}
// Return the number of students in the class
function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Emma");
addStudentToClass("Diana");
addStudentToClass("Oana");
addStudentToClass("Queen");
addStudentToClass("Queen");
addStudentToClass(" ");
addStudentToClass("Emil");
addStudentToClass("Gab");

console.log("Number of students:", getNumberOfStudents());

// Candy helper optional
const boughtCandyPrices = [];
const candyPrices = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  "chewing-gum": 0.03,
};

function addCandy(candyType, weight) {
  if (candyPrices.hasOwnProperty(candyType)) {
    const price = candyPrices[candyType] * weight;
    boughtCandyPrices.push(price);
  } else {
    console.log("Invalid candy type");
  }
}

addCandy("Sweet", 40);
addCandy("Chocolate", 30);

console.log(boughtCandyPrices);

function canBuyMoreCandy() {
  const amountToSpend = Math.random() * 100;
  // let totalPrice = 0;
  // let i = 0;
  // while (i < boughtCandyPrices.length) {
  //   totalPrice += boughtCandyPrices[i];
  //   i++;
  // }
  let totalPrice = 0;
  for (let price of boughtCandyPrices) {
    totalPrice += price;
  }
  if (totalPrice < amountToSpend) {
    console.log("You can buy more, so please do!");
    return true;
  } else {
    console.log("Enough candy for you!");
    return false;
  }
}

canBuyMoreCandy();
