const express = require('express');
const app = express();
const PORT = 3001;
var cors = require('cors')
const bodyParser = require('body-parser')
const recipeRoutes = require('./routes/mainRoutes')

app
  .use(cors({
    origin: '*'
}))
  .use(bodyParser.json())
  .use(recipeRoutes)


  app.listen(PORT, () => {
    console.log(`Yo stop chasing me I've ran for ${PORT}km already!`)
  })