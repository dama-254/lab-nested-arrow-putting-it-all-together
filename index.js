function createLoginTracker() {
  let attempts = 0; // Track wrong attempts
  const maxAttempts = 3;
  const correctUsername = "admin";
  const correctPassword = "1234";

  // Requirement: Should return a function
  return (username, password) => {
    // 1. Check if already locked
    if (attempts >= maxAttempts) {
      return "Account locked!";
    }

    // 2. Requirement: Allow correct login immediately or after failure
    if (username === correctUsername && password === correctPassword) {
      attempts = 0; // Reset count on success
      return "Login successful!";
    } else {
      // 3. Requirement: Keep track of wrong login count
      attempts++;
      
      // 4. Requirement: Limit attempts to 3
      // If we just hit 3, return locked immediately
      if (attempts >= maxAttempts) {
        return "Account locked!";
      }

      return "Wrong details. Attempts left: " + (maxAttempts - attempts);
    }
  };
}

module.exports = {
  createLoginTracker
};
const testLogin = createLoginTracker();

// We use console.log to "see" the returned string
console.log(testLogin("admin", "wrong"));   // Expected: "Wrong details. Attempts left: 2"
console.log(testLogin("admin", "wrong"));   // Expected: "Wrong details. Attempts left: 1"
console.log(testLogin("admin", "1234"));    // Expected: "Login successful!"
console.log(testLogin("admin", "wrong"));   // Expected: "Account locked!" (already used 3 tries)