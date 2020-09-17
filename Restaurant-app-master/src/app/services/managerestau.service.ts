import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerestauService {
 serviceUrl:string="http://localhost:3005/api/restaurants/";
 getRestaurants(){
   return this.http.get(this.serviceUrl);
 }
  constructor(private http:HttpClient) { }
  deleteRest(rest){
return this.http.delete(this.serviceUrl+rest._id);
  }
  addRest(re,read,reco,rety){
    let newRestaurant={name:re,address:read,contactno:reco,type:rety};
    return this.http.post(this.serviceUrl,newRestaurant);
  }
  getRestById(_id){
    return this.http.get(this.serviceUrl+_id);
  }
  updateRestById(_id,newEventObj){
    return this.http.put(this.serviceUrl+_id,newEventObj);
  }
}
