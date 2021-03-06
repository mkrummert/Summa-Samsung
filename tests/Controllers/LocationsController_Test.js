describe('LocationsController_Test', function() {
  var location;

  beforeEach(module('starter.controllers'));
  beforeEach(inject(function($rootScope, $controller) {
    stateParams = new Object();
    stateParams.selectedID = 1;
    scope = $rootScope.$new();

    function LocalService() {
      var locations = [{
        id: 0,
        latitude: 40.4406,
        longitude: 79.9959,
        distance_from_me: 1.35,
        display_name: 'First Location',
        phone_number: '412-123-1234',
        wait_time: '2 minutes'
      }, {
        id: 1,
        latitude: 40.4567,
        longitude: 79.7378,
        distance_from_me: 2.68,
        display_name: 'Second Location',
        phone_number: '412-123-1234',
        wait_time: '4 minutes'
      }, {
        id: 2,
        latitude: 40.4567,
        longitude: 79.7378,
        distance_from_me: 3.16,
        display_name: 'Third Location',
        phone_number: '412-123-1234',
        wait_time: '5 minutes'
      }, {
        id: 3,
        latitude: 40.5928,
        longitude: 79.8686,
        distance_from_me: 3.34,
        display_name: 'Fourth Location',
        phone_number: '412-123-1234',
        wait_time: '1 minute'
      }];

      return {
        all: function () {
          return locations;
        },
        get: function (locationId) {
          {
            for (var i = 0; i < locations.length; i++) {
              if (locations[i].id === parseInt(locationId)) {
                return locations[i];
              }
            }
            return null;
          }
        }
      }
    };

    $controller('SelectedCtrl', {$scope: scope, $stateParams: stateParams, Locations: new LocalService() });
  }));


  describe('LocalCtrl', function() {
    it('Should have a count of more than 1', function() {
      expect(scope.location.length > 1);
    });
  });
});
