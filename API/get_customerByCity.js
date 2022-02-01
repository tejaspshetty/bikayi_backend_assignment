const express= require('express')
const router= express.Router();
const Customer=require('../Model/Schema/customers');

router.post('/',(req,res)=>{
    Customer.aggregate([{$match:{"Purchase_Orders.Shipping_Details.City":req.body.City}}])
    .then((result)=>{
        console.log(result);
        res.status(200).send(result);
    })
    .catch((err)=>{
        console.log(err);
        res.status(404).send("Unsuccessful!")
    });
 });

module.exports=router;