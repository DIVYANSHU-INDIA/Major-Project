const express = require('express');

const app = express();
const expressejslayout = require('express-ejs-layouts');

app.use(expressejslayout);

app.use(express.static('./assets'))

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

const port = 8000;

// use express router

app.use('/', require('./routes'))

//set up the view engine
app.set('view engine', 'ejs');
app.set('views','./views')

app.listen(port,function(err){
    if(err){
        console.log(`Error in running ${port}`);
    }
    console.log(`Server is runnning on port: ${port}`);
})