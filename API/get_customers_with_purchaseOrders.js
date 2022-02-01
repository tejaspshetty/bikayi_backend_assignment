const express= require('express')
const router= express.Router();
const Customer=require('../Model/Schema/customers');

router.get('/',(req,res)=>{
    Customer.find()
    .select('Customer_Name Email Mobile_Number City Purchase_Orders._id Purchase_Orders.Product_Name Purchase_Orders.Quantity Purchase_Orders.Pricing Purchase_Orders.MRP')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
        res.status(404).send("Unsuccessful!")
    });
});

module.exports=router;