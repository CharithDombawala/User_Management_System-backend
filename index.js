const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const host = 'localhost';
const mongoose= require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri ='mongodb+srv://charith:chdomse@cluster0.ih4u92d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.log('MongoDB Error: ',error);
    }
}

connect();

const server = app.listen(port,host, () => {
    console.log(`Node server is listening to port ${server.address().port}`)
});

app.use('/api',router);