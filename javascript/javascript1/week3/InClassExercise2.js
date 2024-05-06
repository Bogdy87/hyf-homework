const fruits = ["apple", "banana", "orange"];
// Investigate array methods: pop, push, shift, unshift, includes
// fruits.pop();
// console.log(fruits); // Output: ['apple', 'banana']

// fruits.push("grape");
// console.log(fruits); // Output: ['apple', 'banana', 'grape']

// fruits.shift("apple");
// console.log(fruits); // Output: [ 'banana', 'grape' ]

// fruits.unshift("apple");
// console.log(fruits); // Output: [ 'apple', 'banana', 'grape' ]

// console.log(fruits.includes("banana")); // Output: true

// without touching the above lines, add "kiwi" to the fruits array
const count = fruits.push("kiwi");
console.log(fruits);
console.log(count);

// extract "kiwi" from the array and log it out
// the fruits array should now be without "kiwi"
const dropout = fruits.pop();
console.log(fruits);
console.log(dropout);
// without touching the above lines
// add dragonfruit and elderberry to the array

fruits.push("dragonfruit", "elderberry");
console.log(fruits);

// console.log "Banana in fruit basket" or "No Banana in ..."
// whether "banana" is inside of the fruit array

if (fruits.includes("banana")) {
  console.log("Banana in fruit basket");
} else {
  console.log("No banana in fruit basket");
}
// add strawberry to the beginning of the fruit array

fruits.unshift("strawberry");
console.log(fruits);

// extract strawberry from the fruit array into a variable
// console log the fruit basket and the variable

const leftDropout = fruits.shift();
console.log(fruits);
console.log(leftDropout);
