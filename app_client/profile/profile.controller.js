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

    vm.logout = function(){
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('room');
      $location.path('login');
    }

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
     // vm.bookings = data;
     for(var i in data){
      var d = new Date();
      var f = new Date(data[i].bookDate)
      var day1 = d.getDate();
      var mon1 = d.getMonth();
      var year1 = d.getFullYear();
      var day2 = f.getDate();
      var mon2 = f.getMonth();
      var year2 = f.getFullYear();
      console.log(day1, day2)
      if (day1 === day2 && mon1 === mon2 && year1 === year2){
        data[i].status = "Current";
      } else {
        data[i].status = "Expired";
      }
      data[i].bookDate = data[i].bookDate.split('T')[0]; 
      vm.bookings.push(data[i]);
    }
  })
    .error(function (e) {
      console.log(e);
    });
  }

})();