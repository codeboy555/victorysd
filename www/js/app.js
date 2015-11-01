angular.module('underscore', []).factory('_', function () {
    return window._; // assumes underscore has already been loaded on the page
});


angular.module('victorysd_mobile', ['ionic', 'victorysd_mobile.directives', 'victorysd_mobile.filters', 'victorysd_mobile.views', 'underscore'])

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
        $stateProvider

            .state('profile', {
                url: '/profile', templateUrl: "views/profile.html"
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/profile');
    });
