var weather = angular.module('weather',['ngRoute' , 'ngResource']);




weather.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
          
          templateUrl:'pages.home.html',
        controller:'homec'
          
          })
    
     .when('/forcast',{
          
          templateUrl:'pages.forecast.html',
        controller:'forec'
          
          })
    
    
    
});

weather.controller('homec',['$scope',function($scope){
    
    
    
    
    
}]);


weather.controller('forec',['$scope',function($scope){
    
    
    
    
    
}]);
