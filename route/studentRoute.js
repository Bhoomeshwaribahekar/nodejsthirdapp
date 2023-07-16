const express = require ('express');
const router = express.Router();
const Knowledge = require("../schema/studentSchema");
// const { route } = require('./collegeRoute');

//CRUD
//CREAT
router.post("/creat-posh", async (req,res) =>{
    try {
        const mani = new Knowledge(req.body)
        const shri = await mani.save()
        res.send(shri)
    } catch (error) {
        res.send(error)
    }
});
//READ
router.get("/get-goan", async (req,res) =>{
    try {
        const twi = await Knowledge.find({})
        res.send(twi)
    } catch (error) {
        res.send(error)
    }
});
//UPDATE
router.put("/update-put/:id", async (req,res) =>{
    try {
        const harsh = await Knowledge.findByIdAndUpdate({ _id: req.params.id},req.body,{new:true})
        res.send(harsh)
    } catch (error) {
        res.send(error)    
    }
});
//DELETE
router.delete("/delete-roo/:id", async (req,res) =>{
    try {
        const soo = await Knowledge.findByIdAndDelete({ _id: req.params.id})
        res.send(soo)
    } catch (error) {
        res.send(error)
    }
});

module.exports = router;



