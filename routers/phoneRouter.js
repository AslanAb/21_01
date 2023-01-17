const express = require("express");
const { PhoneModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    PhoneModel.find({}, (err, results) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(results)
        }
    });
});
router.get("/:model", (req, res) => {
    const model  = req.params;
    PhoneModel.find(model, (err, results) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(results)
        }
    });
       
});


router.post("/", (req, res) => {
    const { model, price, color } = req.body;
    const newPhone = new PhoneModel({ model, price, color });
    newPhone.save((err) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("ok");
        }
    });
});
router.put("/:id", async (req, res) => {
    const idFind = req.params.id;
    const { model, price, color } = req.body;
    await PhoneModel.findByIdAndUpdate(idFind, { model, price, color }, (err) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("ok");
        }
    });

})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    PhoneModel.findByIdAndDelete(id, (err) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send("deleted");
        }
    });
});

module.exports = router;