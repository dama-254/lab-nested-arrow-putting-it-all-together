function createLoginTracker(userInfo) {
    let attempts = 0;
    let isLocked = false;

    // Inner arrow function (closure)
    return (username, password) => {

        if (isLocked) {
            return "Account is locked. Too many failed attempts.";
        }

        if (username === userInfo.username && password === userInfo.password) {
            attempts = 0; // reset attempts on success
            return "Login successful!";
        } else {
            attempts++;

            if (attempts >= 3) {
                isLocked = true;
                return "Account locked after 3 failed attempts.";
            }

            return `Login failed. Attempts remaining: ${3 - attempts}`;
        }
    };
}
const user = {
    username: "admin",
    password: "1234"
};

const login = createLoginTracker(user);

console.log(login("admin", "wrong")); // محاولة 1
console.log(login("admin", "wrong")); // محاولة 2
console.log(login("admin", "wrong")); // locks account
console.log(login("admin", "1234"));  // still locked