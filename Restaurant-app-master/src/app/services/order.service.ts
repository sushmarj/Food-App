import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  serviceUrl:string="http://localhost:3005/api/order/";
  constructor(private http:HttpClient) { }
  addToOrder(cname,ctype,ccost,ccate,cposter,cdes){
    
    let newOrder={name:cname,type:ctype,cost:ccost,category:ccate,poster:cposter,description:cdes};
    //alert(addCart.description);
    return this.http.post(this.serviceUrl,newOrder);
  
  }
  getToOrder(){
    return this.http.get(this.serviceUrl);
  }
  deleteFromOrder(d){
    return this.http.delete(this.serviceUrl+d._id);
  }

}
