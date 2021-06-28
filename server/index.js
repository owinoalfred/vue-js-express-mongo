const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middle ware
app.use(bodyParser.json());
app.use(cors);
