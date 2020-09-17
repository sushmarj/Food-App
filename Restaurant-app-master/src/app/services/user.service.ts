import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serviceUrl:string="http://localhost:3005/api/users/";
getDetails(){
  return this.http.get(this.serviceUrl);
}
addDetails(na,pa,em,mo){
  let newDetails={name:na,pass:pa,emailid:em,phone:mo}
  return this.http.post(this.serviceUrl,newDetails);
}
  constructor(private http:HttpClient ) { }
  
}
