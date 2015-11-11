'use strict';

// Module

$.material.init(); // Bootstrap Material Design

var adApp = angular.module('adApp', [
    'ngRoute',
    'angular-toasty',
    'adApp.ad'
]);

var adApp_ad = angular.module('adApp.ad', ['ngRoute', 'angular-toasty']);

adApp_ad.config(['toastyConfigProvider', function(toastyConfigProvider) {
    toastyConfigProvider.setConfig({
        sound: false,
        theme: "material",
        timeout: 5000
    });
}]);

