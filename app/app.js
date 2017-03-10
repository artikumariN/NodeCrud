(function() {
 'use strict';

 angular.module('app', [
 "ui.router"
 ])
 .config(function($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise("/");

 $stateProvider.state("users", {
 url: "/",
 templateUrl: "./views/index.html",
 controller: "userController"
 }).state("create", {
 url: "/create",
 templateUrl: "./views/create.html",
 controller: "userController"
 }).state("login", {
 url: "/login",
 templateUrl: "./views/user/login.html",
 controller: "userController"
 }).state("edit", {
 url: "/edit/:id",
 templateUrl: "./views/create.html",
 controller: "userController"
 }).state("details", {
 url: "/details/:id",
 templateUrl: "./views/details.html",
 controller: "userController"
 });
 })
 .constant("globalConfig", {
 apiAddress: 'http://localhost:3000/api'
 });
})();
