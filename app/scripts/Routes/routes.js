app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('./../about/about.html'),
    })
    .when('/web_dev', {
      template: require('./../web_projects/web_projects.html'),
    })
    .when('/android_apps', {
      template: require('./../android_apps/android_apps.html'),
    })
    .otherwise( { redirectTo: '/' });
}]);
