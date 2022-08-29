'use strict'

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// USE
// implement express
const app = express();

// middleware
app.use(cors());

// define PORT validate env is working
const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
})


app.get('*', (request, response) => {
  response.status(404).send('Not availabe');
})

// ERROR
app.use((error, request, response, next) => {
  res.status(500).send(error.message);
});

// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
