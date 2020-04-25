const express = require('express');
const path = require("path");

const app = express();

const webpack = require('webpack');
const webpackMiddleware = require('./config/webpack-dev-middleware');
const webpackConfig = require('.config/webpack.config.js');

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get("/", (req, res) => {
    const indexFile = "index.html";
    res.sendFile(indexFile, {
      root: path.join(__dirname, "client")
    });
});

app.listen(process.env.PORT || 8080, 
    () => console.log(`Listening on port ${process.env.PORT || 8080}!`));