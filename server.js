
const express = require('express');
const bodyParser = require('body-parser');

//comment

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send('hi a im nodejs web server!')
});

app.post('/createUser/', (req, res) =>{
    
});

app.listen(5000, () =>{
    console.log('listen to port 5000');
});