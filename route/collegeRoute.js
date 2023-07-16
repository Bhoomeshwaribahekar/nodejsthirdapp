const express = require ('express');
const router = express.Router();
const CollageData = require("../schema/collegeSchema");

//CRUD
//Create
router.post("/post-all" , async (req,res) =>{
    try {
        const simply = new CollageData(req.body)
        const killed = await simply.save()
        res.send(killed)
    } catch (error) {
        res.send(error)
    }
});

//Read
router.get("/get-all" , async (req,res) =>{
    try {
        const karma = await CollageData.find({}).populate("laibrary")
        res.send(karma)
    } catch (error) {
        res.send(error)
    }
});

//Update
router.put("/update/:id", async (req,res) =>{
    try {
        const Dark = await CollageData.findByIdAndUpdat({ _id: req.params.id},req.body,{new:true})
        res.send(Dark)
    } catch (error) {
        res.send(error)
    }
});


//Delete
router.delete("/delete-all/:id", async (req,res) =>{
    try {
        const data = await CollageData.findById({_id:req.params.id})
        console.log("params",data)
        const Star = await CollageData.findByIdAndDelete({_id:req.params.id}) //findOneAndDelete({ _id: req.params.id})
        res.send(Star)
    } catch (error) {
        res.send(error)
    }
});

module.exports = router;