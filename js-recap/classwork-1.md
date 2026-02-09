# Quick OOP Classwork – JavaScript

⏱ Duration: 10–15 minutes  
🎯 Goal: Ensure students understand **functions, classes, and private members** before moving into Node.js & Express.

---

## 📘 Scenario: User Account System

Before building APIs with Express, we need a basic **User Account system** that handles login logic using Object-Oriented Programming.

---

## 📝 Task 1: Create a User Class

Create a class called `User`.

### Requirements
- `username` → public property
- `#password` → private property

### Constructor
The constructor should accept:
- `username`
- `password`

---

## 📝 Task 2: Add Methods

### 1️⃣ `login(password)`
- If the password matches the private password:
  - Log `"Login successful"`
- Otherwise:
  - Log `"Invalid password"`

---

### 2️⃣ `changePassword(oldPassword, newPassword)`
- Only change the password if the old password is correct
- Log success or failure message

---

### 3️⃣ Private Method
Create a private method called:

```js
#validatePassword(password)
Returns true if the password is correct
Returns false otherwise

---
### Expected Test data

const user1 = new User("john_doe", "1234");

user1.login("1234");        // Login successful
user1.login("wrong");       // Invalid password
user1.changePassword("1234", "abcd");
user1.login("abcd");        // Login successful

