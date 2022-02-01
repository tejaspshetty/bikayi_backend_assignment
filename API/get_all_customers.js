const express= require('express')
const router= express.Router();
const Customer=require('../Model/Schema/customers');


router.get('/',(req,res)=>{
    Customer.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
        res.status(404).send("Unsuccessful!")
    });
});


module.exports=router;