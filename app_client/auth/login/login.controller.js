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
        alert('Login Unsuccessful');
      }).then(function(){
        console.log('login successful')
        var cUser = authentication.currentUser()
        if(cUser.email == 'admin@staytoday.com'){
          $location.path('roomlist');
        }else{
          sessionStorage['user'] = JSON.stringify(cUser)
          $location.path('rooms');
        }
      });
    };

  }

})();