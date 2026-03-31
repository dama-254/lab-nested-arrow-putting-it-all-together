function createLoginTracker(userInfo) {
    let attempts = 0;
    let locked = false;

    // Return INNER ARROW FUNCTION
    return (username, password) => {

        // If already locked
        if (locked) {
            return "Account locked";
        }

        // Correct credentials
        if (username === userInfo.username && password === userInfo.password) {
            attempts = 0;
            return "Login successful";
        } 
        
        // Wrong credentials
        else {
            attempts++;

            // Lock after 3 attempts
            if (attempts >= 3) {
                locked = true;
                return "Account locked";
            }

            return "Login failed";
        }
    };
}
const login = createLoginTracker({
    username: "admin",
    password: "1234"
});

console.log(login("admin", "wrong")); // Login failed
console.log(login("admin", "wrong")); // Login failed
console.log(login("admin", "wrong")); // Account locked
console.log(login("admin", "1234"));  // Account locked