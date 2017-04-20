(function() {
  
  angular
    .module('meanApp')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$location', 'meanData'];
  function profileCtrl($location, meanData) {
    console.log("profile controller is running...");
    var vm = this;

    vm.user = {};

    meanData.getProfile()
      .success(function(data) {
        console.log("profile controller is running...");
        vm.user = data;
      })
      .error(function (e) {
        console.log(e);
      });
  }

})();