angular.module('bookApp', ['app.routes', 'BooksCtr', 'singleBookCtr', 'bookDirective', 'mainService'])

// application configuration to integrate token into requests
.config(function($httpProvider) {
});