	var myControllers = angular.module("myControllers", []);

myControllers.controller("index", function($scope, $http){
	if ($scope.name===undefined || $scope.name ===""){
		$scope.firstName = "unknown";
		console.log("name empty");
	} else console.log("name not empty?");
	$scope.under50 = false;
	$scope.over49 = false;
	$http({
		method: 'GET',
		url: '/cricket.json'
	}).then(function(response){
	$scope.cricket = response.data;
	});

		$scope.generatePicName = function(name){
		return name.replace(" ","_");
	};

	$scope.$watch('chosenSport', function(value) {
		$http({
			method: 'GET',
			url: '/' + value + '.json'
		}).then(function(response){
			$scope.chosenSportObj = response.data;
		});
	});

	$scope.keys = function (obj) {
		return Object.keys(obj);
	};

	$scope.value = function (obj, index) {
		var key = Object.keys(obj)[index];
		console.log(key);
		console.log(obj.key);
		return obj.key;
	};


});
