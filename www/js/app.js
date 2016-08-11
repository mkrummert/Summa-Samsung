// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-datepicker', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Finding a bank workflow
  .state('Intro_Home', {
    url: '/intro_home',
    templateUrl: 'templates/intro_workflow/intro-home.html',
    controller: 'Intro_Home_Controller'
  })
  .state('intro_map', {
    url: '/intro_map',
    templateUrl: 'templates/intro_workflow/intro-map.html',
    controller: 'Intro_Map_Controller'
  })
  .state('intro_selected', {
    url: '/intro_selected/:selectedID',
    templateUrl: 'templates/intro_workflow/intro-selected.html',
    controller: 'Intro_Selected_Controller'
  })
  .state('intro_dateAndTime', {
    url: '/intro_dateAndTime',
    templateUrl: 'templates/intro_workflow/intro-dateAndTime.html',
    controller: 'Intro_DateAndtime_Controller'
  })
  .state('intro_appointmentConfirmed', {
    url: '/intro_appointmentConfirmed',
    templateUrl: 'templates/intro_workflow/intro-appointmentConfirmed.html',
    controller: 'Intro_AppointmentConfirmed_Controller'
  })
  .state('intro_specialistReady', {
    url: '/intro_specialistReady/:selectedID',
    templateUrl: 'templates/intro_workflow/intro-yourSpecialistIsReady.html',
    controller: 'Intro_SpecialistReady_Controller'
  })

  //In Bank Workflow
  .state('inbank_home', {
    url: '/inbank_home',
    templateUrl: 'templates/inBank_workflow/inbank-home.html',
    controller: 'InBank_Home_Controller'
  })

  .state('cashDeposit', {
    url: '/cashDeposit',
    templateUrl: 'templates/cash_deposit.html',
    controller: 'CashDeposit_Controller'
  })
  .state('cashDepositComplete', {
    url: '/cashDepositComplete',
    templateUrl: 'templates/cash_deposit_complete.html',
    controller: 'CashDepositComplete_Controller'
  })
  .state('tellerLocation', {
    url: '/tellerLocation/:selectedID',
    templateUrl: 'templates/teller_location.html',
    controller: 'TellerWindow_Controller'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'Login_Controller'
  })
  .state('barcode', {
    url: '/barcode',
    templateUrl: 'templates/barcode.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/Intro_Home');
});


var map;
function drawMap() {
  var domMap = document.getElementById('map');

  if(domMap != null) {
    map = new google.maps.Map(domMap, {
      center: {lat: 40.4406, lng: -79.9959},
      zoom: 15
    });

    var height = "height:" + (window.innerHeight - 100).toString() + "px";
    document.getElementById('map').setAttribute("style", height);

    // First Marker
    var marker1 = new google.maps.Marker({
      position: {lat: 40.4406, lng: -79.9959},
      title: "Hello World!"
    });
    var contentString1 = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<div style="font-size: 1.5em; font-weight: bolder;">23RD ST AND 6TH AVE</div>' +
      '<div id="bodyContent">' +
      '<p>201 6th Ave<br /> Pittsburgh, PA 15219</p>' +
      '<p><a style="text-decoration: none;" href="#/intro_selected/1">Choose Location >></a></p>' +
      '</div></div>';
    var infoWindow1 = new google.maps.InfoWindow({
      content: contentString1
    });
    marker1.addListener('click', function () {
      infoWindow1.open(map, marker1);
    });
    marker1.setMap(map);


    // Second Marker
    var marker2 = new google.maps.Marker({
      position: {lat: 40.440595, lng: -79.996599},
      title: "Hello World!"
    });
    var contentString2 = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<div style="font-size: 1.5em; font-weight: bolder;">FLATIRON</div>' +
      '<div id="bodyContent">' +
      '<p>175 5th Ave<br /> Pittsburgh, PA 15219</p>' +
      '<p><a style="text-decoration: none;" href="#/intro_selected/2">Choose Location >></a></p>' +
      '</div></div>';
    var infoWindow2 = new google.maps.InfoWindow({
      content: contentString2
    });
    marker2.addListener('click', function () {
      infoWindow2.open(map, marker2);
    });
    marker2.setMap(map);
  }
};
function initMap() {
  setTimeout(drawMap, 250);
}
