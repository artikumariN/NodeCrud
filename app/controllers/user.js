var app = angular.module('app', []);
app.value("name","Arti");
app.controller('userController', function($scope,name) {
    $scope.myservices = name;
});
