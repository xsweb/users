(function(angular){
    angular.module("revamp.app",[])
        .controller("revampCtrl",["$scope","$window",function($scope,$window){
            $scope.userinfos=JSON.parse($window.localStorage.getItem("userinfo"))||[];
            $scope.msg="";
            $scope.msg1="";
            $scope.revamp=function(u){
                if(!/^[a-zA-Z0-9_]{3,16}$/.test(u.password)){
                    $scope.msg1="";
                    return $scope.msg="密码必须包含字母数字，特殊字符且长度在六位以上";
                }
                if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(u.email)){
                    $scope.msg1="";
                    return $scope.msg="请填写有效邮箱";
                }
                if(!/^1(3|4|5|7|8)\d{9}$/.test(u.tel)){
                    $scope.msg1="";
                    return $scope.msg="请输入正确手机号码";
                }
                if(!/^((https|http|ftp|rtsp|mms)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(u.website)){
                    $scope.msg1="";
                    return $scope.msg="请输入有效url";
                }
                if(!/^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/.test(u.birthday)){
                    $scope.msg1="";
                    return $scope.msg="请输入正确生日";
                }
                $scope.userinfos.forEach(function(e,i){
                    if(e.username===u.username){
                        $scope.userinfos[i]=u;
                    }
                });
                $window.localStorage.setItem('userinfo', JSON.stringify($scope.userinfos)),
                $scope.msg='';
                $scope.msg1="成功！"
            }


        }])
})(angular)