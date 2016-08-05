'use strict'
angular.module('singleBookCtr', [])

    .controller('singleBookController', function($scope,$http, $routeParams) {
        $http.get('js/book.json').success(function(data, status, headers, config){
            //$scope.books=data;
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == $routeParams.id) {
                    $scope.book = data[i];
                }
            }
        }).error(function(){

        });

        var t;
        var date =new Date();
//сортировка по нажатию
        $scope.date=date;
        $scope.sortField=undefined;
        $scope.sordReverse=undefined;
        $scope.sort=function(fisname){
            if($scope.sortField===fisname){
                $scope.sordReverse=!$scope.sordReverse;
            } else {
                $scope.sortField=fisname;
                $scope.sordReverse=false;
            }
        }
    });