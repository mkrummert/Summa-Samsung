angular.module('starter.services', [])
.factory('Locations', function() {
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
  })
  .factory('LoginService', function($q) {
    return {
      getLoginPattern: function() {
        return window.localStorage.getItem('login_pattern');
      },
      setLoginPattern: function(pattern) {
        window.localStorage.setItem('login_pattern', pattern);
      },
      checkLoginPattern: function(pattern) {
        var deferred = $q.defer();
        var promise = deferred.promise;

        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }

        if (pattern == this.getLoginPattern()) {
          deferred.resolve();
        } else {
          deferred.reject();
        }

        return promise;
      }
    }
  });
