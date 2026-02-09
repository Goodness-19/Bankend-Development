function validateName(name) {
  if (!name || name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  return null;
}
function validateAge(age) {
  // we want to check it is not of type number OR
  // age is less than 1
  // then return Age must be a positive Number
  if (typeof age !== "number" || age < 1) {
    return "Age must be a positive number";
  }
  return null;
}

function validateGender(gender) {
  if (!gender) return "gender is required";

  const cleanGender = gender.trim().toUpperCase(); // G

  if (cleanGender.length !== 1) {
    return "Gender must be one character (M, F, O)";
  }

  // validate that it must be one of my defined Genders (M, F, O)
  const allowedGenders = ["M", "F", "O"];
  if (!allowedGenders.includes(cleanGender)) {
    return "Gender must be M, F, or O";
  }
}

export { validateAge, validateGender, validateName };
