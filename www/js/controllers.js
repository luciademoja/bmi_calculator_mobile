angular.module('starter.controllers', [])

.controller('BmiController', function($scope) {
  $scope.data = {};
  $scope.data.calc_type = 'metric';
  $scope.calculateBMI = function() {
    var person = new Person({
      weight: $scope.data.weight,
      height: $scope.data.height,
      calc_type: $scope.data.calc_type
    });
    person.calculate_bmi();
    $scope.person = person;
  };
})

.controller('AboutController', function () {

});
