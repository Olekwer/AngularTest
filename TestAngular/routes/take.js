
var fs = require('fs');
function take(app,express){
    var apiRouter = express.Router();
    apiRouter.post('/take/:id',function(req,res){
        console.log("eeee "+req.params.id);
        var idd=req.params.id;
        var books;
        this.book={};
        this.data={};

        fs.readFile("public/js/book.json", function(err, data) {
            if(err) {
                console.log(err);
            } else {
                books=JSON.parse(data);
                for(var i=0;i<books.length;i++){
                    if(books[i].id==idd){
                        this.book=books[i];
                        console.log(books[i].name+" "+books[i].status);
                        if( books[i].status==false){
                            books[i].status=true;
                        } else {
                        books[i].status=false;
                        };
                        this.data.books=books;
                        break;
                    }
                }
                fs.readFile("public/js/user.json", function(err, data){
                    var user=JSON.parse(data);
                    if(err) return;
                    for (var i=0; i<user.length;i++){
                        if(!user[i].books) continue;
                        for (var ii=0;ii<user[i].books.length;ii++){
                           // console.log(this.book.id+"="+user[i].books[ii].id);
                            if (this.book.id===user[i].books[ii].id){
                                console.log(this.book.id+"="+user[i].books[ii].id);
                                user[i].books.splice(ii,1);
                                this.data.user=user;
                                break;
                            }
                        }

                    }
                    fs.writeFile("public/js/user.json", JSON.stringify(user), function(err) {
                        if(err) {
                            console.log(err);
                        } else {
                            console.log("Файл сохранен.");

                        }
                    });
                })
                res.json(this.data);
             //   console.log(books);

                fs.writeFile("public/js/book.json", JSON.stringify(books), function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Файл сохранен.");

                    }
                });
            }
        });

    });
    apiRouter.post('/create/:id',function(req,res){
        var idd=req.params.id;
        var dataNew=req.body;
        var books;
        console.log(dataNew.name+" "+idd);
        fs.readFile("public/js/book.json", function(err, data) {
            if(err) {
                console.log(err);
            } else {
                books=JSON.parse(data);
                for(var i=0;i<books.length;i++){
                    if(books[i].id==idd){
                        console.log(books[i].name+" "+books[i].status);
                        books[i].name=dataNew.name;
                        books[i].author=dataNew.author;
                        break;
                    }
                }
              //  res.json(books);
                console.log(books);

                fs.writeFile("public/js/book.json", JSON.stringify(books), function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Файл сохранен.");

                    }
                });
            }
        });
    })
    apiRouter.post('/add', function(req,res){
        var newBook=req.body;
        fs.readFile("public/js/book.json", function(err, data) {
            if(err) {
                console.log(err);
            } else {
                books=JSON.parse(data);
               var newName=newBook.name;
                var newAuthor=newBook.author;
                var newImage=newBook.image;
                var max=books[0].id;
                for (var i=0;i<books.length;i++){
                    if(books[i].id>max){
                        max=books[i].id;
                    }
                }
                var newId=max+1;
                var book={
                    id: newId,
                    name: newName,
                    author: newAuthor,
                    image: newImage,
                    status: true
                }
                books.push(book);
                //  res.json(books);
                console.log(books);

                fs.writeFile("public/js/book.json", JSON.stringify(books), function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Файл сохранен.");

                    }
                });
            }
        });
    })
    apiRouter.post('/remove/:id',function(req,res){
        var idd=req.params.id;
        console.log(idd);

        fs.readFile("public/js/book.json", function(err, data) {
            if(err){
                return;
            };
            this.books=JSON.parse(data);
            var e={};
            (function(){
                for (var i=0;i<this.books.length;i++){

                    if (this.books[i].id==idd){
                        e=this.books[i];
                        break
                    }
                }
            })();
          //  console.log(e);
            this.books.splice(this.books.indexOf(e),1);

            res.json(this.books);
            fs.writeFile("public/js/book.json", JSON.stringify(this.books), function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Файл сохранен.");

                }
            });
        });
       // console.log(this.books);

    })
    apiRouter.post('/selectUser', function (req,res){
        //console.log("tut"+req.body.user);
        var book=req.body.book;
        fs.readFile("public/js/user.json", function(err, data) {
            if(err)
                return;
            var users=JSON.parse(data);
            for (var i=0;i<users.length;i++){
                if (users[i].name===req.body.user){
                    if(!users[i].books)
                    users[i].books=[];
                    users[i].books.push(book);
                    break;
                }
            }
            console.log(users);
            fs.readFile("public/js/book.json", function(err, data) {
                if(err) {
                    console.log(err);
                } else {
                    this.books=JSON.parse(data);
                    for(var i=0;i<books.length;i++){
                        if(this.books[i].id==book.id){
                            this.booki=books[i];
                          //  console.log(books[i].name+" "+books[i].status);
                            if( this.books[i].status==false){
                                this.books[i].status=true;
                            } else {
                                this.books[i].status=false;
                            }
                            break;
                        }
                    }
                  //  res.json(this.books);
                    //   console.log(books);

                    fs.writeFile("public/js/book.json", JSON.stringify(this.books), function(err) {
                        if(err) {
                            console.log(err);
                        } else {
                            res.json(this.books);
                            console.log("Файл сохранен.");

                        }
                    });
                }
            });
            fs.writeFile("public/js/user.json", JSON.stringify(users), function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Файл сохранен.");

                }
            });
        })
    })
    return apiRouter;
}
exports.take=take;
