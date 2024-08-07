const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        Name:{
            type : String,
            required : true
        },
        LastName:{
            type : String,
            required : true
        },
        Email:{
            type : String,
            required : true,
            unique : true
        }
    }
)

const Model = mongoose.model('User', schema);

module.exports = Model;