const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema({
    name:{
        type:String,
        trim:true
    },
    owner:{
        type:String,
        trim:true
    },
    category:{
        type:String,
        trim:true
    },
    ownerPhone:{
        type:Number,
        trim:true
    },
},{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model('Shop', shopSchema);