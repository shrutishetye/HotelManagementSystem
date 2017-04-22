
var app = angular.module('meanApp')

app.controller('roomlistCtrl',['$http', 'authentication', '$location', function($http, authentication, $location) {
  console.log("roomslist controller is running...");
  var vm = this
  vm.rooms = []
  $http.get('/api/rooms', {
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

  vm.goToAdd = function(){
    $location.path('add');
  }

  vm.store = function(room){
    console.log(room)
   // $cookies.put('room', room);
  }

  vm.delete = function(r){
    $http.post('/api/admin/rooms/delete', {name: r.name}).success(function(data) {
      console.log('response..', data);
      $location.path('roomlist');
    })
    .error(function (e) {
      console.log('error..', e);
    });
  }
}]);



app.controller('addRoomCtrl',['$http', 'authentication', '$location', function($http, authentication, $location) {
  console.log("add rooms controller is running...");
  var vm = this
  vm.room = {
    name: '',
    type:  '',
    booked: '',
    guests: '',
    beds: ''
  }
  
  vm.onSubmit = function () {
    console.log('Submitting new form');
    $http.post('/api/admin/rooms/add', vm.room).success(function(data) {
      console.log('response..', data);
      $location.path('roomlist');
    })
    .error(function (e) {
      console.log('error..', e);
    });
  }

}]);
