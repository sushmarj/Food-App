import { Component, OnInit } from '@angular/core';
import { CuisineService } from 'src/app/services/cuisine.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
dishes:any=[];
// message;
// objectKeys=Object.keys;
// subscription=Subscription;
  constructor(private cartService:CartService,private orderService:OrderService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getDishesFromService();
//  this.message=JSON.parse(localStorage.getItem('cart'))
    
  }
  getDishesFromService(){
    this.cartService.getToCart().subscribe((response)=>{
      this.dishes=response;
      
    })
  }
  deleteFromCart(d){
    
      this.cartService.deleteFromCart(d).subscribe((response)=>{
        this.getDishesFromService();
      })
    
  }
  addOrder(name,type,cost,category,poster,description){
    this.orderService.addToOrder(name,type,cost,category,poster,description).subscribe((response)=>{
      this.getDishesFromService();
    this.router.navigate(['login']);
  })}}

  

//   getOrder(item){
    
//     if(localStorage.getItem('order')!= null){
//       let existing=JSON.parse(localStorage.getItem('order'))
//       existing.push(item)
//       localStorage.setItem('order',JSON.stringify(existing))
// this.router.navigate(['login']);
//     }
//     else{
//       let existing=[item]
//       localStorage.setItem('order',JSON.stringify(existing))
//   }
  
//   }

