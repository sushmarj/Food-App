import { Component, OnInit } from '@angular/core';
import { CuisineService } from 'src/app/services/cuisine.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dishes:any=[];
item_count=0;
  constructor(private cusineService:CuisineService,private cartService:CartService) { }
getDishesFromService(){
  this.cusineService.getDishes().subscribe((response)=>{
    this.dishes=response;
    
  })
}

  ngOnInit() {
    this.getDishesFromService();
    // localStorage.clear();
  }
  // getOrderToService(id,name,cost,type,description,poster){
  //   this.item_count=this.item_count+1;
  //   if(localStorage.getItem('cart')!=null){
  //     let existing=JSON.parse(localStorage.getItem('cart'));
  //      existing[this.item_count]=id+":"+name+""+cost+""+type+""+description+""+poster
      
  //     localStorage.setItem('cart', JSON.stringify(existing));

  //   console.log(localStorage.getItem['cart'])
  //   }
  //     else{
  //     let  existing={1:id+":"+name+""+cost+""+type+""+description+""+poster}
  //     localStorage.setItem('cart', JSON.stringify(existing));
  //     }
  //   }
  
  // getOrderToService(d){
  //   this.item_count=this.item_count+1
  //   if(localStorage.getItem('cart')!= null){
  //     let existing=JSON.parse(localStorage.getItem('cart'))
  //     existing.push(d)
  //     localStorage.setItem('cart',JSON.stringify(existing))

  //   }
  //   else{
  //     let existing=[d]
  //     localStorage.setItem('cart',JSON.stringify(existing))
  //   }

  addDishToCartService(name,type,cost,category,poster,description){
    
    this.cartService.addToCart(name,type,cost,category,poster,description).subscribe((response)=>{
      this.getDishesFromService();
       //this.router.navigate(['/cart'])
    })
  
  }
    


  }
    

  


