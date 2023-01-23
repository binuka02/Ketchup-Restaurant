import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login-page/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { FoodComponent } from './admin/food/food.component';
import { ViewordersComponent } from './admin/vieworders/vieworders.component';
import { ViewtableComponent } from './admin/viewtable/viewtable.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order/order-success/order-success.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';


const routes: Routes = [

 { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
 { path: 'admin-food',component:FoodComponent},
 { path: 'admin-home', component: AdminHomeComponent},
 { path: 'admin-login', component: AdminLoginComponent },
 { path: 'view-orders', component: ViewordersComponent},
 { path: 'view-table', component: ViewtableComponent},
 { path: 'order-success', component:OrderSuccessComponent},
 { path: 'checkout',component:CheckoutComponent},
 { path: 'admin-signup', component: AdminSignupComponent },


//  { path: 'breakfast', component: MenuComponent},
//  { path: 'lunch', component:MenuComponent},
//  { path: 'cart', component:CartComponent},
//  { path: 'reservetable', component:ReservetableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


