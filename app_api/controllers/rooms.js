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
    .exec(function(err, rooms) {
      res.status(200).json(rooms);
    });
  }

};

module.exports.add = function(req, res) {
  var room = new Room();
  room.name = req.body.name;
  room.type = req.body.type;
  room.booked = req.body.booked;
  room.guests = req.body.guests;
  room.beds = req.body.beds;
  room.save(function(err, room) {
    if (!err)res.status(200).json(room);
  });
};

module.exports.update = function(req, res) {
console.log(req.body)
  var room = new Room();
  room.type = req.body.type;
  room.booked = req.body.booked;
  room.guests = req.body.guests;
  room.beds = req.body.beds;

  Room.findOne({ name: req.body.name }, function(err,doc){  
    doc.type= req.body.type, 
    doc.booked= req.body.booked, 
    doc.guests= req.body.guests, 
    doc.beds= req.body.beds 
    doc.save(function(err, room) {
    if (!err)res.status(200).json(room);
  });
  });
};

module.exports.delete = function(req, res) {
  Room.remove({ name: req.body.name }, function (err, removed){
    if (!err)res.status(200).json(removed);
  });

};