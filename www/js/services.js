angular.module('starter.services', [])
.factory('AccountService', function() {
  var accounts = [{
    id:0,
    account_number: 783316107,
    last_name: 'Berto',
    amount: '$7,242.00'
  }];

  return {
    all: function() {
      return accounts;
    }
  }
})
.factory('AuthenticationService', function() {
  var user = {
    first_name: 'John',
    last_name: 'Berto',
    token: '123466i798712439812'
  };

  return {
    get: function() {
      return user;
    }
  }
})
.factory('TellerService', function() {
  var tellers = [{
    id: 0,
    first_name: 'Tina',
    window_number: 4
  },{
    id: 1,
    first_name: 'Matt',
    window_number: 2
  },{
    id: 2,
    first_name: 'John',
    window_number: 1
  },{
    id: 3,
    first_name: 'Mike',
    window_number: 3
  }];

  return {
    all: function() {
      return tellers;
    },
    get: function (tellerId) {
      {
        for (var i = 0; i < tellers.length; i++) {
          if (tellers[i].id === parseInt(tellerId)) {
            return tellers[i];
          }
        }
        return null;
      }
    }
  }
})
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
