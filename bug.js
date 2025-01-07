function myFunction(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Normal addition
}

console.log(myFunction(5, 3)); // Output: 8
console.log(myFunction(null, 3)); // Output: null
console.log(myFunction(5, null)); //Output: null