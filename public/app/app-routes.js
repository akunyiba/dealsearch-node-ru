'use strict';

// Routes

adApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/ad/main'});
}]);

adApp_ad.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/ad/main', {
            templateUrl: 'views/ad/list.html',
            controller: 'listController'
        })
        .when('/ad/create', {
            templateUrl: 'views/ad/create.html',
            controller: 'createController',
            resolve: {
                ads: function(services, $route){
                    return services.getAds();
                }
            }
        })
        .when('/ad/update/:adsId', {
            templateUrl: 'views/ad/update.html',
            controller: 'updateController',
            resolve: {
                ad: function(services, $route){
                    var adsId = $route.current.params.adsId;
                    return services.getAd(adsId);
                }
            }
        })
        .when('/ad/delete/:adsId', {
            templateUrl: 'views/ad/main.html',
            controller: 'deleteController'
        })
        .otherwise({
            redirectTo: '/ad/main'
        });
}]);