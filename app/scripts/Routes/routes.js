app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('./../about/about.html'),
    })
    .when('/customers', {
      template: require('./../Customers/Customers.html'),
      controller: 'Customers'
    })
    .otherwise( { redirectTo: '/' });
}]);
