
var app = angular
.module('meanApp')
.controller('roomsCtrl', roomsCtrl); 

roomsCtrl.$inject = ['$http','authentication'];
function roomsCtrl($http, authentication) {
  console.log("rooms controller is running...");
  var vm = this
  vm.rooms = []
  vm.currentPage = 0;
  vm.pageSize = 2;
  vm.numberOfPages=function(){
    return Math.ceil(vm.rooms.length/vm.pageSize);                
  }
  
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
}

app.filter('startFrom', function() {
  return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
      }
    });






