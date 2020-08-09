var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/hello', function(req, res){
    res.send("Hello World!");
 });


app.get('/first_template', function(req, res){
res.render('home_view');
});

app.get('/sample_sheet', function(req, res){
res.render('sample_sheet');
});


app.listen(PORT);
