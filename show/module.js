(function(angular){
    angular.module("show.app",[])
        .controller("showCtrl",["$scope","$window",function($scope,$window){
            $scope.userinfos=JSON.parse($window.localStorage.getItem("userinfo"))||[];
        }])
})(angular)