angular.module('underscore', []).factory('_', function () {
    return window._; // assumes underscore has already been loaded on the page
});


angular.module('victorysd_mobile', ['ionic','ionic.contrib.frost', 'victorysd_mobile.directives', 'victorysd_mobile.filters', 'victorysd_mobile.views', 'underscore'])

    .controller('DemoCtrl', ['$scope', '$ionicBackdrop', '$timeout', '$ionicScrollDelegate', '$ionicSlideBoxDelegate', '$ionicFrostedDelegate', function ($scope, $ionicBackdrop, $timeout, $ionicScrollDelegate, $ionicSlideBoxDelegate) {
        "use strict";

        $scope.contentChanged = function () {
            $ionicFrostedDelegate.update();
        };

        $scope.slideBoxDelegate = $ionicSlideBoxDelegate;
        $scope.action = function () {
            $ionicBackdrop.retain();
            $timeout(function () {
                $ionicBackdrop.release();
            }, 2000);
        };


        $scope.doSomething = function () {
            console.log(new Date());
            $ionicSlideBoxDelegate.slide(0);
        };

        $scope.gotoSlide = function (index) {
            $ionicSlideBoxDelegate.slide(index);
        };

    }])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
    });
    })


    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        //$ionicConfigProvider.views.maxCache(0);
        //console.log($ionicConfigProvider.views);
    });
