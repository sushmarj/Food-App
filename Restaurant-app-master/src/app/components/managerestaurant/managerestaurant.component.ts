import { Component, OnInit } from '@angular/core';
import { ManagerestauService } from 'src/app/services/managerestau.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerestaurant',
  templateUrl: './managerestaurant.component.html',
  styleUrls: ['./managerestaurant.component.css']
})
export class ManagerestaurantComponent implements OnInit {
 restaurants:any=[];
  constructor(private managerservice:ManagerestauService,private router:Router) { }

  ngOnInit() {
    this.getRestaurantsFromService();
  }
getRestaurantsFromService(){
  this.managerservice.getRestaurants().subscribe((response)=>{
    this.restaurants=response;
  })
}
deleteEventFromService(rest){
  this.managerservice.deleteRest(rest).subscribe((response)=>{
    this.getRestaurantsFromService();
  })
}
addRestToService(name,address,contactno,type){
this.managerservice.addRest(name,address,contactno,type).subscribe((response)=>{
  this.getRestaurantsFromService();
})
}
goToEditComponent(_id){
  this.router.navigate(['/edit/'+_id]);
}

}
