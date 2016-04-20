'use strict';

angular.module('myApp.view2', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'Users',function($scope,Users) {
  $scope.users = Users.query();

}]).factory('Users',['$resource',
    function($resource){
      return $resource('http://localhost:8081/listUsers',{},{
        query:{method:'GET',params:{},isArray:false}
      })
    }
])
;