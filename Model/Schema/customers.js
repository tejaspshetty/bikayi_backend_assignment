const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const shipping_address=new Schema(
    {
        Address:String,
        City:String,
        Pincode:Number
    }
)

const Purchase_order=new Schema(
    {
    Product_Name:String,
    Quantity:Number,    
    Pricing:Number,
    MRP:Number,
    Shipping_Details:[shipping_address]
}
);

const cust_Schema=new Schema(
    {
    Customer_Name:String,
    Email:String,
    Mobile_Number:Number,
    City:String,
    Purchase_Orders:[Purchase_order]
}
);

const customer=mongoose.model('customer',cust_Schema);
module.exports=customer;