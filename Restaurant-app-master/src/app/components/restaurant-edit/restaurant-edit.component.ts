import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ManagerestauService } from 'src/app/services/managerestau.service';
@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private manageRestService:ManagerestauService) {

   }

  ngOnInit() {
    let _id=this.activatedRoute.snapshot.paramMap.get('_id');
    this.manageRestService.getRestById(_id).subscribe((response)=>{
      this.restObject=response;
    })
  }
  restObject:any={
    name:"",    
    type:"",
    address:"",
    contactno:""
  }
  save(){
    this.manageRestService.updateRestById(this.restObject._id,this.restObject).subscribe((resp)=>{
      this.router.navigate(['/manage']);
    })
  }
  cancel(){
    this.router.navigate(['/manage']);
  }

}
