import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin/admin-login-page/admin-login.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { FoodComponent } from './admin/food/food.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

 { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
 { path: 'admin-food',component:FoodComponent},
 { path: 'admin-login', component: AdminLoginComponent },
 { path: 'breakfast', component: MenuComponent},
 { path: 'lunch', component:MenuComponent},
 { path: 'cart', component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


