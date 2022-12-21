import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { HomepageService } from "../homepage.service";
// import { Food } from './app/admin/food.model';
// import { FoodService } from '../food.service';

@Component({
  selector: 'app-home-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})

export class BreakfastComponent implements OnInit{
  food: {
    _id: string,
    name: string,
    price: number,
    description: string,
    type: string,
    imageUrl:string
  }[] = [];
   constructor(private homePageService:HomepageService){}

  ngOnInit(): void {
    this.homePageService.getBreakfastItems().subscribe((res:any) => {
      console.log(res);
      this.food = res;

    })
  }

}

