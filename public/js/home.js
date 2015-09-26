/**
 * Created by tacti on 26-Sep-15.
 */

//var app = angular.module('StarterApp', ['ngMaterial']).config(function($mdThemingProvider) {
//    $mdThemingProvider.theme('default')
//        .primaryPalette('light-blue')
//});
//
//app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
//
//}]);

setTimeout(function(){
    var data = [{
        value: 80,
        color: "#ff4081"
    }, {
        value: 20,
        color: "#F2F2F2"
    }
    ]

    var options = {
        animation: false,
        segmentStrokeWidth : 20,
    };

//Get the context of the canvas element we want to select
    var c = $('#myChart');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("myChart").getContext("2d");
    /*************************************************************************/

    myNewChart = new Chart(ct).Doughnut(data, options);

}, 1000);




