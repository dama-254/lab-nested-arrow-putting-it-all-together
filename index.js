function createLoginSystem() {
    let attempts = 3;

    const correctUsername = "admin";
    const correctPassword = "1234";

    return (username, password) => {
        // 1. Check if already locked
        if (attempts <= 0) {
            console.log("Account locked!");
            return; 
        }

        // 2. Check credentials
        if (username === correctUsername && password === correctPassword) {
            console.log("Login successful!");
            return; // EXIT HERE so it doesn't hit the 'else' below
        } else {
            // 3. Handle failure
            attempts--;
            console.log("Wrong details. Attempts left: " + attempts);
        }
    };
}


  module.exports = {
    createLoginTracker: createLoginSystem
  };

const login = createLoginSystem();

login("admin", "wrong"); 
login("admin", "wrong"); 
login("admin", "1234");  
login("admin", "1234"); 


