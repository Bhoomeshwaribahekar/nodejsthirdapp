const express = require('express');
const mongoose = require('mongoose');
const student = new mongoose.Schema({
    name:{
        type: String
    },
    mobile:{
        type: Number //
    },
    class:{
        type: String
    },
    payment:{
        type: Number
    },
    subject:{
        type: String
    },
    rollnumber:{
        type: Number
    },
    collage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CollageData'
 
    }
    

});

const register = new mongoose.model("employment",student)
module.exports = register;


