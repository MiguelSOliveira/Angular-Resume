app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<h1>Main View</h1>',
    })
    .when('/customers', {
      template: require('./../Customers/Customers.html'),
      controller: 'Customers'
    })
    .otherwise( { redirectTo: '/' });
}]);
