(function () {
    'use strict';

    angular.module('myApp', ['ui.router'])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '',
                    templateUrl: 'scripts/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'scripts/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'login'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'scripts/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'about'
                });
        }]);
})();
(function () {

    'use strict';

    angular.module('myApp')
        .controller('AboutController', function () {
            var vm = this;
            vm.name = 'About';
        });
})();
(function () {
    'use strict';

    angular.module('myApp')
        .controller('HomeController', function () {
            var vm = this;
            vm.name = 'Home';
        });
})();
(function () {
    'use strict';

    angular.module('myApp')
        .controller('LoginController', function () {
            var vm = this;
            vm.name = 'Login';
        });
})();