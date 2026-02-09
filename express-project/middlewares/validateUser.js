import {
  validateAge,
  validateGender,
  validateName,
} from "../validators/userValidators.js";

const validateUser = (req, res, next) => {
  const { name, age, gender } = req.body;

  const errors = [];

  const nameError = validateName(name);
  if (nameError) errors.push(nameError);

  const ageError = validateAge(age);
  if (ageError) errors.push(ageError);

  const genderError = validateGender(gender);
  if (genderError) errors.push(genderError);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  next();
};

export { validateUser };
