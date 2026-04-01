function createLoginTracker(userInfo) {
    let wrongAttempts = 0;

    // Return arrow function
    return (username, password) => {

        // ✅ Always allow correct login FIRST
        if (username === userInfo.username && password === userInfo.password) {
            wrongAttempts = 0; // reset attempts
            return "Login successful";
        }

        // ❌ Wrong login
        wrongAttempts++;

        // ❌ Lock only AFTER 3 failed attempts
        if (wrongAttempts >= 3) {
            return "Account locked";
        }

        return "Login failed";
    };
}
const login = createLoginTracker({
    username: "admin",
    password: "1234"
});

console.log(login("admin", "wrong")); // Login failed
console.log(login("admin", "wrong")); // Login failed
console.log(login("admin", "1234"));  // Login successful ✅
console.log(login("admin", "wrong")); // Login failed
console.log(login("admin", "wrong")); // Login failed
console.log(login("admin", "wrong")); // Account locked