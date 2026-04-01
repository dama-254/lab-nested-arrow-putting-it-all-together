function createLoginTracker(userInfo) {
    let attempts = 0;
    let isLocked = false;

    // RETURN arrow function
    return (username, password) => {

        // If already locked
        if (isLocked) {
            return "Account locked";
        }

        // Correct login
        if (username === userInfo.username && password === userInfo.password) {
            return "Login successful";
        } 
        
        // Incorrect login
        else {
            attempts++;

            if (attempts >= 3) {
                isLocked = true;
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

console.log(login("admin", "wrong"));
console.log(login("admin", "wrong"));
console.log(login("admin", "wrong"));
console.log(login("admin", "1234"));