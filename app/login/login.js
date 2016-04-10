'use strict';

angular.module('myApp.login', ['ngRoute','door3.css','angularSoap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl',
            css: 'login/login.css'
        });
    }])

    .factory("testService", ['$soap',function($soap){
        var base_url= 'http://dev.redmondsupport.com:8080/SecurityWebServices/SecurityService';
        return {
            login:function (userName,password){
                return $soap.post(base_url, "login", {userName: userName,password:password});
            }
        }
    }])
    .controller('LoginCtrl', ['$http',function($http){
        this.postForm = function(){

        }
    }]
    .controller('LoginCtrl',function($scope, testService) {
        testService.login(
            $scope.userName, $scope.password).then(function(response){
            $scope.response = response;
        }
        )
    });