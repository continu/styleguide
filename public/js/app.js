angular.module('styleguide', ['ngRoute', 'styleguideControllers'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/color', {
        templateUrl: 'partials/color.html',
        controller: 'ColorCtrl'
      })
      .when('/typography', {
        templateUrl: 'partials/typography.html',
        controller: 'TypographyCtrl'
      })
      .when('/icons', {
        templateUrl: 'partials/icons.html',
        controller: 'IconsCtrl'
      })
      .when('/buttons', {
        templateUrl: 'partials/buttons.html',
        controller: 'ButtonsCtrl'
      })
      .when('/tables', {
        templateUrl: 'partials/tables.html',
        controller: 'TablesCtrl'
      })
      .when('/forms', {
        templateUrl: 'partials/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/grid', {
        templateUrl: 'partials/grid.html',
        controller: 'GridCtrl'
      })
      .when('/navigation', {
        templateUrl: 'partials/navigation.html',
        controller: 'NavigationCtrl'
      })
      .otherwise({
        redirectTo: '/color'
      });
  }]);