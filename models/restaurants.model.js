const mongoose=require('mongoose');
const restaurantSchema=mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
        
    },
    address:{
        type:String
        
    },
    contactno:{
        type:Number
        
    },
    type:{
        type:String
    }
})
const Restaurant=module.exports=mongoose.model('Restaurant',restaurantSchema)