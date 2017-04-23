(function() {

  angular
  .module('meanApp')
  .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$location', '$http', 'meanData'];
  function profileCtrl($location, $http, meanData) {
    console.log("profile controller is running...");
    var vm = this;

    vm.user = {};
    vm.bookings = [];

    meanData.getProfile()
    .success(function(data) {
      console.log("profile controller is running...");
      vm.user = data;
    })
    .error(function (e) {
      console.log(e);
    });

     var cUser = JSON.parse(sessionStorage.user);

    $http.post('/api/bookings', { email: cUser.email }).success(function(data) {
      console.log('response bookings', data);
      vm.bookings = data;
    })
    .error(function (e) {
      console.log(e);
    });
  }

})();