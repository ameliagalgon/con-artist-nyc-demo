(function(){
    function config($locationProvider, $stateProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    angular
        .module('conArtistNYC', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();
