function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; //potential bug here if a and b are not numbers
}