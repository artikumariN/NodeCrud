var routerApp = angular.module('myApp', ['ngResource','ngRoute','ui.router']);

 routerApp.config(function($routeProvider, $urlRouterProvider) {

     //$urlRouterProvider.otherwise('/');

     $routeProvider

         // HOME STATES AND NESTED VIEWS ========================================
         .when('/', {
             templateUrl: 'views/form.html',
             controller:'controllers/user.js',
         });
       });

       routerApp.controller('myCtrl', function($scope) {
           $scope.firstname = "John";
           $scope.lastname = "Doe";
       });
