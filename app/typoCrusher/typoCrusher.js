'use strict';

// Declare app level module which depends on views, and components
var typoCrusherApp = angular.module('typoCrusherApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/', {
		templateUrl: 'typoCrusher/typoCrusher.html',
		controller: 'TypoCrusherCtrl'
	}).
	otherwise({redirectTo: '/'});
}]);

typoCrusherApp.controller('TypoCrusherCtrl', ['$scope', '$http', function($scope, $http) {

	'use strict';

	$scope.fonts = '';

	var API_KEY = '';
	$scope.getFonts = function(){

		var config = {
			url: 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + API_KEY,
			method: 'GET'
		}
		$http(config).success(function(data) {

			console.log(data);
			
        }).
        error(function(data, status) {

            console.log(data || "Request failed");
            console.log('get fonts failed. Status: ' + status);

        });

	};

}]);