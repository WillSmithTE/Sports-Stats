var myControllers = angular.module("myControllers", ["services"]);

myControllers.controller("index", ["$scope","$http","data", function($scope, $http, data){
	if ($scope.name===undefined || $scope.name ===""){
		$scope.firstName = "unknown";
	}
	$scope.under50 = false;
	$scope.over49 = false;
	
	$scope.generatePicName = function(name){
		if (name){
		return name.replace(" ","_");
		}
	};

	$scope.newChosenSport = function(newSport){	
		$scope.chosenSportObj = data;
	};


	$scope.keys = function (obj) {
		return Object.keys(obj);
	};

}]);


