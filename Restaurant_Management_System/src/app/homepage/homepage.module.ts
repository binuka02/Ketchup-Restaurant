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



@NgModule({
  declarations: [HomeBodyComponent,MenuComponent,NavbarComponent,FooterComponent,HomepageComponent,ReservetableComponent],
  imports: [
    CommonModule,

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
          {path:"cart",component:MenuComponent}
        ]
      }
    ])
  ]
})
export class HomepageModule { }
