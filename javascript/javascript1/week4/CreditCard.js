function formatCreditCardNumber(number) {
  // Check if the input is a number
  if (typeof number !== "number" || isNaN(number)) {
    return { original: number, formatted: "Invalid input" };
  }

  // Convert the number to a string
  const numStr = String(number);

  // Format the number with spaces
  let formattedNum = "";
  for (let i = 0; i < numStr.length; i++) {
    formattedNum += numStr[i];
    // Add a space after every 4 digits except for the last group of digits
    if ((i + 1) % 4 === 0 && i !== numStr.length - 1) {
      formattedNum += " ";
    }
  }

  return { original: number, formatted: formattedNum };
}

// Test cases
const formattedCreditCardObject1 = formatCreditCardNumber(1234567891234567);
console.log(formattedCreditCardObject1);

const formattedCreditCardObject2 = formatCreditCardNumber("abc");
console.log(formattedCreditCardObject2);
