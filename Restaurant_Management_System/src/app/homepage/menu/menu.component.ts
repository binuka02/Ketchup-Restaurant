import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Food } from "src/app/admin/food.model";
import { AppService } from "src/app/app.service";
import { WebsocketService } from "src/app/websocket.service";
import { HomepageService } from "../homepage.service";
import { getProductionUrl } from "src/app/utils/getProductionUrl";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit{
  getProductionUrl = getProductionUrl;
  menu = ""
  food: Food[] = [];
   constructor(private homePageService:HomepageService,private route:ActivatedRoute,private appService:AppService,private socket:WebsocketService){}

  ngOnInit(): void {


    this.route.url.subscribe((res:any) => {
      console.log(res[0].path);
      this.menu = res[0].path;
      this.socket.listenToServer('foodAdded').subscribe((res:any) => {
        if(res.type == this.menu) {
          this.food = [res,...this.food]
        }
        console.log(res);
      })

      this.socket.listenToServer('foodUpdated').subscribe((res:any) => {
        if(res.type == this.menu) {
          this.food = this.food.map((food) => {
            if(food._id == res._id) {
              return res
            }
            return food
          })
        }
      })

      this.socket.listenToServer('foodDeleted').subscribe((res:any) => {
        if(res.type == this.menu) {
          this.food = this.food.filter((food) => {
            if(food._id == res._id) {
              return false
            }
            return true
          })
        }
      })

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
    item.quantity = 1;
    this.appService.addCart(item);
  }

}

