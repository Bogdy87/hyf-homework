
// Create a function called celciusToFahreneit it should have a parameter called celcius. It should return the temperature in fahrenheit.

function celciusToFahreneit (celcius) {
  const fahrenheit = celcius * 9/5 +32;
  return fahrenheit;
}
console.log(celciusToFahreneit(25));


// Todo: Create a function called getCircleArea. It should have the radius of the circle as parameter and return the circle area. What happens if we dont return anything in the function?
// Try call the function and check with google if the function returns the right value.

function getCircleArea() {
    let r = prompt("Enter the radius of a circle:");
    let area = Math.PI*r*r;
    alert(`The area of the circle is ${area}`);
    return(getCircleArea());
}
