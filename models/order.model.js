const mongoose=require('mongoose');
const orderSchema=mongoose.Schema({
    id:{
        type:Number
        
    },
    name:{
        type:String
        
    },
    type:{
        type:String
        
    },
    cost:{
        type:Number
        
    },
    category:{
        type:String
    },
    
    poster:{
        type:String
    },
        description:{
        type:String
    }
})
const Order=module.exports=mongoose.model('Order',orderSchema)