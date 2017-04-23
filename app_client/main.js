(function () {

  angular.module('meanApp', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/register', {
      templateUrl: '/auth/register/register.view.html',
      controller: 'registerCtrl',
      controllerAs: 'vm'
    })
    .when('/login', {
      templateUrl: '/auth/login/login.view.html',
      controller: 'loginCtrl',
      controllerAs: 'vm'
    })
    .when('/profile', {
      templateUrl: '/profile/profile.view.html',
      controller: 'profileCtrl',
      controllerAs: 'vm'
    })
    .when('/rooms', {
      templateUrl: '/rooms/rooms.view.html',
      controller: 'roomsCtrl',
      controllerAs: 'vm'
    })
    .when('/add', {
      templateUrl: '/admin/add.view.html',
      controller: 'addRoomCtrl',
      controllerAs: 'vm'
    })
    .when('/roomlist', {
      templateUrl: '/admin/roomlist.view.html',
      controller: 'roomlistCtrl',
      controllerAs: 'vm'
    })
    .when('/update', {
      templateUrl: '/admin/update.view.html',
      controller: 'updateRoomCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  function run($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
      if ($location.path() === '/rooms' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
    });
  }
  
  angular
  .module('meanApp')
  .config(['$routeProvider', '$locationProvider', config])
  .run(['$rootScope', '$location', 'authentication', run]);

})();