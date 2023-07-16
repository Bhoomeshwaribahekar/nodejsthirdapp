const express = require('express');
const mongoose = require('mongoose');
const Information = new mongoose.Schema({
    Studentname:{
        type: String
    },
    Brance:{
        type: String
    },
    Subject:{
        type: String
    },
    Mobilenumber:{
        type: Number
    }
});
const password = mongoose.model("Knowledge", Information)
module.exports = password;

