describe('MainTests', function() {
    var scope;
    var ctrl;
    beforeEach(angular.mock.module('MainModule'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('MainController', {
            $scope: scope
        });
        scope.ctrl = ctrl;
        scope.$apply();
    }));
    describe('all tests', function() {
        it('should initialize', function() {
            expect(scope.ctrl.someValue).toBe(125);
        });
    });
});
