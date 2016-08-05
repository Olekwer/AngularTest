var app = angular.module('bookDirective', ['mainService']);
app.directive('editBook', function() {
    return {
        scope: {
            id: '=',
            title: '=',
            author: '=',

        },
        templateUrl: 'view/pages/edit-book-directive.html',
        restrict: 'E',
        controller: function($scope, Qury) {
            console.log("fra")
            $scope.edit = function (id, title, author) {
                console.log(id);
                console.log(title);
                Qury.create(id,title,author).success(function(data){

                });
              /*  for(var i=0; i<$scope.books.length;i++){
                    console.log(books[i]);
                }*/
            };

        },
        link: function(scope, element, attrs, ctrl) {

        }
    };
});