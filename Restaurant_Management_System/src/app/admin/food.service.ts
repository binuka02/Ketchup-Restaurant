import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:3000/food';
  constructor(private http: HttpClient) { }

  addFood(food: Food,imageFile: File | null){
    console.log(food);
    const formData = new FormData();
    formData.append('name', food.name);
    formData.append('price', food.price.toString());
    formData.append('description', food.description);
    formData.append('type', food.type);
    if(imageFile){
      formData.append('foodImage', imageFile);
    }

    return this.http.post(this.url, formData);
  }

  getFoodList() {
    return this.http.get<Food[]>(this.url);
  }

  deleteFood(id:string){
    return this.http.delete(`${this.url}/${id}`);
  }

  updateFood(id:string,food:Food,imageFile: File | null){
    const formData = new FormData();
    formData.append('name', food.name);
    formData.append('price', food.price.toString());
    formData.append('description', food.description);
    formData.append('type', food.type);
    if(imageFile){
      formData.append('foodImage', imageFile);
    }
    return this.http.patch(`${this.url}/${id}`, formData);

  }
}
