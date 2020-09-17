// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginObject={
  username:"",
  password:""
};
  constructor(private authService:AuthService,private router:Router) { }
errorMessage:string="";
  ngOnInit() {
  }
  signIn(){
    let result:any=this.authService.signInUser(this.loginObject);
  console.log(result);
  if(result.success==true){
    localStorage.setItem('token',result.token);
this.router.navigate(['/order']);
  }
  else{
    this.errorMessage="Invalid Username or Password";
    this.router.navigate(['/login'])
  }
  }

}
