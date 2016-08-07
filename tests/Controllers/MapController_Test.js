describe('MapController_Test', function() {
  var scope;

  beforeEach(module('starter.controllers'));
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('MapCtrl', {$scope: scope});
  }));

  // ToDo: When we have maps
  describe('SMOKE', function() {
    it('SMOKE', function() {
      // Add in some value here
    });
  });
});
