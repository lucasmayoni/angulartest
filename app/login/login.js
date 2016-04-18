'use strict';

angular.module('myApp.login', ['ngRoute','door3.css','angularSoap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl',
            css: 'login/login.css'
        });
    }])
    .controller('LoginCtrl',function($scope,authentication){
        $scope.users = [{firstName:'Jane',lastName:'Doe',age:29},{
                        firstName:'John',lastName:'Doe',age:32}];
        $scope.login = function(username, password){
            if(username==='admin' && password==='1234'){
                authentication.isAuthenticated = true;
                $scope.loginError = "SUCCESS";
            }else{
                $scope.loginError = "FAILED";
            }
        }
    })
    .factory('authentication',function(){
        //Aqui se podria invocar on angular-soap el ws de login, por ejemplo
    return {
        isAuthenticated: false,
        user:null
    }
});