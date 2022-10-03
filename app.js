require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const web = require('./routes/web.js');
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
var path = require('path');


app.use(formidable());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));


app.use('/api', web);
app.listen(port, () => console.log(`Example app listening on port: http://localhost:${port}`));