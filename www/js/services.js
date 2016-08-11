angular.module('starter.services', [])
.factory('AccountService', function() {
  var accounts = [{
    id:0,
    account_number: 783316107,
    is_selected: false,
    last_name: 'Berto',
    amount: '$7,242.00'
  }, {
    id:1,
    account_number: 345732450,
    is_selected: false,
    last_name: 'Berto',
    amount: '$7,242.00'
  }];

  return {
    all: function() {
      return accounts;
    }
  }
})
.factory('AppointmentService', function() {
  var appointment = {
    day_of_week: 'Monday',
    month: 'August',
    day: 8,
    time: '12:00 PM'
  };

  return {
    get: function() {
      return appointment;
    }
  }
})
.factory('AuthenticationService', function() {
  var user = [{
    first_name: 'John',
    last_name: 'Berto',
    token: '123466i798712439812'
  },{
    first_name: 'Sam',
    last_name: 'Luisa',
    token: '123466i798712439812'
  }];

  return {
    get: function() {
      return user;
    }
  }
})
  .factory('AuthenticationService', function() {
    var user = [{
      first_name: 'John',
      last_name: 'Berto',
      token: '123466i798712439812'
    },{
      first_name: 'Sam',
      last_name: 'Luisa',
      token: '123466i798712439812'
    }];

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
      id: 1,
      latitude: 40.778682,
      longitude: -73.982389,
      distance_from_me: 1.35,
      display_name: 'BANK OF AMERICA',
      phone_number: '412-123-1234',
      wait_time: '2 minutes',
      address_name: '2077 Broadway',
      address_city: 'New York',
      address_state: 'NY',
      address_zip: 10023
    }, {
      id: 2,
      latitude: 40.761568,
      longitude: -73.966618,
      distance_from_me: 2.68,
      display_name: 'BANK OF AMERICA',
      phone_number: '412-123-1234',
      wait_time: '4 minutes',
      address_name: '988 3rd Ave',
      address_city: 'New York',
      address_state: 'NY',
      address_zip: 10022
    }, {
      id: 3,
      latitude: 40.755793,
      longitude: -73.979605,
      distance_from_me: 2.68,
      display_name: 'BANK OF AMERICA',
      phone_number: '412-123-1234',
      wait_time: '4 minutes',
      address_name: '550 5th Ave',
      address_city: 'New York',
      address_state: 'NY',
      address_zip: 10036
    }, {
      id: 4,
      latitude: 40.803950,
      longitude: -73.954988,
      distance_from_me: 2.68,
      display_name: 'FOOD BANK',
      phone_number: '412-123-1234',
      wait_time: '4 minutes',
      address_name: '252 W 116th St',
      address_city: 'New York',
      address_state: 'NY',
      address_zip: 10026
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
  })
  .factory('SpecialistService', function() {
    var specialist = [{
      id: 1,
      first_name: 'Jake',
      last_name: 'Smith'
    }, {
      id: 2,
      first_name: 'Harold',
      last_name: 'Lawrence'
    }];

    return {
      all: function () {
        return specialist;
      },
      get: function (specialistId) {
        {
          for (var i = 0; i < specialist.length; i++) {
            if (specialist[i].id === parseInt(specialistId)) {
              return specialist[i];
            }
          }
          return null;
        }
      }
    }
  });
