const express = require('express');
const { signup, login } = require('../controllers/userController');
const router = express.Router();

// User signup route
router.post('/signup', signup);

// User login route
router.post('/login', login);

module.exports = router;
