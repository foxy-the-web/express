const express = require('express');
const https = require('https');
const app = express();
/* 
const getM2data = function(comkey){
    // request options
    const options = {
        rejectUnauthorized: false,
        hostname: 'api.prod.m2.ov.otto.de',
        path: '/entity/style/' + comkey.toString(),
        method: 'GET',
        auth: 'veops:Sw9TMnwT3*+%4des',
        headers: {
            'accept': 'application/json'
        }
    };

    const getStyleData = https.get(options, (res) => {
        res.setEncoding('utf8');
        let body = '';
        
        res.on('data', (data) => {
            body += data;
        });

        res.on('end', () => {
            body = JSON.parse(body);
            let style = body.data[0];
        });

    });

    console.log(getStyleData);

}; */

// Use static files
app.use(express.static('public'));

// Root route
app.get('/', function (req, res) {
 res.sendFile('index.html', {
     root: __dirname
 })
});



const server = app.listen(3000, function () {
 
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
