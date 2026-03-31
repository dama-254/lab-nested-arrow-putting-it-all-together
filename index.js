function createLoginTracker() {
  let attempts = 3;
  const correctUsername = "admin";
  const correctPassword = "1234";

  // The test needs this returned arrow function
  return (username, password) => {
    if (attempts <= 0) {
      return "Account locked!";
    }

    if (username === correctUsername && password === correctPassword) {
      attempts = 3; // Reset attempts on success
      return "Login successful!";
    } else {
      attempts--;
      // Ensure this matches the expected test string exactly
      return "Wrong details. Attempts left: " + attempts;
    }
  };
}

// Export the correct name
module.exports = {
  createLoginTracker
};
// 1. Create an instance of your tracker
const testLogin = createLoginTracker();

// 2. Wrap the calls in console.log() to see the results
console.log(testLogin("admin", "wrong")); // Should print: Wrong details. Attempts left: 2
console.log(testLogin("admin", "wrong")); // Should print: Wrong details. Attempts left: 1
console.log(testLogin("admin", "1234"));  // Should print: Login successful!
