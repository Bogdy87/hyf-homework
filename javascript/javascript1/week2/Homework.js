/* Step 2: Javascript warm up part one
              --FreeCodeCamp--
      https://www.freecodecamp.org/BogdyAlex87*/


    //********* */ Flight booking fullname function*************
              https://codepen.io/Bogdy-Alex/pen/zYXQxWa        

    // const fullname1 = "Benjamin"
    // const fullname2 = "Hughes"

    function getFullname (firstname,surname,gender,useFormalName=false) {
      if(useFormalName) {
        if(gender === "male") {
        return "Lord "+`${firstname} ${surname}`;
    } else if (gender === "female"){
      return "Lady " + `${firstname} ${surname}`;
    } 
  } else {
      return `${firstname} ${surname}`;
    }
  }; 

    console.log(getFullname("Benjamin", "Hughes","male",true));
    console.log(getFullname("Oana", "Loredana","female", true));
    console.log(getFullname(" "," ","female",true));

    // Event application

function getEventWeekday (daysFromToday) {
  const weekdays = ["Monday","Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
  const today = weekdays.indexOf("Sunday");  //I can choose any day from the list
  const eventDay =  (today + daysFromToday) % 7;
  return weekdays[eventDay];
};
console.log(getEventWeekday(5)); // Logs out "Friday"


    //*********** */ Weather wear********

    function howIsWeather(temperature) {
      if (temperature >= 30 ) {
         return `The temperature is ${temperature} degrees, we recommand to wear shorts and t-shirt.`;
    }else if (temperature >= 15 && temperature < 15) {
         return  `The temperature is ${temperature} degrees, we recommand to wear pants and blouse.`;
    }else {
         return `The temperature is ${temperature} degrees ,you should wear jacket and gloves.`;
    }
  }

    let getRandomDegrees = Math.floor(Math.random() * (40 - (-10) + 1)) + (-10); //return a random nr between -10 and 40.

    const clothesToWear = howIsWeather(getRandomDegrees)
    console.log(clothesToWear);


                // ********** Student manager*************

  const class07Students = [];
  function addStudentToClass(studentName) {
  
    // Check if the class has more then 6 students.
    if (class07Students.length >= 6 && studentName !== "Queen"){
        console.log('Cannot add more students to class 07');
        return;
}
      // Check if the student is already in the class.
    if(class07Students.includes(studentName)) {
      console.log(`Student ${studentName} is already in class`);
      return;
    }

    // If the Queen is being added, always add her to the class
    if (studentName === 'Queen'){
       class07Students.push(studentName);
       return;
     }

     // Check if the student name is not an empty string.
     if(studentName.trim() === ""){
      console.log('You cannot add an empty string to a class')
      return;
     }
     class07Students.push(studentName);
     return;
    }
     // Return the number of students in the class
  function getNumberOfStudents() {
  return class07Students.length;
}
console.log("Number of students:", getNumberOfStudents());


addStudentToClass("Emma");
addStudentToClass("David");
addStudentToClass("Eva");
addStudentToClass("Maria");
addStudentToClass("Vasile");
addStudentToClass("Nicoleta");
addStudentToClass("Diana");
addStudentToClass("Oana");
addStudentToClass("Queen");
addStudentToClass("Queen");

// Candy helper optional
const boughtCandyPrices =[];
const candyPrices = {
  "Sweet":0.5,
  "Chocolate":0.7,
  "Toffee":1.1,
  "chewing-gum":0.03
};

function addCandy (candyType,weight){
  if(candyPrices.hasOwnProperty(candyType)) {
    const price = candyPrices[candyType] *  weight;
    boughtCandyPrices.push(price);
  }else {
    console.log("Invalid candy type");
  }
}

addCandy("Sweet", 40);
addCandy("Chocolate", 30);

console.log(boughtCandyPrices);



function canBuyMoreCandy(){
 const amountToSpend = Math.random() * 100;
 let totalPrice= 0;
 let i = 0;
 while(i < boughtCandyPrices.length){
  totalPrice += boughtCandyPrices[i];
  i++;
 }
 if (totalPrice <  amountToSpend){
  console.log("You can buy more, so please do!");
  return true
 }else {
  console.log("Enough candy for you!");
  return false;
 }
}
canBuyMoreCandy();