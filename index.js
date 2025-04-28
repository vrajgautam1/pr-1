const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/dbconnection.js'); 

app.set('view engine', 'ejs');
app.set("views", "views");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

const mainRouter = require('./router/index.js');
app.use(mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, (err)=>{
    if(!err){ 
        console.log(`Server is running`);
        console.log(`http://localhost:${port}`);
        db();
    }
})