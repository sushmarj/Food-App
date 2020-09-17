const mongoose=require('mongoose');
const dishSchema=mongoose.Schema({
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
const Dish=module.exports=mongoose.model('Dish',dishSchema)