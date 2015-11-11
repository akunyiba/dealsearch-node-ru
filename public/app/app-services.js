'use strict';

// Services

adApp_ad.factory("services", ['$http','$location','$route','toasty',
    function($http,$location,$route,toasty) {

        var successHandler = function(result){
            $location.path('ad/main/');
        };

        var getAds = function(){
            return $http.get('api/ads');
        };
        var createAd = function (ad) {
            return $http.post('api/ads', ad)
                .then(successHandler)
                .catch(errorHandler);

            function errorHandler(result){
                alert("Error data");
                $location.path('ad/create');
            }
        };
        var getAd= function(adID){
            return $http.get('api/ads/' + adID);
        };

        var getCityOptions = function(){
            return $http.get('api/cities');
        };

        var getCategoryOptions = function(){
            return $http.get('api/categories');
        };

        var updateAd = function (ad) {
            return $http.put('api/ads/' + ad._id, ad )
                .then(successHandler)
                .catch(errorHandler);
            function errorHandler(result){
                alert("Error data");
                $location.path('ad/update/' + ad._id)
            }
        };
        var deleteAd = function (adID) {
            return $http.delete('api/ads/' + adID)
                .then(successHandler)
                .catch(errorHandler);
            function successHandler(result) {
                $route.reload();
            }
            function errorHandler(result){
                alert("Error data");
                $route.reload();
            }
        };
        var showNotification = function(type,message) {
            toasty[type]({msg:message});
        };
        return {
            getAds:getAds,
            createAd:createAd,
            getAd: getAd,
            getCityOptions: getCityOptions,
            getCategoryOptions: getCategoryOptions,
            updateAd: updateAd,
            deleteAd: deleteAd,
            showNotification: showNotification
        }
    }]);