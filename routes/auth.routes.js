const express = require('express');
const router = express.Router();
const { login, signup, logout } = require('../controllers/auth.controller');

// PUBLIC ROUTES
router.post('/signup', signup);
router.post('/login', login);

// LOGOUT is technically a no-op, but useful for client logic
router.post('/logout', logout);

module.exports = router;
