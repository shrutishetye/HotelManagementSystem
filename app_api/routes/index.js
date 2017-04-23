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
var ctrlBookings = require('../controllers/booking');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

//user and bookings
router.get('/availability', auth, ctrlRooms.available);
router.post('/bookings', ctrlBookings.bookings);
router.post('/addbooking', ctrlBookings.addbooking);

// admin
router.get('/rooms', auth, ctrlRooms.all);
router.post('/admin/rooms/add', ctrlRooms.add);
router.post('/admin/rooms/update', ctrlRooms.update);
router.post('/admin/rooms/delete', ctrlRooms.delete);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
