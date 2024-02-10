const mongoose = require('mongoose')

connection_string= process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log('MongoDB Connected Successfully!');
}).catch((err)=>{
    console.log(err);
})