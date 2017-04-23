var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var bookingHistorySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  roomName: {
    type: String,
    required: true
  },
  bookDate: {
    type: Date,
    required: true
  }
  id: {
    type: Date,
    required: true,
    unique: true
  }
});

};

mongoose.model('BookingHistory', bookingHistorySchema);
