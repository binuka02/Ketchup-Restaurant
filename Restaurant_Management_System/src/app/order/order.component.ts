import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../admin/food.model';
import { AppService } from '../app.service';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
cart:Food[] =[];
cartNew :any= []
totalPrice:string = ""
totalPriceNumber:number = 0;
orderForm:FormGroup = new FormGroup({
  firstname: new FormControl(''),
  lastname: new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
  address: new FormControl(''),
  city: new FormControl('')

});
  constructor(private OrderService:OrderService, private appService:AppService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.cart = this.appService.getCart()
    this.cartNew = this.cart.map((item:Food) => {
      return{
        name:item.name,
        price:item.price,
        quantity:item.quantity
      }
    });
    this.cart.map((item:Food) => {
      this.totalPriceNumber = this.totalPriceNumber+item.price;
      this.totalPrice = this.totalPriceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    })
  }

  onSubmit(){
    if(this.orderForm.invalid){
      return;
    }
    this.router.navigate(["/checkout"],{queryParams:{...this.orderForm.value,amount:this.totalPriceNumber}})
    console.log("submit")
    // console.log(this.orderForm.value,this.cartNew)
    // this.http.post('http://localhost:3000/order',{...this.orderForm.value,items:this.cartNew,amount:this.totalPriceNumber}).subscribe((res:any) => {
    //   console.log(res)
    // } )

    // console.log(this.orderForm.value)
    // this.http.post('http://localhost:3000/order',{...this.orderForm.value}).subscribe((res:any) => {
    //   console.log(res)
    // } )
    // this.orderForm.reset();

  }
}
