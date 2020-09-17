const express=require('express');
const mongoose=require('mongoose');
const config=require('config');
const cors=require('cors');
const restaurantRouter=require('./router/restaurant.router')
const dishRouter=require('./router/dish.router')
const cartRouter=require('./router/cart.router')
const authRouter=require('./router/auth.router')
const userRouter=require('./router/user.router')
const orderRouter=require('./router/order.router')
const app=express();

mongoose.connect(config.get("mongoConnectionString"));
mongoose.connection.on("connected",()=>{
    console.log('connected to mongodb port 27017')
})
mongoose.connection.on('error',(error)=>{
    console.log(error)
})

app.use(express.json());
app.use(cors());
app.use('/api/restaurants',restaurantRouter)
app.use('/api/dishes',dishRouter)
app.use('/api/cart',cartRouter)
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/order',orderRouter)


const port=process.env.PORT||config.get('port')
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
