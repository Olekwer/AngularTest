
angular.module('mainService',[])
    .factory('Qury', function($http){
        var quryFactory={};
        quryFactory.take=function(id){
            return $http.post('take/take/'+id)
        }
        quryFactory.selectUser=function(tuser, tbook){
            var data={
                user: tuser,
                book: tbook
            }
            return $http.post('take/selectUser',data)

        }
        quryFactory.create=function(id,titel, author){
            var data={
                name: titel,
                author: author
            }
            return $http.post('take/create/'+id,data)
        }
        quryFactory.add=function(name, author, image){
            var data={
                name: name,
                author: author,
                image: image
            }
            return $http.post('take/add',data)
        }
        quryFactory.remove=function(id){
            return $http.post('take/remove/'+id);
        }

        return quryFactory;
    })