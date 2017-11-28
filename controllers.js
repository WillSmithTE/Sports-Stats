	var myControllers = angular.module("myControllers", ["services"]);

myControllers.controller("index", function($scope, $http, DataService){
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
		DataService.DataService(newSport);	
	};

	$scope.keys = function (obj) {
		return Object.keys(obj);
	};

});

angular.module("services", [])
	.factory("DataService", function($http, $q) {
	function DataService(newSport) {
		var deferred = $q.defer();
		$http.get('/'+newSport+'.json')
		.then(function (response) {
			$scope.chosenSportObj = response.data;
			deferred.resolve("response received");
		},
			function(result){
				deferred.reject("fail");
			}
		)
		return deferred.promise;
	};
		return new DataService;
	});
