const express = require('express');
const app = express();
const PORT = 3001;
const router = require('./router')
var cors = require('cors')
const bodyParser = require('body-parser')

app
  .use(cors({
    origin: '*'
}))
  .use(bodyParser.json())
  .use(router)


  app.listen(PORT, () => {
    console.log(`Yo stop chasing me I've ran for ${PORT}km already!`)
  })