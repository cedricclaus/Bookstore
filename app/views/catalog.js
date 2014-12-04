'use strict';

app.controller('CatalogCtrl', ['$scope','$http','$location','state',function($scope,$http,$location,state) {


    $http.get("https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i").
        success(function(data, status, headers, config) {
            $scope.books = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    $scope.seeDetails = function(id){

        $location.path("/Book/"+id);
    }


    var init = {
        sortoptions : [{display:"Prix asc",value:false,libelle:'price'},{display:"Prix desc",value:true,libelle:'price'},{display:"Title asc",value:false,libelle:'title'},{display:"Title desc",value:true,libelle:'title'}]
    };
    $scope.state= state('/catalog', init)



}]);