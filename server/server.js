const express = require('express');
const app = express();
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname,'../index.html'))
});
app.use(express.static(path.resolve(__dirname,'../build')));


app.use((req, res, next) => {
    res.status(404).send("Sorry, I can't find that address. I've tried (;_;) ");
})
//global error handler

app.listen(3000);