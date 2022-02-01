const express= require('express')
const router= express.Router();
const Customer=require('../Model/Schema/customers');

router.post('/',(req,res)=>{
    Customer.findOneAndUpdate({"_id":req.body.Customer_ID,"Purchase_Orders._id":req.body.PurchaseOrder_ID},
    {$push:{'Purchase_Orders.$.Shipping_Details':{
       Address:req.body.Address,
       City:req.body.City,
       Pincode:req.body.Pincode
   }
}
},{new:true})
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
