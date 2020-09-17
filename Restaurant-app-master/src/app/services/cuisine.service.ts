import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {
  
serviceUrl:string="http://localhost:3005/api/dishes/";
getDishes(){
  return this.http.get(this.serviceUrl);
}
  constructor(private http:HttpClient) { }
addDishes(na,ty,co,cate,img,des){
  let newDish={name:na,type:ty,cost:co,category:cate,poster:img,description:des};
  return this.http.post(this.serviceUrl,newDish);
}
deleteDishes(dish){
  return this.http.delete(this.serviceUrl+dish._id);
}
addToCart(cname,ctype,ccost,ccate,cposter,cdes){
  let addCart={name:cname,type:ctype,cost:ccost,category:ccate,poster:cposter,description:cdes};
  return this.http.post(this.serviceUrl,addCart);

}
getDishById(_id){
  return this.http.get(this.serviceUrl+_id);
}
updateDishById(_id,newDishObject){
  return this.http.put(this.serviceUrl+_id,newDishObject)
}

addOrder(i:number){
  let newOrder={
    id:i
  }
  return this.http.get(this.serviceUrl+i);
}


}
