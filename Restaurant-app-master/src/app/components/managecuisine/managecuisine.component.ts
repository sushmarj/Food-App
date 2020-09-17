import { Component, OnInit } from '@angular/core';
import { CuisineService } from 'src/app/services/cuisine.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-managecuisine',
  templateUrl: './managecuisine.component.html',
  styleUrls: ['./managecuisine.component.css']
})
export class ManagecuisineComponent implements OnInit {
dishes:any=[]
  constructor(private cuisineService:CuisineService,
    private router:Router) { }
  getDishesFromService(){
    this.cuisineService.getDishes().subscribe((response)=>{
      this.dishes=response;
      
    })}
addDishToService(name,type,cost,category,poster,desc){
  this.cuisineService.addDishes(name,type,cost,category,poster,desc).subscribe((response)=>{
    this.getDishesFromService();
    this.router.navigate([''])
  })

}
  ngOnInit() {
    this.getDishesFromService();
  }
  deleteDishFromService(dish){
    this.cuisineService.deleteDishes(dish).subscribe((response)=>{
      this.getDishesFromService();
    })
  }
  goToEditCuisineComponent(_id){
    this.router.navigate(['/editcuisine/'+_id]);
  }

}
