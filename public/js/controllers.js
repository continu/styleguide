var styleguideControllers = angular.module('styleguideControllers', []);

styleguideControllers.controller('ColorCtrl', ['$scope', function($scope, $http) {
  $('.nav-item').removeClass('selected');
  $('.nav-item.color').addClass('selected');
}]);

styleguideControllers.controller('TypographyCtrl', ['$scope', function($scope, $http) {
  $('.nav-item').removeClass('selected');
  $('.nav-item.typography').addClass('selected');
}]);

styleguideControllers.controller('IconsCtrl', ['$scope', function($scope, $http) {
  $('.nav-item').removeClass('selected');
  $('.nav-item.icons').addClass('selected');
}]);

styleguideControllers.controller('ButtonsCtrl', ['$scope', function($scope, $http) {
  $('.nav-item').removeClass('selected');
  $('.nav-item.buttons').addClass('selected');
}]);