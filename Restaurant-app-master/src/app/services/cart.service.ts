import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  serviceUrl:string="http://localhost:3005/api/cart/";
  constructor(private http:HttpClient) { }
  addToCart(cname,ctype,ccost,ccate,cposter,cdes){
    
    let addCart={name:cname,type:ctype,cost:ccost,category:ccate,poster:cposter,description:cdes};
    alert(addCart.description);
    return this.http.post(this.serviceUrl,addCart);
  
  }
  getToCart(){
    return this.http.get(this.serviceUrl);
  }
  deleteFromCart(d){
    return this.http.delete(this.serviceUrl+d._id);
  }


}
