const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true , useCreateIndex: true ,useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('MongoDb connection established ')
});

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises' , exerciseRouter);
app.use('/users',usersRouter);

app.listen(port , () => {
    console.log('server is running on port');
});

