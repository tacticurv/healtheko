/**
 * Created by tacti on 26-Sep-15.
 */
var app = angular.module('StarterApp', ['ngMaterial']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$http', function($scope, $mdSidenav, $http){
    //$scope.username;
    //$scope.password;
    //var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
    //var CLIENT_ID = "koC4UquWk0AqnjnnL2AZ5ndQMU6wljno"; // Retrieve this key from the developer portal
    //var CLIENT_SECRET = "q6uDbzxuZo7ZgSNB"; // Retrieve this key also from the developer portal
    //var BASE_URL = "https://gateway.api.pcftest.com:9004"; // HTTPS url
    //var BASE_URL_GET_TOKEN = BASE_URL + "/v1/oauth2/token?grant_type=client_credentials";
    //var BASE_URL_LOGIN = BASE_URL + "/v1/oauth2/authorize/login";
    //var BASE_URL_LOGOUT = BASE_URL + "/v1/oauth2/authorize/logout";
    //$scope.submit = function() {
    //    var authenticateString = 'Basic ' + Base64.encode(CLIENT_ID + ':' + CLIENT_SECRET);
    //    $http({
    //        url: BASE_URL_GET_TOKEN,
    //        method: "POST",
    //        headers: {'Authorization':authenticateString }
    //    }).success(function (data, status, headers, config) {
    //        accessToken = data.access_token;
    //        $scope.login($scope.username,$scope.password,accessToken);
    //        console.log(accessToken);
    //    }).error(function (data, status, headers, config) {
    //        console.log(data);
    //        $rootScope.$broadcast("Failed login");
    //    });
    //};
    //$scope.login = function(userName,password,accessToken) {
    //    $http({
    //        url: BASE_URL_LOGIN,
    //        method: "POST",
    //        data: JSON.stringify({ username:userName, password:password }),
    //        headers: {'Authorization':'Bearer ' + accessToken}
    //    }).success(function (data, status, headers, config) {
    //        console.log("I am logged in");
    //        patient_id = data.user.id;
    //        organization_id = data.user.org;
    //        //$rootScope.$broadcast("Successful login");
    //    }).error(function (data, status, headers, config) {
    //        console.log(data);
    //        $rootScope.$broadcast("Failed login");
    //    });
    //};
}]);