'use strict';



app.controller('BookCtrl', ['$scope','$http','$routeParams','$rootScope','myTitle' ,function($scope,$http,$routeParams,$rootScope,myTitle) {

    $scope.bookId = $routeParams.bookId;
    $rootScope.title = myTitle;

    var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/'+$scope.bookId+'?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
    $http.get(url).
        success(function(data, status, headers, config) {
            $scope.book = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


}]);