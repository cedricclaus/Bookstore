/**
 * Created by ccc on 4/12/2014.
 */


app.controller('CartCtrl', ['$scope','cart' ,function($scope,cart) {



    $scope.cartService = cart;



    $scope.isBig = function(line){
        if(((line.qty * line.pu) > 1000)){

            return true;
        }
        return false;
    };






}]);