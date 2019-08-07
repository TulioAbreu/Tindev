const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

const fs = require('fs');
const jsonString = fs.readFileSync('./secret.json');
const { secret } = JSON.parse(jsonString);

mongoose.connect(secret, {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);