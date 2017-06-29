require('dotenv').config();
var spawn = require('child_process').spawn;
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var fs = require('fs');
var basicAuth = require('basic-auth-connect');

const PORT = 5010;

var app = express();
app.use(bodyParser.json());
app.use(basicAuth(process.env.HEXO_GENERATE_USERNAME, process.env.HEXO_GENERATE_PASSWORD));

app.post('/generate', (req, res) => {
  console.log('HEXO GENERATE', 'started');
  console.time('HEXO GENERATE');

  var deployer = spawn('./hexo-generate.sh', [req.body.hexoSitePath, req.body.hexoSiteDest]);

  deployer.stdout.setEncoding('utf8');
  deployer.stdout.on('data', (data) => {
    console.log(data);
  });

  deployer.stderr.setEncoding('utf8');
  deployer.stderr.on('data', (data) => {
    console.error(data);
  });

  deployer.on('error', (err) => {
    console.error('Site generation error.', err);
  });

  deployer.on('close', (code) => {
    console.log('HEXO GENERATE', 'finished');
    console.timeEnd('HEXO GENERATE');

    res.status = code ? 500 : 200;
    res.end();
  });
});

var credentials = {
  cert: fs.readFileSync(process.env.CERT_FILE_PATH),
  key: fs.readFileSync(process.env.KEY_FILE_PATH)
};
https.createServer(credentials, app).listen(PORT);
