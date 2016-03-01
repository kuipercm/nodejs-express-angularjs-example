'use strict';

var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('static'));

app.get('/hello', function(request, response) {
    response.send('hello cavero!');
});

app.get('/rest/content/welcome', function(request, response) {
    fs.readFile('content.json', 'utf-8', null, function(error, data) {
        response.send(content['over_cavero']);
    });

    //var content = JSON.parse(fs.readFileSync('content.json'));

});

app.get('/rest/content/actualiteiten', function(request, response) {
    var content = JSON.parse(fs.readFileSync('content.json'));
    response.send(JSON.stringify(content['actualiteiten']));
});

app.listen(8765);