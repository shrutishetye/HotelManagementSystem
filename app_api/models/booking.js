var mongoose = require( 'mongoose' );

var bookingHistorySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  bookDate: {
    type: Date,
    required: true
  },
  id: {
    type: Date,
    required: true,
    unique: true
  },
});


mongoose.model('BookingHistory', bookingHistorySchema);
