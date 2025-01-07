function myFunction(a, b) {
  // Handle null or undefined values for both a and b
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;
  return a + b; // Perform addition only if a and b are numbers
}

console.log(myFunction(5, 3)); // Output: 8
console.log(myFunction(null, 3)); // Output: 3
console.log(myFunction(5, null)); // Output: 5
console.log(myFunction(null, null));//Output:0