var mongoose = require('mongoose');
var BookingHistory = mongoose.model('BookingHistory');


module.exports.addbooking = function(req, res) {
  console.log('in add req', req.body);
  var booking = new BookingHistory();
  booking.email = req.body.email;
  booking.room = req.body.room;
  booking.id = new Date().getTime();
  booking.bookDate = new Date().getTime();
  booking.save(function(err, record) {
    console.log('in add', err, booking);
    if (!err)res.status(200).json(record);
  });

};



module.exports.bookings = function(req, res) {
    BookingHistory
    .find({email: req.body.email})
    .exec(function(err, bookings) {
      res.status(200).json(bookings);
    });
  };
