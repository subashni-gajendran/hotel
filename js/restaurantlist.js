var app = angular.module("sampleapp", []);
app.controller('samplecontoller', ['$scope', '$http', function ($scope, $http) { 
  $scope.searchRestaurant = function(value) {
  $http.defaults.headers.common['Accept-Tenant'] ='uk';
  $http.defaults.headers.common['Accept-Language'] ='en-GB';
  $http.defaults.headers.common.Authorization ='Basic VGVjaFRlc3RBUEk6dXNlcjI=';
  $http.get("http://public.je-apis.com/restaurants?q="+value)
    .then(function(response){
        $scope.datalists = response.data.Restaurants;
        $scope.curPage = 0;
        $scope.pageSize = 5;
        $scope.datalists = response.data.Restaurants;
        $scope.numberOfPages = function() {
        return Math.ceil($scope.datalists.length / $scope.pageSize);
      }
    });
  }
}]);

angular.module('sampleapp').filter('pagination', function()
{
  return function(input, start)
  {
    start = +start;
    return input.slice(start);
  };
})