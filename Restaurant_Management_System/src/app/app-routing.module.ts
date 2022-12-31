import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from './homepage/home-body/home-body.component';
import { AdminLoginComponent } from './admin/admin-login-page/admin-login.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { FoodComponent } from './admin/food/food.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

 { path: '', component: HomeBodyComponent },
 { path:"admin-food",component:FoodComponent},
 { path: 'admin-login', component: AdminLoginComponent },
 { path: 'breakfast', component: MenuComponent},
 {path:"lunch",component:MenuComponent},
 { path: 'cart', component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


