const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: String,
    userId: {
        userName:String,
        password:String
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    address: String 
}, {
    timeseries: true
})

module.exports = model('User', userSchema);