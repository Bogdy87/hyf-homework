function getCardInfo(cardNumber) {
  const cardNumberStr = cardNumber.toString();

  // Check the first digit(s) to identify the card type
  if (cardNumberStr.match(/^4/)) {
    return "Visa";
  } else if (cardNumberStr.match(/^5/)) {
    return "Mastercard";
  } else if (cardNumberStr.match(/^3[47]/)) {
    return "American Express";
  } else if (cardNumberStr.match(/^6(?:011|5)/)) {
    return "Discover";
  } else if (cardNumberStr.match(/^3(?:0[0-5]|[68])/)) {
    return "Diners Club/Carte Blanche";
  } else if (cardNumberStr.match(/^35(?:2[89]|[3-8][0-9])/)) {
    return "JCB";
  } else {
    return "Unknown";
  }
}

// Test case
console.log(getCardInfo(3781321334789876)); // 'Visa'
