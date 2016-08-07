angular.module('starter.controllers', [])

.controller('LocalCtrl', function($scope, Locations) {
  $scope.locations = Locations.all();
})
.controller('MapCtrl', function($scope) {})
.controller('SelectedCtrl', function($scope, $stateParams, Locations) {
  $scope.location = Locations.get($stateParams.selectedID);
});
