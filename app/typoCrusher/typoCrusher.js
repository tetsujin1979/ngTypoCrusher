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
    otherwise({
        redirectTo: '/'
    });
}]);

typoCrusherApp.controller('TypoCrusherCtrl', ['$scope', '$http', function($scope, $http) {

    'use strict';

    var families = [];
    $scope.spaces = [];

    var API_KEY = 'AIzaSyAcmOu-IVYkEHWZjXPsENgfVUN4Rpg9mEM';

    $scope.getFonts = function() {

        var config = {
            url: 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + API_KEY,
            method: 'GET'
        }
        $http(config).success(function(data) {

            var availableFonts = data.items;
            for (var counter = 0; counter < 15; counter++) {

                var font = availableFonts.splice(Math.floor(Math.random() * availableFonts.length), 1);
                families.push(font[0].family);

            }
            WebFont.load({
                google: {
                    families: families
                }
            });

        }).
        error(function(data, status) {

            console.log(data || "Request failed");
            console.log('get fonts failed. Status: ' + status);

        });

    };

    function shuffle(array) {

        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    $scope.updateDisplay = function() {

        var randomFamilies = shuffle(families);
        $scope.spaces = [];
        var sentences = $scope.pasteSpace.split('.');
        //if there are no sentences, use the entire text from pasteSpace
        if (sentences.length === 0)
            sentences.push($scope.pasteSpace);

        sentences.forEach(function(item) {

            $scope.spaces.push('<p style="font-family:' + randomFamilies[Math.floor(Math.random() * randomFamilies.length)] + ';">' + item + '</p>');

        });

    };

}])
.filter('trustedHTML', ['$sce', function($sce) {
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);