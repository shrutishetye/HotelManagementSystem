(function() {
  
  angular
    .module('meanApp')
    .controller('roomsCtrl', roomsCtrl); 

    roomsCtrl.$inject = ['$http', 'authentication'];
  function roomsCtrl($http, authentication) {
    console.log("rooms controller is running...");
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

  }
    
})();




