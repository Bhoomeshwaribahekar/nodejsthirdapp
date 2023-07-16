const express = require('express');
const mongoose = require(mongoose);
const skill = new mongoose.Schema({
    name: {
        type: String
    },
    class: {
        type: String
    },
    subject: {
        type: String
    },
    rollnumber: {
        type: Number
    },
    laibrary


});
const dailys = mongoose.model ("Knowledge",skill)
module.exports = dailys;