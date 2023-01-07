import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Food } from "src/app/admin/food.model";
import { AppService } from "src/app/app.service";
import { HomepageService } from "../homepage.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit{
  menu = ""
  food: Food[] = [];
   constructor(private homePageService:HomepageService,private route:ActivatedRoute,private appService:AppService){}

  ngOnInit(): void {

    this.route.url.subscribe((res:any) => {
      console.log(res[0].path);
      this.menu = res[0].path;

      if(this.menu == "breakfast") {
      this.homePageService.getBreakfastItems().subscribe((res:any) => {
        console.log(res);
        this.food = res;
      })
      }

      if(this.menu == "lunch") {
        this.homePageService.getLunchItems().subscribe((res:any) => {
          console.log(res);
          this.food = res;
        })
    }

    if(this.menu == "dinner") {
      this.homePageService.getDinnerItems().subscribe((res:any) => {
        console.log(res);
        this.food = res;
      })
  }

  if(this.menu == "drinks") {
    this.homePageService.getDrinkItems().subscribe((res:any) => {
      console.log(res);
      this.food = res;
    })
}

if(this.menu == "desserts") {
  this.homePageService.getDessertItems().subscribe((res:any) => {
    console.log(res);
    this.food = res;
  })
}

if(this.menu == "soups") {
  this.homePageService.getSoupItems().subscribe((res:any) => {
    console.log(res);
    this.food = res;
  })
}

    })
  }

  addtoCart(item:Food){
    this.appService.addCart(item);
  }

}

