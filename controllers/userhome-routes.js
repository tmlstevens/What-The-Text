
const path = require("path");
const fs = require("fs");
var db = require("../models");

var router = function (app) {

    app.get('/api/userhome', function (request, response) {
        db.Text.findAll({})
            .then(function (result) {
                console.log(result);
                response.json(result);
            });
    });

    app.get('/userhome', function (request, response) {
        response.render('userhome')
    });

    
    app.get('/api/lol', function (request, response) {
        db.Text.findAll(
            {
                where: {
                    lol: 1
                }
            })
            .then(function (result) {
                console.log(response);
                response.json(result);
            });
    });

    app.get('/api/wtfam', function (request, response) {
        db.Text.findAll(
            {
                where: {
                    wtfam: 1
                }
            })
            .then(function (result) {
                console.log(response);
                response.json(result);
            });
    });

    app.get('/api/ew', function (request, response) {
        db.Text.findAll(
            {
                where: {
                    ew: 1
                }
            })
            .then(function (result) {
                console.log(response);
                response.json(result);
            });
    });

    app.get('/api/bff', function (request, response) {
        db.Text.findAll(
            {
                where: {
                    bff: 1
                }
            })
            .then(function (result) {
                console.log(response);
                response.json(result);
            });
    });

    app.get('/api/lol', function (request, response) {
        db.Text.findAll(
            {
                where: {
                    lol: 1
                }
            })
            .then(function (result) {
                console.log(response);
                response.json(result);
            });
    });

    app.get('/api/nsfw', function (request, response) {
        db.Text.findAll(
            {
                where: {
                    nsfw: 1
                }
            })
            .then(function (result) {
                console.log(response);
                response.json(result);
            });
    });

    app.get('/api/fail', function (request, response) {
        db.Text.findAll(
            {
                where: {
                    fail: 1
                }
            })
            .then(function (result) {
                console.log(response);
                response.json(result);
            });
    });

    app.get('/api/fail', function (request, response) {
        db.Text.findAll(
            {
                where: {
                    fail: 1
                }
            })
            .then(function (result) {
                console.log(response);
                response.json(result);
            });
    });



    // findById(textId, { include: [db.Comment] })


    app.get('/api/textfocusget/:id', function (request, response) {
        var textId = request.params.id;
        db.Text.findById(textId, {
            include: [db.Comment]
        })
            .then(function (result) {
                console.log(result);
                response.json(result);
            });
    });


    app.get('/textfocus/:id', function (request, response) {
        response.render('comment')
    });

    app.get('/text/:id', function (request, response) {
        response.render('submit')
    });

    app.get('/text/comments/:id', function (request, response) {
        var textId = request.params.id;
        db.Comment.findAll(
            {
                where: {
                    textid: textId
                }
            })
            .then(function (result) {
                response.json(result);
            })
    });

    app.get('/api/text/:id', function (request, response) {
        var textId = request.params.id;
        db.Text.findById(textId)
            .then(function (result) {
                console.log(result);
                response.json(result);
            })
    });

    app.post('/text/comments/create', (request, response) => {
        var newComment = request.body;
        db.Comment.create(newComment)
            .then((result) => {
                response.json(result)
            })
    })

    app.get('/text/comments', (request, response) => {
        db.Comment.findAll({})
            .then(function (result) {
                console.log(result);
                response.json(result);
            });
    })

    app.put('/api/text/:id', function (request, response) {
        var textId = request.params.id;
        db.Text.update(request.body,
            {
                where: {
                    id: request.params.id
                }
            })
            .then(function (dbText) {
                response.json(dbText);
            })

    });

    app.post('/submit', function (request, response) {
        response.render('submit')
    });


    var multer = require("multer");
    var handleError = (error, response) => {
        response
            .status(500)
            .contentType("text/plain")
            .end("Something went terribly wrong...");
    };
    var upload = multer({ dest: "public/assets/uploads/" });

    app.post("/upload", upload.single("file"), (request, response, next) => {
        var extension = path.extname(request.file.originalname).toLowerCase();
        var tempFilePath = request.file.path;
        var newFilePath = path.join("public/assets/uploads/", request.file.filename + extension);
        console.log(JSON.stringify(request.user));


        if (extension === ".png") {
            fs.rename(tempFilePath, newFilePath, error => {
                if (error) return handleError(error, response);
                db.Text.create({
                    image: '/assets/uploads/' + request.file.filename + extension,
                    userId: request.user.id
                })
                    .then(function (text) {
                        response.redirect('/text/' + text.id)
                    });
            })
        }
    });

}
module.exports = router;