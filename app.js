var express = require('express');
var body_parser = require('body-parser');
//var api = require('./public/api/game-api.js');
var app  = express();
/*
Middlewares, dont worry about this, they are just mediators
*/
app.use('/public',express.static(__dirname+ '/public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extented: true}));

app.set('view engine','ejs');
//Route handling get request for the game page

app.get('/',function (req,res) {
  res.render('index',{
    name: 'sanson',
    username: 'sanson sanson'
  });
});

//Route handling get request for the game page
app.get('/game',function (req,res) {
  res.render('game');
});

app.get('/api',function (req,res) {
   //res.send(api);
});

//Route handling get request for the simulation page
app.get('/simulation',function (req,res) {
  res.render('simulation')
})

app.listen(3000,function (err) {
  if (err) {
    console.log(err);
  }else{
    console.log('Server started at localhost:3000');
  }
});
