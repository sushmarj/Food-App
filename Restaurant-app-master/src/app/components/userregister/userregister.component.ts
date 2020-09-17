import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  details:any=[];
myForm:FormGroup;
  constructor(private userservice:UserService) { 
    this.myForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
      email:new FormControl('',[Validators.required])
      // mobile:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    })
  }
  getDetailsFromService(){
    this.userservice.getDetails().subscribe((response)=>{
      this.details=response;
      console.log(this.details);
    })
  }
  addDetailsToService(name,pass,emailid,phone){
    this.userservice.addDetails(name,pass,emailid,phone).subscribe((response)=>{
      this.getDetailsFromService();
    })
  }
  ngOnInit() {
    this.getDetailsFromService();
  }
  onSignup(myForm){
    console.log(myForm.value.username)
  }

}
