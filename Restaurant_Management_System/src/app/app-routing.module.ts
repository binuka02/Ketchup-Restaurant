import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login-page/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { FoodComponent } from './admin/food/food.component';
import { ViewordersComponent } from './admin/vieworders/vieworders.component';
import { ViewtableComponent } from './admin/viewtable/viewtable.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [

 { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
 { path: 'admin-food',component:FoodComponent},
 { path: 'admin-home', component: AdminHomeComponent},
 { path: 'admin-login', component: AdminLoginComponent },
 { path: 'view-orders', component: ViewordersComponent},
 { path: 'view-table', component: ViewtableComponent},
 { path: 'chat', component: ChatComponent},

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


