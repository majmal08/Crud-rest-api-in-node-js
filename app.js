require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const web = require('./routes/web.js');
const bodyParser = require('body-parser');
const formidable = require('express-formidable');

app.use(formidable());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
  type: ["application/x-www-form-urlencoded", "application/json"],
}));



app.use('/api', web);

app.use('/public/images', express.static('./public/images'))


  
app.listen(port, () => console.log(`Example app listening on port: http://localhost:${port}`));