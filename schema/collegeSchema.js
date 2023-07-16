const express = require('express');
const mongoose = require('mongoose');
const Class = new mongoose.Schema({
    Studentname:{
        type: String
    },
    Branch:{
        type: String
    },
    Subject:{
        type: String
    },
    Rollnumber:{
        type: Number
    },
    Mobilenumber:{
        type: Number
    },
    laibrary:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employment'
        
    }

});

const collage = mongoose.model("CollageData" , Class)
module.exports = collage; // hello
