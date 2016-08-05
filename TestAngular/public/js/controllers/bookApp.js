'use strict'

angular.module('BooksCtr', ['mainService'])

    .controller('booksController', function($scope,$http, Qury,$timeout) {
        $scope.title='Система управления библиотекой';
        $scope.userTemp={
            dataSelect:[]
        };
        $scope.select=function(book){
            $scope.bookSelect=book;
         //   $scope.bookTakeId=id;
            $('#myModal').modal();
        }
        $scope.selectOk=function(){
            console.log($scope.userTemp.dataSelect);
            Qury.selectUser($scope.userTemp.dataSelect,$scope.bookSelect).success(function(data){
                $('#myModal').modal("hide");

                var scoperun=$timeout(function(){
                    $scope.books=data;
                },1000)

            });


        }
        if($scope.sessia!=undefined){
            $scope.bool=true;
        } else {
            $scope.bool=false;
        }
        $http.get('js//book.json').success(function(data, status, headers, config){
            $scope.books=data;
        }).error(function(){

        });
        /*
         $scope.books=[
         {'name':'Мастер и Маргарита',
         'author':'Булгаков',
         'status': true},

         {   'name':'Гарри Поттер',
         'author':'Роулинг',
         'status': true},

         {   'name':'Королева Марго',
         'author':'Дюма',
         'status': true}
         ]*/
     /*   $scope.books=[
            {
                "id": 0,
                "name": "Мастер и Маргарита",
                "author": "Булгаков",
                "image": "../img/master_marg.jpg",
                "status": true
            },
            {
                "id": 1,
                "name": "Гарри Поттер",
                "author": "Роулинг",
                "image": "../img/harrypotter.jpg",
                "status": true
            },
            {
                "id": 2,
                "name": "Королева Марго",
                "author": "Дюма",
                "image": "../img/margo.jpg",
                "status": true
            },
            {
                "id": 3,
                "name": "Унесенные ветром",
                "author": "Митчелл",
                "image": "../img/mitchel.jpg",
                "status": false
            },
            {
                "id": 4,
                "name": "Отцы и дети",
                "author": "Тургенев",
                "image": "../img/otcy.jpg",
                "status": true
            }
        ];*/
        $http.get('js/user.json').success(function(data, status, headers, config){
            $scope.users=data;

        }).error(function(){
                console.log("no user");
        });

        var t;
        var date =new Date();
        //нажатие на кнопку
        $scope.takeClick=function(idBook,test){

           /* $http.get('localhost:8080/#/take',idBook).success(function(data){

            })*/
            Qury.take(idBook).success(function(data){
                console.log(data);
                $scope.books=data.books;
                $scope.users=data.user;
                t="успех";
            });

            console.log(t);
        }
        $scope.remove=function(id){
            Qury.remove(id).success(function(data){
                $scope.books=data;
            })

        };

    });