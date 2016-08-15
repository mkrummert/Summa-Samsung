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
  .state('inbank_cashDeposit', {
    url: '/inbank_cashDeposit',
    templateUrl: 'templates/inBank_workflow/inbank_cash_deposit.html',
    controller: 'InBank_CashDeposit_Controller'
  })
  .state('inbank_cashDepositComplete', {
    url: '/inbank_cashDepositComplete',
    templateUrl: 'templates/inBank_workflow/inbank_cash_deposit_complete.html',
    controller: 'InBank_CashDepositComplete_Controller'
  })
  .state('inbank_tellerLocation', {
    url: '/inbank_tellerLocation/:selectedID',
    templateUrl: 'templates/inBank_workflow/inbank_teller_location.html',
    controller: 'Inbank_TellerWindow_Controller'
  })
  .state('inbank_login', {
    url: '/inbank_login',
    templateUrl: 'templates/inBank_workflow/inbank_login.html',
    controller: 'Inbank_Login_Controller'
  })
  .state('inbank_receipt', {
    url: '/inbank_receipt',
    templateUrl: 'templates/inBank_workflow/inbank_receipt.html',
    controller: 'Inbank_Receipt_Controller'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/inbank_home');
});


var map;
function drawMap() {
  var domMap = document.getElementById('map');

  if(domMap != null) {
    map = new google.maps.Map(domMap, {
      center: { lat: 40.7831, lng: -74.007369 },
      zoom: 11
    });

    var height = "height:" + (window.innerHeight - 100).toString() + "px";
    document.getElementById('map').setAttribute("style", height);

    // First Marker
    var marker1 = new google.maps.Marker({
      position: { lat: 40.740648, lng: -74.007369 }
    });
    var contentString1 = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<div style="font-size: 1.5em; font-weight: bolder;">837 NYC DEMO</div>' +
      '<div id="bodyContent">' +
      '<p>837 Washington Street<br /> New York, NY 10014</p>' +
      '<p style="color: #26ADD4;">Average Wait Time: <b>9</b> min</p>' +
      '<p><a href="#/intro_selected/1" style="background-color: #26ADD4;border-color: #26ADD4;color: white;text-decoration: none;box-shadow: none;position: relative;display: inline-block;margin: 0;padding: 0 12px;border-width: 1px;border-style: solid;border-radius: 4px;vertical-align: top;text-align: center;text-overflow: ellipsis;font-size: 13px;line-height: 28px;cursor: pointer;">Choose Location</a></p>' +
      '</div></div>';
    var infoWindow1 = new google.maps.InfoWindow({
      content: contentString1
    });
    marker1.addListener('click', function () {
      infoWindow1.open(map, marker1);
    });
    marker1.setMap(map);
    infoWindow1.open(map, marker1);

    // Second Marker
    var marker2 = new google.maps.Marker({
      position: { lat: 40.852659, lng: -74.011027 }
    });
    var contentString2 = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<div style="font-size: 1.5em; font-weight: bolder;">105 NJ DEMO</div>' +
      '<div id="bodyContent">' +
      '<p>105 Challenger Road<br />Ridgefield Park, NJ 07660</p>' +
      '<p style="color: #26ADD4;">Average Wait Time: <b>9</b> min</p>' +
      '<p><a href="#/intro_selected/2" style="background-color: #26ADD4;border-color: #26ADD4;color: white;text-decoration: none;box-shadow: none;position: relative;display: inline-block;margin: 0;padding: 0 12px;border-width: 1px;border-style: solid;border-radius: 4px;vertical-align: top;text-align: center;text-overflow: ellipsis;font-size: 13px;line-height: 28px;cursor: pointer;">Choose Location</a></p>' +
      '</div></div>';
    var infoWindow2 = new google.maps.InfoWindow({
      content: contentString2
    });
    marker2.addListener('click', function () {
      infoWindow2.open(map, marker2);
    });
    marker2.setMap(map);
    infoWindow2.open(map, marker2);
  }
};
function initMap() {
  setTimeout(drawMap, 250);
}
