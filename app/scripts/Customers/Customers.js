app.controller('Customers', ['$scope', function ($scope) {
  $scope.customers = require('./customers.json');
}]);
