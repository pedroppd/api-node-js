const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Api is successfully')

})

consign()
   .include('controller')
   .into(app)