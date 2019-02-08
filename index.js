var express = require('express');

var app = express();
var router = express.Router();

var mysql = require('mysql');

app.get('/', function (req, res, next) {
    var connection = mysql.createConnection({
        host: 'localhost',
        post: 3306,
        user: 'root',
        password: '531712',
        database: 'mysql'
    });
    connection.connect();
    connection.query('select * from test_table', function (err, rows, fields) {
        connection.end();

        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });