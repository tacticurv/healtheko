/**
 * Created by tacti on 26-Sep-15.
 */

var app = angular.module('StarterApp', ['ngMaterial']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

}]);

var data = [{
    value: 30,
    color: "#F7464A"
}, {
    value: 50,
    color: "#E2EAE9"
}, {
    value: 100,
    color: "#D4CCC5"
}, {
    value: 40,
    color: "#949FB1"
}, {
    value: 120,
    color: "#4D5360"
}

]

var options = {
    animation: false
};

//Get the context of the canvas element we want to select
var c = $('#myChart');
var ct = c.get(0).getContext('2d');
var ctx = document.getElementById("myChart").getContext("2d");
/*************************************************************************/

myNewChart = new Chart(ct).Doughnut(data, options);



