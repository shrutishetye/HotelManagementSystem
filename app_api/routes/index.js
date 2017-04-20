var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlRooms = require('../controllers/rooms');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// //rooms
router.get('/rooms', auth, ctrlRooms.all);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
