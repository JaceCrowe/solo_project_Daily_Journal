const express = require('express');
const app = express();
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware')
const entriesController = require('./controllers/entriesController')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname,'../index.html'))
});
app.use(express.static(path.resolve(__dirname,'../build')));

app.get('/entry', entriesController.getEntry, (req, res) => {
    return res.status(200).json({})
})

app.post('/entry', entriesController.createEntry, (req, res) => {
    return res.status(200).json({});
})

app.delete('/entry', entriesController.deleteEntry, (req,res) => {
    return res.status(200).json({})
})

app.use((req, res, next) => {
    res.status(404).send("Sorry, I can't find that address. I've tried (;_;) ");
})

app.use((err, req, res, next) => {
    console.log('Error in Middelvare Called'),
    console.log('Path: ', req.path);
    console.error('Error: ', err);
});

app.listen(3000);