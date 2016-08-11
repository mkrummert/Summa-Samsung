angular.module('starter.controllers', [])
  .run(function($rootScope, $state, $ionicHistory) {
    $rootScope.back = function() {
      $ionicHistory.goBack();
    };
    $rootScope.goHome = function() {
      $state.go('Intro_Home');
    };
  })


  //////////////////////////////////////////////
  //             Intro Workflow               //
  //////////////////////////////////////////////
  .controller('Intro_Home_Controller', function($scope, AuthenticationService) {
    $scope.user = AuthenticationService.get()[1];
  })
  .controller('Intro_Map_Controller', function($scope, AuthenticationService) {
    $scope.user = AuthenticationService.get()[1];

    setTimeout(function() {
      var temp = document.getElementById('map').innerHTML;

      if(document.getElementById('map').innerHTML == '') {
        drawMap();
      }
    }, 1500);
  })
  .controller('Intro_Selected_Controller', function($scope, $stateParams, Locations, AuthenticationService) {
    $scope.location = Locations.get($stateParams.selectedID);
    $scope.user = AuthenticationService.get()[1];
  })
  .controller('Intro_DateAndtime_Controller', function($scope, $stateParams, ionicDatePicker, AuthenticationService) {
    var weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var today = new Date();
    $scope.user = AuthenticationService.get()[1];
    $scope.date = {};
    $scope.date.day_of_week = weekday[today.getDay()]
    $scope.date.month = monthNames[today.getMonth()];;
    $scope.date.day = today.getDate();
    $scope.date.year = today.getYear() + 1900;

    var ipObj1 = {
      callback: function (val) {  //Mandatory
        var newDate = new Date(val);

        $scope.date.day_of_week = weekday[newDate.getDay()];
        $scope.date.month = monthNames[newDate.getMonth()];
        $scope.date.day = newDate.getDate();
        $scope.date.year = newDate.getYear() + 1900;
      },
      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal '      //Optional
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };
  })
  .controller('Intro_AppointmentConfirmed_Controller', function($scope, $state, AuthenticationService, Locations, AppointmentService) {
    $scope.user = AuthenticationService.get()[1];
    $scope.location = Locations.get(2);
    $scope.appointment = AppointmentService.get();

    setTimeout(function() {
      $state.go('intro_specialistReady', { selectedID: 1 });
    }, 5000);
  })
  .controller('Intro_SpecialistReady_Controller', function($scope, $stateParams, AuthenticationService, SpecialistService) {
    $scope.user = AuthenticationService.get()[1];
    $scope.specialist = SpecialistService.get($stateParams.selectedID);
  })


  //////////////////////////////////////////////
  //            In Bank Workflow              //
  //////////////////////////////////////////////
  .controller('InBank_Home_Controller', function($scope, AuthenticationService) {
    $scope.user = AuthenticationService.get()[0];
  })

  .controller('CashDepositComplete_Controller', function($scope, $state, AuthenticationService) {
    $scope.user = AuthenticationService.get();
  })
.controller('CashDeposit_Controller', function($scope, $state, AccountService, AuthenticationService) {
  // Properties to be later used
  $scope.canShowSubmit = false;
  $scope.enteredAmount = '';
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
    if(this.enteredAmount.toString().indexOf('.') == -1) {
      this.enteredAmount = this.enteredAmount + ".00";
    }

    this.enteredAmount = '$' + this.enteredAmount;
  };
  $scope.AccountSelected = function(account) {
    for(var i = 0; i < this.myAccounts.length; i++){
      if(this.myAccounts[i].is_selected) {
        this.myAccounts[i].is_selected = false;
      }
    }

    if(this.enteredAmount != '') {
      $scope.canShowSubmit = true;
    }

    account.is_selected = !account.is_selected;
  };
  $scope.Submit = function() {
    $state.go('cashDepositComplete', { selectedID: 1 });
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
