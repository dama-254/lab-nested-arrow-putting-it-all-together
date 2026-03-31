function createLoginTracker() {
    let attempts = 3;

    const correctUsername = "admin";
    const correctPassword = "1234";

    // This is the function that the test "expects" to receive back
    return (username, password) => {
        if (attempts <= 0) {
            return "Account locked!"; 
        }

        if (username === correctUsername && password === correctPassword) {
            attempts = 3; // Reset
            return "Login successful!";
        } else {
            attempts--;
            return "Wrong details. Attempts left: " + attempts;
        }
    };
}

module.exports = {
  createLoginTracker
};
const login = createLoginTracker();
console.log(login("admin", "1234"));