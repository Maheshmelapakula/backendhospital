// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
})

router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
