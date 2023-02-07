const mongooes = require('mongoose')

const {Schema} = mongooes;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        dedault: Date.now

    },


});

module.exports = mongooes.model('user',UserSchema)