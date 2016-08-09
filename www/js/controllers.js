angular.module('starter.controllers', [])
.controller('CashDeposit_Controller', function($scope, $state, AccountService, AuthenticationService) {
  // Properties to be later used
  $scope.enteredAmount = '';
  $scope.selectedTestAccount = null;
  $scope.testAccounts = [];

  // Properties from services
  $scope.myAccounts = AccountService.all();
  $scope.user = AuthenticationService.get();

  // Methods
  $scope.reformat = function(){
    if(this.enteredAmount.charAt(0) == '$') {
      this.enteredAmount = this.enteredAmount.substr(1, this.enteredAmount.length - 1);
    }

    this.enteredAmount = Math.round(this.enteredAmount * 100) / 100;
    this.enteredAmount = '$' + this.enteredAmount;
  };
  $scope.Submit = function() {
    setTimeout(function() {
      $state.go('tellerLocation', { selectedID: 1 });
    }, 5000);
  };
})
.controller('TellerWindow_Controller', function($scope, $stateParams, $state, TellerService, AuthenticationService) {
  $scope.user = AuthenticationService.get();
  $scope.account = TellerService.get($stateParams.selectedID);

  setTimeout(function() {
    $state.go('login');
  }, 5000);
})
.controller('Login_Controller', function($scope, $state, LoginService, AuthenticationService) {
  $scope.user = AuthenticationService.get();
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
})

// Directives
.directive('onlyNum', function() {
  return function(scope, element, attrs) {

    var keyCode = [8, 9, 37, 39, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 190];
    element.bind("keydown", function(event) {
      //console.log($.inArray(event.which,keyCode));
      if ($.inArray(event.which, keyCode) === -1) {
        scope.$apply(function() {
          scope.$eval(attrs.onlyNum);
          event.preventDefault();
        });
        event.preventDefault();
      }
    });
  };
});
