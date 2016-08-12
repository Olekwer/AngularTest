/**
 * Created by Oleg on 07.06.2016.
 */
app.directive('addBook', function(){
    return{
        scope: {
            name: '=',
            author: '=',
            image: '='
        },
        restrict: 'E',
        templateUrl: 'view/pages/add-book-directive.html',
        controller: function($scope,$location,$timeout, Qury){
            $scope.add=function(name, author, image){
                console.log(name);
                console.log(author);
                image="../img/image.jpg"
                console.log(image);
                Qury.add(name, author, image).success(function(data){
                    console.log($location.path("/"));

                });
                $timeout(function(){
                    $location.path('/');
                },1000)
            }
        }
    };
});
