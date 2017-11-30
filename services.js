var myServices = angular.module("services", []);
	myServices.factory("data", ["$http", function($http) {
		var newSport = 'soccer';
		var promise = $http.get('/' + newSport + '.json');
		console.log("got to services");
		promise.then(function (response) {
			console.log("retrieved data for " +newSport + " successfully");
			return response.data;
		},
			function(result){
				console.log("fail to get data for " + newSport);
			}
		);
		return promise;
	}]);



