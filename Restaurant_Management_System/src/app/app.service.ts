import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Food } from './admin/food.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {
cart:Food[] = []
cartChange = new Subject<Food[]>();
  constructor() { }

  getCart(){
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart') || '{}');
    }
    return this.cart;
  }

  addCart(item:Food){
    this.cart.push(item);
    this.cartChange.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteCart(index:number){
    this.cart.splice(index,1);
    this.cartChange.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  updateCart(index:number, item:Food){
    this.cart[index] = item;
    this.cartChange.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  chartChangeListner(){
    return this.cartChange.asObservable();
  }
}
