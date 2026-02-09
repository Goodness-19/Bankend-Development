class User {
  username;
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  #validatePassword(password) {
    return this.#password === password;
  }

  login(password) {
    if (this.#validatePassword(password)) {
      console.log("Login successful");
    } else {
      console.log("Invalid password");
    }
  }

  changePassword(oldPassword, newPassword) {
    if (this.#validatePassword(oldPassword)) {
      this.#password = newPassword;
      console.log("password changed successfully");
    } else {
      console.log("Old password is incorrect");
    }
  }
}

const user = new User("taiwo", "12345");
user.login("1234567"); // if 12345 === 1234567 // false
user.login("12345");
user.changePassword("12345", "abcd");
user.login("abcd");

// DRY - DOn't Repeat Yourself
