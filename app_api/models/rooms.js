
var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var roomSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  beds: {
    type: String,
    required: true
  },
  guests: {
    type: String,
    required: true
  },
  booked: {
    type: String,
    required: true
  },
  
});


mongoose.model('Room', roomSchema);
