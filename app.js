angular.module('app', [
  'ui.router',
  'message',
  'signup'
])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home/message')
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'pages/home.html'
    })
    .state('home.signup',  {
      url: '/message',
      templateUrl: 'pages/signup.html',
      controller: 'messageCtrl'
    })
    .state('home.signup',  {
      url: '/signup',
      templateUrl: 'pages/signup.html',
      controller: 'signupCtrl'
    })
})
})
