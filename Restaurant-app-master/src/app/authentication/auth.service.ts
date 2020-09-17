import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signInUser(loginInfo:any){
    if(loginInfo.username==="sushma"&&loginInfo.password==="Sushma@123"){
      let successObject={
        success:true,
        token:"1234"
      }
      return successObject;
    }
    else{
      let failureObject={
        success:false,
        token:null
      }
      return failureObject;
    }
  }
  loggedIn(){
    //!! Check for Existence of token

return !!localStorage.getItem('token');
  }
  logOutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  constructor(private router:Router) { }
}
