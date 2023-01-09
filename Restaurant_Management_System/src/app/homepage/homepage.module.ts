import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './homepage.component';
import { ReservetableComponent } from './reservetable/reservetable.component';
import { CartComponent } from '../cart/cart.component';
import { OrderComponent } from '../order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeBodyComponent,MenuComponent,NavbarComponent,FooterComponent,HomepageComponent,ReservetableComponent],
  imports: [
    CommonModule,
ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:"",
        component:HomepageComponent,
        children:[
          {path:"",component:HomeBodyComponent},
          {path:"breakfast",component:MenuComponent},
          {path:"lunch",component:MenuComponent},
          {path:"dinner",component:MenuComponent},
          {path:"drinks",component:MenuComponent},
          {path:"desserts",component:MenuComponent},
          {path:"soups",component:MenuComponent},
          {path:"cart",component:CartComponent},
          {path:"order",component:OrderComponent},
          {path:"reservetable",component:ReservetableComponent},

        ]
      }
    ])
  ]
})
export class HomepageModule { }
