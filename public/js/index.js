/**
 * Created by tacti on 26-Sep-15.
 */
var app = angular.module('StarterApp', ['ngMaterial']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

}]);