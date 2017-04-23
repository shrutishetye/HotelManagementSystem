
var app = angular
.module('meanApp')
.controller('favCtrl', favCtrl); 

favCtrl.$inject = ['$http','authentication','$location'];
function favCtrl($http, authentication, $location) {
  console.log("rooms controller is running...");
  var vm = this
  vm.rooms = []
  
  
}







