global.angular = require('angular');

var ngRoute = require('angular-route');
global.app = angular.module('main', ['ngRoute']);

require('./Routes/routes.js');
require('./Customers/Customers.js');
