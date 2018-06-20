// //  ROUTES TO HANDLE    REQUEST                     RESPONSE
// //  main landing        app.get('/'                 render main landing page

// //  user's home         app.get('/home/:userId'     render user's home page

// //  upload text         app.get('/create'           render appropriate html page

// //  upload text         app.post('/create'          post data to server, redirect to user's home

// //  view-comment        app.get('/comment/:id       render view-comment page

// //  view-comment        app.post('/comment/:id      post data to server, redirect to user's home

// //  view-comment       *app.delete('/comment/:id    delete data from server, redirect to user's home
// //                                                  * delete button displayed if text belongs to user

// //  logging out         app.put('/:userId/logout'   update user login data, logged_in = false

// // var path = require("path");

// var express = require('express')
// var router = express.Router()

// var db = require("../models");

// // ////////////////////////////////////

// // ROUTES GO HERE

// /////// moved this route into controllers/index-routes.js
// // router.get('/index', function (request, response) {
// //   response.render('index')
// // })  

// // router.get('/bff', function (request, response) {
// //   response.render('bff')
// // })

// // router.get('/comment', function (request, response) {
// //   response.render('comment')
// // })

// // router.get('/create', function (request, response) {
// //   response.render('create')
// // })

// // router.get('/ew', function (request, response) {
// //   response.render('ew')
// // })

// // router.get('/fail', function (request, response) {
// //   response.render('fail')
// // })

// // router.get('/halloffame', function (request, response) {
// //   response.render('halloffame')
// // })

// // router.get('/hallofshame', function (request, response) {
// //   response.render('hallofshame')
// // })

// // router.get('/lol', function (request, response) {
// //   response.render('lol')
// // })

// // router.get('/nsfw', function (request, response) {
// //   response.render('nsfw')
// // })

// // router.get('/submit', function (request, response) {
// //   response.render('submit')
// // })

// // router.get('/wtfam', function (request, response) {
// //   response.render('wtfam')
// // })
// // read more at: https://expressjs.com/en/guide/routing.html#express-router
// // our middleware (body-parser) is defined in server.js

// // ////////////////////////////////////

// module.exports = router