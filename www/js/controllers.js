angular.module('starter.controllers', [])

.controller('Login_Controller', function($scope, $state, LoginService) {
  $scope.log_pattern = LoginService.getLoginPattern();

  var lock = new PatternLock('#lockPattern', {
    onDraw:function(pattern){
      if ($scope.log_pattern) {
        LoginService.checkLoginPattern(pattern).success(function(data) {
          lock.reset();
          $state.go('barcode');
        }).error(function(data) {
          lock.error();
        });
      } else {
        LoginService.setLoginPattern(pattern);
        lock.reset();
        $scope.log_pattern = LoginService.getLoginPattern();
        $scope.$apply();
      }
    }
  });
})
.controller('LocalCtrl', function($scope, Locations) {
  $scope.locations = Locations.all();
})
.controller('MapCtrl', function($scope) {})
.controller('SelectedCtrl', function($scope, $stateParams, Locations) {
  $scope.location = Locations.get($stateParams.selectedID);
});
