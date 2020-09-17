import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { CuisineService } from 'src/app/services/cuisine.service';
@Component({
  selector: 'app-cuisine-edi',
  templateUrl: './cuisine-edi.component.html',
  styleUrls: ['./cuisine-edi.component.css']
})
export class CuisineEdiComponent implements OnInit {

  constructor(private cuisineService:CuisineService,private router:Router,
    private activatedRoute:ActivatedRoute) { }
    dishObject:any={
      name:"",
      type:"",
      cost:"",
      poster:"",
      description:""

    }
  ngOnInit() {
    
    let _id=this.activatedRoute.snapshot.paramMap.get('_id');
    this.cuisineService.getDishById(_id).subscribe((response)=>{
      this.dishObject=response;
    })
  }
save(){
  this.cuisineService.updateDishById(this.dishObject._id,this.dishObject).subscribe((response)=>{
    this.router.navigate(['/cuisine']);
  })
}
cancel(){
  this.router.navigate(['/cuisine']);
}
}
