
(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.menu = "";
  $scope.msg="";
  var errMsg="Please enter data first";
  $scope.sayHello = function () {
  	if($scope.menu.length === 0 || typeof $scope.menu === 'undefined' ===""){
  		$scope.msg=errMsg;
  		
  	}
  	else{
	  	var array = $scope.menu.split(',');
	  	if( array.length > 3 ){$scope.msg=  "Too much! ";}
	  	else{
	    $scope.msg = "Enjoy";
			}
		
        }
        return $scope.msg;
  };
});

})();