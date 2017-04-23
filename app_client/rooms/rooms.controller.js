
var app = angular
.module('meanApp')
.controller('roomsCtrl', roomsCtrl); 

roomsCtrl.$inject = ['$http','authentication','$location'];
function roomsCtrl($http, authentication, $location) {
  console.log("rooms controller is running...");
  var vm = this
  vm.rooms = []
  vm.currentPage = 0;
  vm.pageSize = 5;
  vm.numberOfPages=function(){
    return Math.ceil(vm.rooms.length/vm.pageSize);                
  }
  
  vm.book = function(room){
    vm.room = {
      name: room.name,
      type:  room.type,
      booked: true,
      guests: room.guests,
      beds: room.beds,
      cost: room.cost,
      city: room.city
    }
    var cUser = JSON.parse(sessionStorage.user);
    $http.post('/api/admin/rooms/update', vm.room).success(function(data) {
      var broom = {email: cUser.email, room: vm.room.name}
      $http.post('/api/addbooking', broom).success(function(d) {
        alert("Payment successfull. Booking ID: 78926AS56");
        $location.path('profile');
      })
      .error(function (e) {
        console.log('error..', e);
      })
    })
    .error(function (e) {
      alert("Error occured please contact Customer Service !!");
      window.location.reload(true);
      console.log('error..', e);
    });
  }

  $http.get('/api/availability', {
    headers: {
      Authorization: 'Bearer '+ authentication.getToken()
    }
  }).success(function(data) {
    console.log('response', data);
    vm.rooms = data;
  })
  .error(function (e) {
    console.log(e);
  });
}

app.filter('startFrom', function() {
  return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
      }
    });






