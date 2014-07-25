/**
 * Created by amitraj on 11/7/14.
 */

var myApp = angular.module('myApp', []);

//myApp.controller('userController',function($scope,$window){
//    $scope.tasks = [];
//$scope.addTaskModal = function ()
//{
//    $http.get('/user',function(err,re){
//
//})
//    jQuery('#wrapper').modal({
//        keyboard: true
//    });
//}
//});
//myApp.factory('dataService',function(){
//    var tasks=[];
//    return{
//        myData : tasks
//    };
//});


myApp.controller('userDetail', ['$scope', '$http', function ($scope, $http) {
    var myUrl = "http://localhost:8585/user";
    $http.get(myUrl).success(function (data) {
        $scope.tasks = data;

    })
}]
);


myApp.controller('userIdDelete', ['$scope', '$http', function ($scope, $http) {
    $scope.myDelete = function(){
        console.log($scope.tasks);
        var myUrl = "http://localhost:8585/user";
        $http.delete(myUrl+'/'+$scope.UserId).success(function (data) {

            console.log("You have deleted user " + $scope.tasks.UserId);
        })
    }


}]
);

myApp.controller('adminDetail', ['$scope', '$http', function ($scope, $http) {
    $scope.tasks = [];

    var myUrl = "http://localhost:8585/admin";
    $http.get(myUrl).success(function (data) {
        $scope.tasks = data;

    })
}]
);
