import { Component, OnInit } from '@angular/core';
import { Food } from '../admin/food.model';
import { AppService } from '../app.service';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart:Food[]=[]
totalPrice:string="";
totalPriceNumber:number=0;
originalPrice:number[] =[];
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.cart = this.appService.getCart();
    this.cart.map((item:Food) => {
      this.originalPrice.push(item.price);
      item.quantity = 1;
      this.totalPriceNumber = this.totalPriceNumber+item.price;
      this.totalPrice = this.totalPriceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    })
    this.appService.chartChangeListner().subscribe((res:any) => {
      this.cart = res;
      this.cart.map((item:Food) => {
        this.originalPrice.push(item.price);
        item.quantity = 1;
        this.totalPriceNumber = this.totalPriceNumber+item.price;
      this.totalPrice = this.totalPriceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      })
    }
    )
  }

  increaseQuantity(index:number){
    this.cart[index].quantity++;
    this.cart[index].price = this.originalPrice[index]*this.cart[index].quantity;
    this.totalPriceNumber = 0
    this.cart.forEach((item:Food) => {
      this.totalPriceNumber = this.totalPriceNumber+item.price;
      this.totalPrice = this.totalPriceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    })


  }

  decreaseQuantity(index:number){
    if(this.cart[index].quantity<=1){
   this.appService.deleteCart(index);
   this.originalPrice.splice(index,1);
   this.totalPriceNumber = 0
   this.cart.forEach((item:Food) => {
      this.totalPriceNumber = this.totalPriceNumber+item.price;
      this.totalPrice = this.totalPriceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    })
   return;
    }

    this.cart[index].quantity--;
    this.cart[index].price = this.originalPrice[index]*this.cart[index].quantity;
    this.totalPriceNumber = 0
    this.cart.forEach((item:Food) => {
      this.totalPriceNumber = this.totalPriceNumber+item.price;
      this.totalPrice = this.totalPriceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    })

  }

  deleteItem(index:number){
    this.appService.deleteCart(index);
    this.originalPrice.splice(index,1);
  }
}
