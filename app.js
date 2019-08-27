// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;

const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
      <html>
       <head>
         <title>!DOCTYPE</title>
         <meta charset="utf-8">
         <meta property="og:url" content="https://0ec6a49e.ngrok.io/">
         <meta property="og:title" content="One givv">
         <meta property="og:type" content="article">
         <meta property="og:description" content="123123">
         <meta property="og:image" content="https://onebenefactor-image-bucket-staging.s3.amazonaws.com/aae2a5fd05538ae3d67b75f687f85bb4.jpg">
       </head>
       <body>
        <p>Разум — это Будда, а прекращение умозрительного мышления — это путь. 
        Перестав мыслить понятиями и размышлять о путях существования и небытия, 
        о душе и плоти, о пассивном и активном и о других подобных вещах, 
        начинаешь осознавать, что разум — это Будда, 
        что Будда — это сущность разума, 
        и что разум подобен бесконечности.</p>
       </body> 
      </html>
  `);
});

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});
