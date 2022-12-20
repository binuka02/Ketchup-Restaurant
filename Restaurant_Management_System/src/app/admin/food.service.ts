import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:3000/food';
  constructor(private http: HttpClient) { }

  addFood(food: Food){
    console.log(food);
    return this.http.post(this.url, food);
  }

  getFoodList() {
    return this.http.get<Food[]>(this.url);
  }

  deleteFood(id:string){
    return this.http.delete(`${this.url}/${id}`);
  }

  updateFood(food:Food){
    return this.http.put(`${this.url}/${food._id}`, food);
  }
}
