var express = require('express');
var app = express();
var mysql = require('mysql');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('home')
});

app.get('/risultato', function (req, res) {
    var conn = mysql.createConnection({
        host: 'mysql-instance1.cedlzfy3hode.us-east-1.rds.amazonaws.com',
        user: 'zorzi_morris',
        password: 'LeoMessi10#',
        database: 'zorziDB'
    });
    conn.connect(function(err){
        if(err) 
        throw err;
        conn.query("SELECT * FROM utente", function(err, result, fields){
            if(err)
            throw err;
            console.log(result);
            res.render('risultato',{list:result});
        });
        
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
