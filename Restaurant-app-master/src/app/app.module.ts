import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerestaurantComponent } from './components/managerestaurant/managerestaurant.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { UserService } from './services/user.service';
import { ManagerestauService } from './services/managerestau.service';
import { ManagecuisineComponent } from './components/managecuisine/managecuisine.component';
import { CuisineService } from './services/cuisine.service';
import { CartComponent } from './components/cart/cart.component';
import { RestaurantEditComponent } from './components/restaurant-edit/restaurant-edit.component';
import { CuisineEdiComponent } from './components/cuisine-edi/cuisine-edi.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'manage',component:ManagerestaurantComponent},
  {path:'register',component:UserregisterComponent},
  {path:'cuisine',component:ManagecuisineComponent},
  {path:'cart',component:CartComponent},
  {path:'edit/:_id',component:RestaurantEditComponent},
  {path:'editcuisine/:_id',component:CuisineEdiComponent},
  {path:'order',component:OrderComponent},
  {path:'login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManagerestaurantComponent,
    UserregisterComponent,
    ManagecuisineComponent,
    CartComponent,
    RestaurantEditComponent,
    CuisineEdiComponent,
    OrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService,ManagerestauService,CuisineService,CartService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
