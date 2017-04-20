var mongoose = require('mongoose');
var Room = mongoose.model('Room');

module.exports.all = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    Room
      .find()
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};
