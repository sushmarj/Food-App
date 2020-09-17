const mongoose=require('mongoose');
const cartSchema=mongoose.Schema({
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
const Cart=module.exports=mongoose.model('Cart',cartSchema)