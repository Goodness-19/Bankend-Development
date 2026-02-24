const validateRegister = (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Check required fields
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email, and password are required",
    });
  }

  // Name validation (at least 2 characters)
  if (name.trim().length < 2) {
    return res.status(400).json({
      message: "Name must be at least 2 characters long",
    });
  }

  // Email validation (must include @ symbol and valid format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 6 characters, include 1 uppercase letter, 1 number, and 1 special character",
    });
  }

  // Default role
  if (!role) {
    req.body.role = "user";
  }

  next();
};

module.exports = validateRegister;