import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from './homepage/home-body/home-body.component';
import { AdminLoginComponent } from './admin/admin-login-page/admin-login.component';
import { BreakfastComponent } from './homepage/breakfast/breakfast.component';
import { FoodComponent } from './admin/food/food.component';

const routes: Routes = [

 { path: '', component: HomeBodyComponent },
 {path:"admin",component:FoodComponent},

 { path: 'admin-login', component: AdminLoginComponent },
 { path: 'home-breakfast', component: BreakfastComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


