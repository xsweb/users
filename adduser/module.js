(function (angular) {
    angular.module("adduser.app", [])
        .controller("adduserCtrl", ["$scope", "$window", function ($scope, $window) {
            $scope.username = "";
            $scope.password = "";
            $scope.email = "";
            $scope.tel = "";
            $scope.website = "";
            $scope.identityCard = "";
            $scope.birthday = "";
            $scope.usernameMsg = "";
            $scope.passwordMsg = "";
            $scope.emailMsg = "";
            $scope.telMsg = "";
            $scope.websiteMsg = "";
            $scope.identityCardMsg = "";
            $scope.birthdayMsg = "";
            $scope.subMitMsg = "";
            $scope.userinfos=JSON.parse($window.localStorage.getItem("userinfo"))||[];
            $scope.dssdsdds = function () {
                if($scope.userinfos.some(function (e) {
                        return e.username === $scope.username;
                    })) $scope.usernameMsg = "用户名被占用!";
                else if (!/^[a-zA-Z0-9_]{3,16}$/.test($scope.username) || !$scope.username) $scope.usernameMsg = "用户名格式不正确!";
                else $scope.usernameMsg = "";
                if (!/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test($scope.password) || !$scope.password) $scope.passwordMsg = "密码必须包含字母数字，特殊字符且长度在六位以上";
                else $scope.passwordMsg = "";
                if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($scope.email)) $scope.emailMsg = "请填写有效邮箱";
                else $scope.emailMsg = "";
                if (!/^1(3|4|5|7|8)\d{9}$/.test($scope.tel)) $scope.telMsg = "请输入正确手机号码!";
                else $scope.telMsg = "";
                if (!/^((https|http|ftp|rtsp|mms)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test($scope.website)) $scope.websiteMsg = "请输入有效url";
                else $scope.websiteMsg = "";
                if (!/^\d{15}|\d{18}$/.test($scope.identityCard)) $scope.identityCardMsg = "请输入有效身份证！";
                else $scope.identityCardMsg = "";
                if (!/^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/.test($scope.birthday)) $scope.birthdayMsg = "请输入正确生日";
                else $scope.birthdayMsg = "";
                $scope.msgArr = [$scope.usernameMsg, $scope.passwordMsg, $scope.emailMsg, $scope.telMsg, $scope.websiteMsg, $scope.identityCardMsg, $scope.birthdayMsg, $scope.subMitMsg];
                if ($scope.msgArr.every(function (e) {
                        return e === ""
                    })) $scope.subMitMsg = "成功",
                    $scope.userinfos.push({
                        username: $scope.username,
                        password: $scope.password,
                        email: $scope.email,
                        tel: $scope.tel,
                        website: $scope.website,
                        identityCard: $scope.identityCard,
                        birthday: $scope.birthday
                    }),
                    $window.localStorage.setItem('userinfo', JSON.stringify($scope.userinfos)),
                    $scope.username ='',
                    $scope.password = "",
                    $scope.email = "",
                    $scope.tel = "",
                    $scope.website = "",
                    $scope.identityCard="",
                    $scope.birthday = "";
                else $scope.subMitMsg = "";
            }
        }])
})(angular)