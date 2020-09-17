import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dishes:any=[];
// message;
  constructor(private orderService:OrderService) { }

  // ngOnInit() {
  //   this.message=JSON.parse(localStorage.getItem('order'))
  // }


  ngOnInit() {
    this.getDishesFromService();
//  this.message=JSON.parse(localStorage.getItem('cart'))
    
  }
  getDishesFromService(){
    this.orderService.getToOrder().subscribe((response)=>{
      this.dishes=response;
      
    })
  }
  deleteFromOrder(d){
    
      this.orderService.deleteFromOrder(d).subscribe((response)=>{
        this.getDishesFromService();
      })
    
  }

}
