'use strict'

angular.module('BooksCtr', ['mainService'])

    .controller('booksController', function($scope,$http, Qury,$timeout) {
        $scope.title='Система управления библиотекой';
        $scope.userTemp={
            dataSelect:[]
        };
        function isSelect(){
            if($scope.userTemp.dataSelect){
                $scope.error=false;
            }
        }
        $scope.select=function(book){
            isSelect();
            $scope.bookSelect=book;
         //   $scope.bookTakeId=id;

            $('#myModal').modal();
        }
        $scope.selectOk=function(){
            console.log("это"+$scope.userTemp.dataSelect);
            if($scope.userTemp.dataSelect==""){
                $scope.error=true;
                return;
            }
            $scope.error=false;
            Qury.selectUser($scope.userTemp.dataSelect,$scope.bookSelect).success(function(data){
                $('#myModal').modal("hide");

                var scoperun=$timeout(function(){
                    $scope.books=data;
                },1000)

            });


        }
        $http.get('js//book.json').success(function(data, status, headers, config){
            $scope.books=data;
        }).error(function(){

        });
        $http.get('js/user.json').success(function(data, status, headers, config){
            $scope.users=data;

        }).error(function(){
                console.log("no user");
        });
        var date =new Date();
        $scope.takeClick=function(idBook,test){
            Qury.take(idBook).success(function(data){

                $timeout(function(){
                    $scope.books=data.books;
                 //   $scope.users=data.user;
                },500);

                $scope.userTemp.dataSelect=[];

            });

            console.log($scope.users);
        }
        $scope.remove=function(id){
            Qury.remove(id).success(function(data){
                $scope.books=data;
            })

        };

    });
