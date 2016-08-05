angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

        // route for the home page

            .when('/', {
                templateUrl : 'view/pages/books.html',
                controller  : 'booksController'
            })

            .when('/view-book/:id', {
                templateUrl : 'view/pages/single-book.html',
                controller  : 'singleBookController'
            })

            .when('/edit-book/:id', {
                templateUrl : 'view/pages/edit-book.html',
                controller  : 'singleBookController'
            })

            .when('/users', {
                templateUrl: 'view/pages/listUser.html',
                controller: 'booksController'
            })
            .when('/add-book', {
                templateUrl: 'view/pages/add-book.html',
                controller: 'booksController'
            })





        $locationProvider.html5Mode(false);

    });
