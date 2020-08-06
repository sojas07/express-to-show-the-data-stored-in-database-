const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cor = require('cors');
const path = require('path');

const mongoose = require('mongoose');

app.use(bodyParser());
app.use(cor());

app.use(express.urlencoded({extended : false}));

app.set('views' , path.join(__dirname,'views'));
app.set('view engine','ejs');

const url = 'mongodb://localhost/AliensDBex'

mongoose.connect(url , {useNewUrlParser:true});

const con = mongoose.connection;

con.on('open' , ()=>{
    console.log('connected');
})

app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index');
})

// app.get('/department',(req,res)=>{
//     res.render('department');
// })

const alienRouter = require('./routes/aliens');
app.use('/aliens' , alienRouter);


app.listen(8080);