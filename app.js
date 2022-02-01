 const express= require("express");
 const mongoose=require('mongoose');
 const app= express();
 const mongodb_config=require('./config/dbconfig');
 dbURI=mongodb_config.dbConfig;

//Middleware helps in handling json data from input
app.use(express.json());

//Establishing Connection using the Mongo URI
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=> app.listen(3000))
.catch((err)=>console.log('err'));


//APIs for all six different functionalities.
 app.use('/add_customers',require('./API/add_customer'));
 app.use('/add_purchase_orders',require('./API/add_purchase_orders'));
 app.use('/add_shipping_details',require('./API/add_shipping_address'));
 app.use('/get_customerByCity',require('./API/get_customerByCity'));
 app.use('/get_customers_with_PurchaseOrders',require('./API/get_customers_with_PurchaseOrders'));
 app.use('/get_all_customers',require('./API/get_all_customers'));