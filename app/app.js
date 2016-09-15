angular.module('app1', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeController',
    templateUrl: './app/home/home.html'
  })

})
