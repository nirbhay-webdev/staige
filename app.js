var app = angular.module('staige',['ngRoute']);

app.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'app-components/home.html'
  })
  .when('/home',{
    templateUrl: 'app-components/main-home.html'
  })
  .otherwise('/');
}]);
