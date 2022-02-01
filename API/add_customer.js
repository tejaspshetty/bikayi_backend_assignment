const express= require('express')
const router= express.Router();
const Customer=require('../Model/Schema/customers');

router.post('/',(req,res)=>{
    const customer=new Customer({
       Email:req.body.Email,
       Mobile_Number:req.body.Mobile_number,
       City:req.body.City,
       Customer_Name:req.body.Customer_name,
       Purchase_Orders:[]
   });
   customer.save()
   .then((result)=>{
       console.log(result);
       res.status(200).send("Successfully added to Database");
   })
   .catch((err)=>{
       console.log(err);
       res.status(404).send("Unsuccessful!")
   });
});

module.exports=router;
