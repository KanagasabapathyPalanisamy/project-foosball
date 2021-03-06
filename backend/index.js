const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');

const app = express();
// view engine setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//models
var models=require("./models");
//sync Database
models.sequelize.sync().then(function(){
    console.log('DB connected...');
}).catch(function(err){
    console.log(err,"SOMETHING went wrong with the DB!!!");
});
//Routers 
//require('./routers')(app)
app.get('./routers',(req,res) => res.status(200).send ({
    message:'welcome to the beginning.',
}));
module.exports = app;













/*

const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

var app = express();
//Configuring express server
app.use(bodyparser.json());
app.use(cors());
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sabapathy24',
    database: 'demo',
    multipleStatements: true
    });

  

app.get('/learners',(err,req,res,next)=>{
     console.log(err);
     console.log(req,res);
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
     res.end(JSON.stringify({id:1}));
     next();

});

//app.listen(8080,()=>console.log("8080"));

    //connecting with mysql
   mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });
        const port = process.env.PORT || 8080;
        app.listen(port, () => console.log(`Listening on port ${port}..`));
   // postman -path routing
        app.get('/learners' , (req, res) => {

            mysqlConnection.query('SELECT * FROM login', (err, rows, fields) => {
            if (!err)
            res.send(rows);
            else
            console.log(err);
            })
            } );
            */