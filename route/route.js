var express = require('express');
var router = express.Router();
var employment = require("../schema/schema");

//CRUD
//Create
router.post("/create-all", async (req, res) =>{
    try {
        const strong = new employment(req.body) 
        const method = await strong.save()
        res.send(method)
    } catch (error) {
        res.send(error)
    }
});

//Read
router.get("/read-all", async (req,res) =>{
    try {
        const line = await employment.find({}).populate("pagalmobilenumber")
        res.send(line)
    } catch (error) {
        res.send(error)
    }
});

//Update
router.put("/put-all/:id", async (req, res) =>{
    try {
        const ww = await employment.findOneAndUpdate({ _id: req.params.id},req.body,{ new: true})
        res.send(ww)
    } catch (error) {
        res.send(error)
    }
});

//Delete
router.delete("/delete-all/:id",async (req,res) =>{
    try {
        const vv = await employment.findOneAndDelete({ _id: req.params.id})
        res.send(vv)
    } catch (error) {
        res.send(error)
    }
});
module.exports = router;
