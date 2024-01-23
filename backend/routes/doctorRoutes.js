// // controllers/authController.js
// const User = require('../models/User');
// const { hashPassword, comparePassword, generateToken } = require('../utils/authUtils');

// const signup = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'User with this email already exists. Please use a different email.' });
//     }

//     // Hash the password
//     const hashedPassword = await hashPassword(password);

//     // Create a new user
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     res.json({ message: 'Signup successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error during signup' });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await User.findOne({ email });

//     // Check if the user exists
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid email or password. Please check your credentials and try again.' });
//     }

//     // Compare the entered password with the hashed password
//     const passwordMatch = await comparePassword(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ error: 'Invalid email or password. Please check your credentials and try again.' });
//     }

//     // Generate a JWT token
//     const token = generateToken({ userId: user._id, email: user.email });
//     res.json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error during login' });
//   }
// };

// module.exports = { signup, login };

// Example API endpoints (express.js syntax)
const express = require('express');
const router = express.Router();

// Get all doctors
router.get('/doctors', (req, res) => {
  // Your implementation to fetch all doctors from the database
  // ...

  res.json(doctors);
});

// Create a new doctor
router.post('/doctors', (req, res) => {
  // Your implementation to create a new doctor in the database
  // ...

  res.json(newDoctor);
});

// Update a doctor
router.put('/doctors/:id', (req, res) => {
  const doctorId = req.params.id;
  // Your implementation to update the doctor in the database
  // ...

  res.json(updatedDoctor);
});

// Delete a doctor
router.delete('/doctors/:id', (req, res) => {
  const doctorId = req.params.id;
  // Your implementation to delete the doctor from the database
  // ...

  res.json({ message: 'Doctor deleted successfully' });
});

module.exports = router;
