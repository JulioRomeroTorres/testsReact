
const mongoose = require('mongoose');
const URI= process.env.MONGODB_URL ? process.env.MONGODB_URL : 'mongodb://localhost/databse' ;

mongoose.connect(URI,{
});

const connection = mongoose.connection;

connection.once( 'open', () => {
    console.log('DB Connected');
});