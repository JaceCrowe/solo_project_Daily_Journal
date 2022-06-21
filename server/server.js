const express = require('epxress');
const { urlencoded } = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());



app.listen(3000, () => console.log('app is listening on port 3000'));