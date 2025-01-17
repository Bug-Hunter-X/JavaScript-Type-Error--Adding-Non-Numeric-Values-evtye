# JavaScript Type Error: Adding Non-Numeric Values

This repository demonstrates a common JavaScript error involving type coercion during arithmetic operations.  The `bug.js` file contains a function that attempts to add two variables without checking if they are numbers, leading to unexpected behavior or runtime errors. The `bugSolution.js` provides a corrected version with explicit type checking.

## How to Reproduce the Bug
1. Clone this repository.
2. Open `bug.js`.
3. Run the `foo` function with non-numeric arguments (e.g., strings or booleans).
4. Observe the error message or unexpected results.

## Solution
The solution provided in `bugSolution.js` incorporates explicit type checking using `typeof` to ensure both arguments are numbers before performing the addition.  This prevents the type error and results in predictable behavior. 