'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('BookStore', [
  'ngRoute', 'ngSanitize'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/Catalog'});

      $routeProvider.when('/Catalog', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl'
      });
      $routeProvider.when('/Book/:bookId', {
        templateUrl: 'views/book.html',
        controller: 'BookCtrl',
        resolve:{myTitle:function(){return 'Books'}}

      });
        $routeProvider.when('/cart', {
            templateUrl: 'views/cart.html',
            controller: 'CartCtrl'


        });

}]).controller('globalCTRL',function($scope,$location,cart){
        $scope.addArticle = function(book){
            cart.add(book);
            $location.path('/cart');
        }



    });
