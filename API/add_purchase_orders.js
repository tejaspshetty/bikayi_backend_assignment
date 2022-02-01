const express= require('express')
const router= express.Router();
const Customer=require('../Model/Schema/customers');

router.post('/',(req,res)=>{
    if(req.body.MRP<req.body.Pricing){
        res.send(404).send("Pricing can't be greater than MRP!")
    }
    Customer.findOneAndUpdate({"_id":req.body.Customer_ID},
    {$push:{'Purchase_Orders':{
        Product_Name:req.body.Product_name,
        Quantity:req.body.Quantity,    
        Pricing:req.body.Pricing,
        MRP:req.body.MRP,
        Shipping_Details:[]
    }
}
},
{new:true}
)
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