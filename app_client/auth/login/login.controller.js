(function () {

  angular
  .module('meanApp')
  .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$location', 'authentication'];
  function loginCtrl($location, authentication) {
    var vm = this;

    vm.credentials = {
      email : "",
      password : ""
    };

    vm.onSubmit = function () {
      authentication.login(vm.credentials)
        .error(function(err){
          console.log(err);
        }).then(function(){
          console.log('login sucessfull')
          $location.path('profile');
        });
    };

  }

})();