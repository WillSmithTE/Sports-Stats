	var myControllers = angular.module("myControllers", []);

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
		DataService.DataService();

	};

//	$scope.$watch('chosenSport', function(value) {
//		$http({
//			method: 'GET',
//			url: '/' + value + '.json'
//		}).then(function(response){
//			$scope.chosenSportObj = response.data;
//		});
//	});

	$scope.keys = function (obj) {
		return Object.keys(obj);
	};

});

myControllers.factory("DataService", function($http, $q) {
	function DataService() {
		var self = this;
		self.info = null;

		self.getInfo= function() {
			var deferred = $q.defer();
			$http.get('/soccer.json')
			.then(function(response){
				self.info = response.data;
				deferred.resolve("response received");
			},
				function(result){
					deferred.reject("fail");
				});
		
		return deferred.promise;
		};
	}
	return new DataService();
});

